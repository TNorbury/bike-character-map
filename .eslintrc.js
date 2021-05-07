module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:nuxt/recommended"],
  plugins: [],
  // add your custom rules here
  rules: {
    quotes: ["warn", "double"],
    "comma-dangle": "off",
    "quote-props": "off",
    semi: "off",
    "vue/singleline-html-element-content-newline": "off",
    "space-before-function-paren": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "no-multiple-empty-lines": ["warn", { max: 3 }],
    "arrow-parens": "off",
  }
};
