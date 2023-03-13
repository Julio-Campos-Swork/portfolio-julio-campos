module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  rules:
    {'vue/multi-word-component-names': 0,
    'vue/no-use-v-if-with-v-for': 'off'}

}
