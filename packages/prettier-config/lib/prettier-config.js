'use strict';

const prettierConfig = {
  "arrowParens": "always",
  "printWidth": 100,
  "proseWrap": "never",
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "overrides": [
    {
      "files": "*.md",
      "options": {
        "printWidth": 80,
        "proseWrap": "never",
        "semi": false,
        "trailingComma": "none"
      }
    },
    {
      "files": "*.mdx",
      "options": {
        "printWidth": 100,
        "proseWrap": "never",
        "semi": false,
        "trailingComma": "none"
      }
    }
  ]
};

module.exports = prettierConfig;
