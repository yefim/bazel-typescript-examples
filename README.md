A collection of TypeScript code built by Bazel
================================================

## How to build yourself

### TypeScript binary with npm package

The example outputs an executable to run on any machine with Node installed.

``` bash
cd ts-binary-with-npm-package/
npm install
npm run build
node bazel-bin/app.js
```

### TypeScript web bundle with npm package

The example uses jQuery and lodash.

``` bash
cd ts-web-bundle-with-npm-package/
npm install
npm run build
open index.html
```
