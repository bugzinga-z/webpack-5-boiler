# webpack-5-boiler

## Fix

- In tsconfig.json insert `"jsx": "react-jsxdev"` in compilerOptions and set `"react/react-in-jsx-scope": "off",` in `.eslintrc.json` rules to use `["@babel/preset-react", { runtime: "automatic" }],` in `babel.config.js` and prevent to import React in your file.
