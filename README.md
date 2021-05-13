# webpack-5-boiler

## Fix

- In tsconfig.json insert `"jsx": "react-jsxdev"` in compilerOptions and set `"react/react-in-jsx-scope": "off",` in `.eslintrc.json` rules to use `["@babel/preset-react", { runtime: "automatic" }],` in `babel.config.js` and prevent to import React in your file.

- To resolve an issue prevents import component in tsx format, add "resolve - extensions" in webpack config:

```js
resolve: {
  extensions: [".tsx", ".ts", ".js"],
}
```

- Add a .eslintignore to resolve the error: Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser [GitHub](https://github.com/typescript-eslint/typescript-eslint/issues/1723)

## To know

- `modules: [path.resolve(__dirname, "src"), "node_modules"],` you are telling webpack to search for modules inside `src` then inside `node_modules`

- use `alias: { Styles: path.resolve(__dirname, "./styles") },` in webpack to import from an absolute path
