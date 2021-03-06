# Webpack5 boilerplate with React, TypeScript, ESLint strong rules

A complete Webpack 5 boilerplate to get started with React, TypeScript, ESLint and also PostCSS, Prettier and Broweserlists, of course with SASS support.

Get inspired by Jimmy Cleveland and his video on [YouTube](https://www.youtube.com/watch?v=TOb1c39m64A&t=3440s)

## Some cool fix

- In tsconfig.json insert `"jsx": "react-jsxdev"` in compilerOptions and set `"react/react-in-jsx-scope": "off",` in `.eslintrc.json` rules to use `["@babel/preset-react", { runtime: "automatic" }],` in `babel.config.js` and prevent to import React in your file.

- To resolve an issue prevents import component in tsx format, add "resolve - extensions" in webpack config:

```js
resolve: {
  extensions: [".tsx", ".ts", ".js"],
}
```

- Add a .eslintignore to resolve the error: Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser [GitHub](https://github.com/typescript-eslint/typescript-eslint/issues/1723)

- Add support for images check [StackOverflow](https://stackoverflow.com/questions/52759220/importing-images-in-typescript-react-cannot-find-module) and make SVG images inline.

## Nice to know

- `modules: [path.resolve(__dirname, "src"), "node_modules"],` you are telling webpack to search for modules inside `src` then inside `node_modules`

- use `alias: { Styles: path.resolve(__dirname, "./styles") },` in webpack to import from an absolute path

- you can set a max size for images in `webpack.config.js` setting, if an image is bigger than the condition it will not be in the dist folder:

```js
type: "asset", // asset is the default, you can set asset/resource, asset/inline
parser: {
  dataUrlCondition: {
    maxSize: 30 * 1024,
  }
}
```
