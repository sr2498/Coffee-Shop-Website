/* eslint-disable */

module.exports = {
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports.
    project: "./client/jsconfig.json",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["prettier"],
  plugins: ["react", "prettier", "import", "jsx-a11y", "react-hooks"],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        mjs: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "lines-between-class-members": 0,
    "import/prefer-default-export": 0,
    "max-len": ["error", { code: 175, ignoreComments: true }],
    "no-console": "error",
    "no-alert": "error",
    "no-caller": "error",
    "no-bitwise": "error",
    "no-cond-assign": "error",
    "no-trailing-spaces": "error",
    "no-multiple-empty-lines": ["error", { max: 3, maxEOF: 1 }],
    camelcase: "error",
    quotes: [
      "error",
      "single",
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
      },
    ],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js"],
      },
    ],
    "react/jsx-props-no-spreading": 0,
    "react/react-in-jsx-scope": 0,
    "react/destructuring-assignment": 0,
    "react/state-in-constructor": 0,
    "react/prop-types": 0,
    "react/no-array-index-key": 0,
    "react/jsx-indent": 0,
    "react/no-unused-state": "warn",
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "no-nested-ternary": 0,
    "no-plusplus": [
      "error",
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "no-param-reassign": 0,
    indent: 0,
    "class-methods-use-this": 0,
    "quote-props": 0,
    "no-useless-escape": "warn",
    "react/no-did-update-set-state": ["warn", "disallow-in-func"],
    "comma-dangle": ["error", "never"],
    "no-use-before-define": 0,
    "no-unused-vars": 0,
    // 'no-unused-vars': ['error', {vars: 0}],
    "no-underscore-dangle": 0,

    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: "either",
        depth: 25,
      },
    ],
  },
  overrides: [
    {
      files: [
        ".next/*",
        ".serverless/*",
        "templates/*.js",
        "bin/*.js",
        "lib/*.js",
      ],
      excludedFiles: "*.template.js",
      rules: {
        quotes: ["error", "double"],
      },
    },
  ],
  globals: {
    React: "writable",
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["./"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
