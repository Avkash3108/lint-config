module.exports = {
    "rules": {
        "promise/always-return": 0,
        "promise/no-return-wrap": "error",
        "promise/param-names": "warn",
        "promise/catch-or-return": ["error", {"allowThen": true }],
        "promise/no-native": "off",
        "promise/no-nesting": 0,
        "promise/no-promise-in-callback": "warn",
        "promise/no-callback-in-promise": "warn",
        "promise/avoid-new": "warn",
        "promise/no-new-statics": "error",
        "promise/no-return-in-finally": "warn",
        "promise/valid-params": "warn"
    }
};
