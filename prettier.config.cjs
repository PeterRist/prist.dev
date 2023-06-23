/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  trailingComma: 'es5',
  useTabs: true,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  bracketSpacing: false,
  jsxSingleQuote: true,
};

module.exports = config;
