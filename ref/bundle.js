(() => {
  "use strict";

  // Modules with instructions to unpack
  var __webpack_modules__ = [
    ,
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      // Adds metadata (I am a module)
      __webpack_require__.r(__webpack_exports__);

      // Adds a property 'default' to the exports object, as well as set its getter to () => __WEBPACK_DEFAULT_EXPORT__
      __webpack_require__.d(__webpack_exports__, {
        default: () => __WEBPACK_DEFAULT_EXPORT__,
      });

      function helloWorld() {
        console.log('Hello World');
      }

      const __WEBPACK_DEFAULT_EXPORT__ = helloWorld;
    },
  ];

  // Module cache
  var __webpack_module_cache__ = {};

  // The main require function, get module exports from module cache if present, unpack from __webpack_modules__ if not
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }

    // Create a new exports object (and put it into the cache)
    var module = (__webpack_module_cache__[moduleId] = {
      exports: {},
    });

    // Loads metadata as well as default export function into module.exports
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    return module.exports;
  }

  // Defines __webpack_require__.d, which receives the export object and defines a property 'default' as well as its getter in it
  (() => {
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        // If the module exports object doesn't already have the key, this time 'default',
        if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          // Define a property 'default', as well as set its getter to () => __WEBPACK_DEFAULT_EXPORT__
          // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
          // Since the getter function is defined inside the 'default' property on Line 14, it creates a closure (which creates a recording of the environment when the function was defined)
          // As a result, that function can still access the actual value pointed by __WEBPACK_DEFAULT_EXPORT__ later, in the last IIFE on Line 90.
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
        }
      }
    };
  })();

  // Defines __webpack_require__.o, basically obj.hasOwnProperty(prop)
  (() => {
    __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
  })();

  // Defines __webpack_require__.r, adding metadata (that it is a module) to whatever's passed in
  (() => {
    __webpack_require__.r = (exports) => {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
      }
      Object.defineProperty(exports, "__esModule", { value: true });
    };
  })();

  // Exports of Webpack itself, it seems
  var __webpack_exports__ = {};

  // The most important IIFE, loads everything to the browser
  (() => {
    // Inserts Module metadata to __webpack_exports__
    __webpack_require__.r(__webpack_exports__);

    // Loads the module to this variable.
    // Inside, there's a 'default' function which invokes the 'get default' getter inside, which invokes () => __WEBPACK_DEFAULT_EXPORT__
    var _hello_world__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

    // Ensuring the 'default' function is called with this set to undefined (since in strict mode)
    // Reference: https://stackoverflow.com/questions/11541134/javascript-syntax-0-fnargs
    (0, _hello_world__WEBPACK_IMPORTED_MODULE_0__.default)();
  })();
})();
