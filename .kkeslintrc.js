module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVesrsion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        'plugin:vue/recommended'
    ],
    "rules": {
    },
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        { "language": "vue", "autoFix": true }
    ]
};