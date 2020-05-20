module.exports = {
    "rules": {
        "jest/consistent-test-it": ["error", {"fn": "it", "withinDescribe": "it"}],
        "jest/expect-expect": 0,
        "jest/lowercase-name": ["error", {"ignore": ["describe"]}],
        "jest/no-alias-methods": "error",
        "jest/no-disabled-tests": "error",
        "jest/no-duplicate-hooks": "error",
        "jest/no-expect-resolves": "error",
        "jest/no-export": 0,
        "jest/no-focused-tests": "error",
        "jest/no-hooks": 0,
        "jest/no-identical-title": "error",
        "jest/no-if": "error",
        "jest/no-jasmine-globals": "error",
        "jest/no-jest-import": "error",
        "jest/no-mocks-import": "error",
        "jest/no-standalone-expect": "error",
        "jest/no-test-callback": "error",
        "jest/no-test-prefixes": "error",
        "jest/no-test-return-statement": 0,
        "jest/no-truthy-falsy": "error",
        "jest/no-try-expect": "error",
        "jest/prefer-called-with": "error",
        "jest/prefer-expect-assertions": 0,
        "jest/prefer-hooks-on-top": "error",
        "jest/prefer-inline-snapshots": "error",
        "jest/prefer-spy-on": "error",
        "jest/prefer-strict-equal": 0,
        "jest/prefer-to-be-null": "error",
        "jest/prefer-to-be-undefined": "error",
        "jest/prefer-to-contain": "error",
        "jest/prefer-to-have-length": "error",
        "jest/prefer-todo": "error",
        "jest/require-top-level-describe": 0,
        "jest/require-to-throw-message": "error",
        "jest/valid-describe": "error",
        "jest/valid-expect-in-promise": "error",
        "jest/valid-expect": "error",
        "jest/valid-title": "error",
        "mocha/valid-test-description": "error"
    }
};