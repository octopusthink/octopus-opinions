'use strict';

const eslintConfig = {
  "extends": ["airbnb", "plugin:jest/recommended", "prettier"],
  "parser": "babel-eslint",
  "plugins": ["emotion", "prettier", "react-hooks"],
  "rules": {
    "import/no-named-as-default": false,
    "import/prefer-default-export": false,
    "react/forbid-foreign-prop-types": false,
    "jsx-a11y/label-has-for": false,
    "jsx-a11y/label-has-associated-control": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/jsx-filename-extension": false,
    "prettier/prettier": "error"
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["./", "src"]
      }
    }
  }
};

module.exports = eslintConfig;