module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: true,
    },
    extends: [
        '@nuxtjs',
        '@nuxtjs/eslint-config-typescript/recommended',
        'plugin:nuxt/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': ['error'],
        'vue/html-indent': ['error', 4],
        'vue/singleline-html-element-content-newline': 0,
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        'vue/valid-v-slot': [
            'error',
            {
                allowModifiers: true,
            },
        ],
        semi: ['error', 'last'],
    },
    globals: {
        _: true,
    },
};
