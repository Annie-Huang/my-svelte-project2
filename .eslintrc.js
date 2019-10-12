module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module'
    },
    env: {
        es6: true,
        browser: true
    },
    plugins: [
        'prettier',
        'svelte3'
    ],
    extends: ['prettier'],
    overrides: [
        {
            files: ['**/*.svelte'],
            processor: 'svelte3/svelte3'
        }
    ],
    rules: {
        'prettier/prettier': 'error'
    },
    settings: {
        // ...
    }
};
