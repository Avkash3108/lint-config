module.exports = {
    "rules": {
        "import/newline-after-import": ["error", {"count": 1}],
        "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.test.js", "**/*.spec.js", "**/webpack*.js", "examples/**/*.js"]}],
        "import/order": ["error", {"groups": [["builtin", "external"], ["parent", "sibling", "index"]], "newlines-between": "always"}],
        "import/extensions": ["error", "always", { "js": "never" }],
        "import/named": "error",
    }
};
