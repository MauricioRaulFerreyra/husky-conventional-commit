//@ts-ignore
import js from "@eslint/js";
import globals from "globals";
//@ts-ignore
import reactHooks from "eslint-plugin-react-hooks";
//@ts-ignore
import eslintPluginPrettier from "eslint-plugin-prettier";
import reactRefresh from "eslint-plugin-react-refresh";
import prettier from "prettier";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist", "package.json", "node_modules"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      prettier.format,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "eslint-plugin-prettier": eslintPluginPrettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-duplicate-enum-values": "warn",
      "no-empty-function": "error",
      "no-implicit-coercion": "warn",
      eqeqeq: ["error", "always"],
    },
  },
);
