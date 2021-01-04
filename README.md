# [Backstage](https://backstage.io)

1. `@backstage/create-app`
2. `yarn create-plugin` -> `test`
3. Import the `@backstage/plugin-catalog` to the test plugin
4. Add `const catalogApi = useApi(catalogApiRef);` to [`ExampleFetchComponent.ts`](./plugins/test/src/components/ExampleFetchComponent/ExampleFetchComponent.tsx#79)
5. Run `cd plugins/test && yarn test`:
```
 FAIL  src/components/ExampleFetchComponent/ExampleFetchComponent.test.tsx
  ● Test suite failed to run

    Jest encountered an unexpected token

    This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

    By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/en/ecmascript-modules for how to enable it.
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/en/configuration.html

    Details:

    /Users/***/git/backstage-jest-error/node_modules/@backstage/plugin-catalog/dist/esm/index-8d5a0701.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){import { CatalogClient } from '@backstage/catalog-client';
                                                                                             ^^^^^^

    SyntaxError: Cannot use import statement outside a module

      at Runtime.createScriptFromCode (../../../node_modules/jest-runtime/build/index.js:1350:14)
```
