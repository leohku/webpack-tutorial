This repository contains an annotated `/ref/bundle.js` file that explains a minimal Webpack client-side bundle file. The `/build/bundle.js` is the original webpack generated file.

First, on Line 90 - the last IIFE, it inserts the Module metadata for webpack itself.

Then, it runs `__webpack_require__(1)`, where 1 is the module ID in the `__webpack_modules__` array on the top (which contains the instructions to create a module export object for a module).

A module export object includes the metadata for the module, as well as a `default` property that includes a function to find the entry function for that module `() => __WEBPACK_DEFAULT_EXPORT__`

`__webpack_require__` returns a module export object, which it either fetches from its module cache, or creates from scratch using the instruction from `__webpack_modules__` array.

If it chooses to create from scratch (which it does on load), it will first start from an empty export object, then pass it to the function inside `__webpack_modules__` where it adds Module metadata, then adds a property `default` to the exports object, as well as set its getter to `() => __WEBPACK_DEFAULT_EXPORT__`.

Inside the array's function, it executes the rest of the bundled code and sets `__WEBPACK_DEFAULT_EXPORT__` to the bundle's entry function.

After the code in the array finishes running, it returns control back to `__webpack_require__`, where it returns the fully formed export object to the last IIFE.

On line 100, it then executes the `default` function (with Closure of the array's environment), and with `this` set to `undefined` (in strict mode).

This is how Webpack executes bundled code client-side.