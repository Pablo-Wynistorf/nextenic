import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist", "node_modules"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "detect" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      /* Without these two, no-unused-vars does not see a component referenced
         only inside JSX and reports every import in the file as unused. */
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      /* Unused args prefixed with _ are intentional. */
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
  {
    /* Vite config runs in Node. */
    files: ["vite.config.js"],
    languageOptions: { globals: globals.node },
  },
  {
    /* These two modules deliberately export a provider component alongside its
       hook and helpers: I18nProvider with useI18n and the language list,
       ThemeProvider with useTheme and resolveTheme. Splitting them to satisfy the
       fast refresh heuristic would scatter one concern across several files for a
       dev-only convenience. */
    files: ["src/lib/i18n.jsx", "src/lib/theme.jsx"],
    rules: { "react-refresh/only-export-components": "off" },
  },
];
