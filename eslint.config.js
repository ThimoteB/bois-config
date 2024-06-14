import eslintJS from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  eslintJS.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    name: "eslint-config-bois-config",
    rules: {
      "no-debugger": "error",
      "no-console": "warn",
    },
  },
  {
    ignores: ["**/node_modules/**", "dist/**"],
  },
];
