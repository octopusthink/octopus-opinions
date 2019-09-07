'use strict';

const eslintConfig = {
  "extends": ["airbnb", "plugin:jest/recommended", "prettier"],
  "parser": "babel-eslint",
  "plugins": ["emotion", "prettier", "react-hooks"],
  "rules": {
    "import/no-named-as-default": "off",
    "import/prefer-default-export": "off",
    "react/forbid-foreign-prop-types": "off",
    "react/jsx-fragments": ["error", "element"],
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/label-has-associated-control": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/jsx-filename-extension": "off",
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
