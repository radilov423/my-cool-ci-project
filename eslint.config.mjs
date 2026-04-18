import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn", // предупреждать о неиспользуемых переменных
      "no-console": "off", // разрешить console.log
    },
    languageOptions: {
      globals: {
        process: "readonly",
      },
    },
  },
];
