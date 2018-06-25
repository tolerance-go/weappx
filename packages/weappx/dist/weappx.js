(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else if (typeof exports === 'object') exports['weappx'] = factory();
  else root['weappx'] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
  return /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ); // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          /******/ configurable: false,
          /******/ enumerable: true,
          /******/ get: getter,
          /******/
        });
        /******/
      }
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default'];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, 'a', getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 42));
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(
          20
        );

        /** Detect free variable `self`. */
        var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

        /** Used as a reference to the global object. */
        var root =
          __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__['a' /* default */] ||
          freeSelf ||
          Function('return this')();

        /* harmony default export */ __webpack_exports__['a'] = root;

        /***/
      },
      /* 1 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(10);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(
          44
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(
          45
        );

        /** `Object#toString` result references. */
        var nullTag = '[object Null]',
          undefinedTag = '[object Undefined]';

        /** Built-in value references. */
        var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__['a' /* default */]
          ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__['a' /* default */].toStringTag
          : undefined;

        /**
         * The base implementation of `getTag` without fallbacks for buggy environments.
         *
         * @private
         * @param {*} value The value to query.
         * @returns {string} Returns the `toStringTag`.
         */
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object(value)
            ? Object(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__['a' /* default */])(value)
            : Object(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__['a' /* default */])(value);
        }

        /* harmony default export */ __webpack_exports__['a'] = baseGetTag;

        /***/
      },
      /* 2 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /**
         * Checks if `value` is object-like. A value is object-like if it's not `null`
         * and has a `typeof` result of "object".
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
         * @example
         *
         * _.isObjectLike({});
         * // => true
         *
         * _.isObjectLike([1, 2, 3]);
         * // => true
         *
         * _.isObjectLike(_.noop);
         * // => false
         *
         * _.isObjectLike(null);
         * // => false
         */
        function isObjectLike(value) {
          return value != null && typeof value == 'object';
        }

        /* harmony default export */ __webpack_exports__['a'] = isObjectLike;

        /***/
      },
      /* 3 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(
          1
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isObject_js__ = __webpack_require__(
          11
        );

        /** `Object#toString` result references. */
        var asyncTag = '[object AsyncFunction]',
          funcTag = '[object Function]',
          genTag = '[object GeneratorFunction]',
          proxyTag = '[object Proxy]';

        /**
         * Checks if `value` is classified as a `Function` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a function, else `false`.
         * @example
         *
         * _.isFunction(_);
         * // => true
         *
         * _.isFunction(/abc/);
         * // => false
         */
        function isFunction(value) {
          if (!Object(__WEBPACK_IMPORTED_MODULE_1__isObject_js__['a' /* default */])(value)) {
            return false;
          }
          // The use of `Object#toString` avoids issues with the `typeof` operator
          // in Safari 9 which returns 'object' for typed arrays and other constructors.
          var tag = Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__['a' /* default */])(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }

        /* harmony default export */ __webpack_exports__['a'] = isFunction;

        /***/
      },
      /* 4 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(
          1
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(
          47
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(
          2
        );

        /** `Object#toString` result references. */
        var objectTag = '[object Object]';

        /** Used for built-in method references. */
        var funcProto = Function.prototype,
          objectProto = Object.prototype;

        /** Used to resolve the decompiled source of functions. */
        var funcToString = funcProto.toString;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /** Used to infer the `Object` constructor. */
        var objectCtorString = funcToString.call(Object);

        /**
         * Checks if `value` is a plain object, that is, an object created by the
         * `Object` constructor or one with a `[[Prototype]]` of `null`.
         *
         * @static
         * @memberOf _
         * @since 0.8.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
         * @example
         *
         * function Foo() {
         *   this.a = 1;
         * }
         *
         * _.isPlainObject(new Foo);
         * // => false
         *
         * _.isPlainObject([1, 2, 3]);
         * // => false
         *
         * _.isPlainObject({ 'x': 0, 'y': 0 });
         * // => true
         *
         * _.isPlainObject(Object.create(null));
         * // => true
         */
        function isPlainObject(value) {
          if (
            !Object(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__['a' /* default */])(value) ||
            Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__['a' /* default */])(value) !=
              objectTag
          ) {
            return false;
          }
          var proto = Object(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__['a' /* default */])(
            value
          );
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
          return (
            typeof Ctor == 'function' &&
            Ctor instanceof Ctor &&
            funcToString.call(Ctor) == objectCtorString
          );
        }

        /* harmony default export */ __webpack_exports__['a'] = isPlainObject;

        /***/
      },
      /* 5 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /* WEBPACK VAR INJECTION */ (function(process) {
          /**
           * Copyright (c) 2013-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */

          /**
           * Use invariant() to assert state which your program assumes to be true.
           *
           * Provide sprintf-style format (only %s is supported) and arguments
           * to provide information about what broke and what you were
           * expecting.
           *
           * The invariant message will be stripped in production, but the invariant
           * will remain to ensure logic does not differ in production.
           */

          var invariant = function(condition, format, a, b, c, d, e, f) {
            if (process.env.NODE_ENV !== 'production') {
              if (format === undefined) {
                throw new Error('invariant requires an error message argument');
              }
            }

            if (!condition) {
              var error;
              if (format === undefined) {
                error = new Error(
                  'Minified exception occurred; use the non-minified dev environment ' +
                    'for the full error message and additional helpful warnings.'
                );
              } else {
                var args = [a, b, c, d, e, f];
                var argIndex = 0;
                error = new Error(
                  format.replace(/%s/g, function() {
                    return args[argIndex++];
                  })
                );
                error.name = 'Invariant Violation';
              }

              error.framesToPop = 1; // we don't care about invariant's own frame
              throw error;
            }
          };

          module.exports = invariant;

          /* WEBPACK VAR INJECTION */
        }.call(exports, __webpack_require__(8)));

        /***/
      },
      /* 6 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /**
         * Checks if `value` is classified as an `Array` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an array, else `false`.
         * @example
         *
         * _.isArray([1, 2, 3]);
         * // => true
         *
         * _.isArray(document.body.children);
         * // => false
         *
         * _.isArray('abc');
         * // => false
         *
         * _.isArray(_.noop);
         * // => false
         */
        var isArray = Array.isArray;

        /* harmony default export */ __webpack_exports__['a'] = isArray;

        /***/
      },
      /* 7 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseIsNative_js__ = __webpack_require__(
          69
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getValue_js__ = __webpack_require__(
          72
        );

        /**
         * Gets the native function at `key` of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {string} key The key of the method to get.
         * @returns {*} Returns the function if it's native, else `undefined`.
         */
        function getNative(object, key) {
          var value = Object(__WEBPACK_IMPORTED_MODULE_1__getValue_js__['a' /* default */])(
            object,
            key
          );
          return Object(__WEBPACK_IMPORTED_MODULE_0__baseIsNative_js__['a' /* default */])(value)
            ? value
            : undefined;
        }

        /* harmony default export */ __webpack_exports__['a'] = getNative;

        /***/
      },
      /* 8 */
      /***/ function(module, exports) {
        // shim for using process in browser
        var process = (module.exports = {});

        // cached from whatever global is present so that test runners that stub it
        // don't break things.  But we need to wrap it in a try catch in case it is
        // wrapped in strict mode code which doesn't define any globals.  It's inside a
        // function because try/catches deoptimize in certain engines.

        var cachedSetTimeout;
        var cachedClearTimeout;

        function defaultSetTimout() {
          throw new Error('setTimeout has not been defined');
        }
        function defaultClearTimeout() {
          throw new Error('clearTimeout has not been defined');
        }
        (function() {
          try {
            if (typeof setTimeout === 'function') {
              cachedSetTimeout = setTimeout;
            } else {
              cachedSetTimeout = defaultSetTimout;
            }
          } catch (e) {
            cachedSetTimeout = defaultSetTimout;
          }
          try {
            if (typeof clearTimeout === 'function') {
              cachedClearTimeout = clearTimeout;
            } else {
              cachedClearTimeout = defaultClearTimeout;
            }
          } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
          }
        })();
        function runTimeout(fun) {
          if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
          }
          // if setTimeout wasn't available but was latter defined
          if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
          }
          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0);
            }
          }
        }
        function runClearTimeout(marker) {
          if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
          }
          // if clearTimeout wasn't available but was latter defined
          if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
          }
          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
            } catch (e) {
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
              // Some versions of I.E. have different rules for clearTimeout vs setTimeout
              return cachedClearTimeout.call(this, marker);
            }
          }
        }
        var queue = [];
        var draining = false;
        var currentQueue;
        var queueIndex = -1;

        function cleanUpNextTick() {
          if (!draining || !currentQueue) {
            return;
          }
          draining = false;
          if (currentQueue.length) {
            queue = currentQueue.concat(queue);
          } else {
            queueIndex = -1;
          }
          if (queue.length) {
            drainQueue();
          }
        }

        function drainQueue() {
          if (draining) {
            return;
          }
          var timeout = runTimeout(cleanUpNextTick);
          draining = true;

          var len = queue.length;
          while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
              if (currentQueue) {
                currentQueue[queueIndex].run();
              }
            }
            queueIndex = -1;
            len = queue.length;
          }
          currentQueue = null;
          draining = false;
          runClearTimeout(timeout);
        }

        process.nextTick = function(fun) {
          var args = new Array(arguments.length - 1);
          if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
            }
          }
          queue.push(new Item(fun, args));
          if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
          }
        };

        // v8 likes predictible objects
        function Item(fun, array) {
          this.fun = fun;
          this.array = array;
        }
        Item.prototype.run = function() {
          this.fun.apply(null, this.array);
        };
        process.title = 'browser';
        process.browser = true;
        process.env = {};
        process.argv = [];
        process.version = ''; // empty string to avoid regexp issues
        process.versions = {};

        function noop() {}

        process.on = noop;
        process.addListener = noop;
        process.once = noop;
        process.off = noop;
        process.removeListener = noop;
        process.removeAllListeners = noop;
        process.emit = noop;
        process.prependListener = noop;
        process.prependOnceListener = noop;

        process.listeners = function(name) {
          return [];
        };

        process.binding = function(name) {
          throw new Error('process.binding is not supported');
        };

        process.cwd = function() {
          return '/';
        };
        process.chdir = function(dir) {
          throw new Error('process.chdir is not supported');
        };
        process.umask = function() {
          return 0;
        };

        /***/
      },
      /* 9 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /**
         * This method returns the first argument it receives.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Util
         * @param {*} value Any value.
         * @returns {*} Returns `value`.
         * @example
         *
         * var object = { 'a': 1 };
         *
         * console.log(_.identity(object) === object);
         * // => true
         */
        function identity(value) {
          return value;
        }

        /* harmony default export */ __webpack_exports__['a'] = identity;

        /***/
      },
      /* 10 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(0);

        /** Built-in value references. */
        var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__['a' /* default */].Symbol;

        /* harmony default export */ __webpack_exports__['a'] = Symbol;

        /***/
      },
      /* 11 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /**
         * Checks if `value` is the
         * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
         * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an object, else `false`.
         * @example
         *
         * _.isObject({});
         * // => true
         *
         * _.isObject([1, 2, 3]);
         * // => true
         *
         * _.isObject(_.noop);
         * // => true
         *
         * _.isObject(null);
         * // => false
         */
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == 'object' || type == 'function');
        }

        /* harmony default export */ __webpack_exports__['a'] = isObject;

        /***/
      },
      /* 12 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isFunction_js__ = __webpack_require__(
          3
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isLength_js__ = __webpack_require__(
          25
        );

        /**
         * Checks if `value` is array-like. A value is considered array-like if it's
         * not a function and has a `value.length` that's an integer greater than or
         * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
         * @example
         *
         * _.isArrayLike([1, 2, 3]);
         * // => true
         *
         * _.isArrayLike(document.body.children);
         * // => true
         *
         * _.isArrayLike('abc');
         * // => true
         *
         * _.isArrayLike(_.noop);
         * // => false
         */
        function isArrayLike(value) {
          return (
            value != null &&
            Object(__WEBPACK_IMPORTED_MODULE_1__isLength_js__['a' /* default */])(value.length) &&
            !Object(__WEBPACK_IMPORTED_MODULE_0__isFunction_js__['a' /* default */])(value)
          );
        }

        /* harmony default export */ __webpack_exports__['a'] = isArrayLike;

        /***/
      },
      /* 13 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(
          1
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArray_js__ = __webpack_require__(6);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(
          2
        );

        /** `Object#toString` result references. */
        var stringTag = '[object String]';

        /**
         * Checks if `value` is classified as a `String` primitive or object.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a string, else `false`.
         * @example
         *
         * _.isString('abc');
         * // => true
         *
         * _.isString(1);
         * // => false
         */
        function isString(value) {
          return (
            typeof value == 'string' ||
            (!Object(__WEBPACK_IMPORTED_MODULE_1__isArray_js__['a' /* default */])(value) &&
              Object(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__['a' /* default */])(value) &&
              Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__['a' /* default */])(value) ==
                stringTag)
          );
        }

        /* harmony default export */ __webpack_exports__['a'] = isString;

        /***/
      },
      /* 14 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(
          1
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__ = __webpack_require__(
          2
        );

        /** `Object#toString` result references. */
        var symbolTag = '[object Symbol]';

        /**
         * Checks if `value` is classified as a `Symbol` primitive or object.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
         * @example
         *
         * _.isSymbol(Symbol.iterator);
         * // => true
         *
         * _.isSymbol('abc');
         * // => false
         */
        function isSymbol(value) {
          return (
            typeof value == 'symbol' ||
            (Object(__WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__['a' /* default */])(value) &&
              Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__['a' /* default */])(value) ==
                symbolTag)
          );
        }

        /* harmony default export */ __webpack_exports__['a'] = isSymbol;

        /***/
      },
      /* 15 */
      /***/ function(module, exports) {
        module.exports = function(originalModule) {
          if (!originalModule.webpackPolyfill) {
            var module = Object.create(originalModule);
            // module.parent = undefined by default
            if (!module.children) module.children = [];
            Object.defineProperty(module, 'loaded', {
              enumerable: true,
              get: function() {
                return module.l;
              },
            });
            Object.defineProperty(module, 'id', {
              enumerable: true,
              get: function() {
                return module.i;
              },
            });
            Object.defineProperty(module, 'exports', {
              enumerable: true,
            });
            module.webpackPolyfill = 1;
          }
          return module;
        };

        /***/
      },
      /* 16 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseIsMap_js__ = __webpack_require__(
          80
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseUnary_js__ = __webpack_require__(
          30
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nodeUtil_js__ = __webpack_require__(
          31
        );

        /* Node.js helper references. */
        var nodeIsMap =
          __WEBPACK_IMPORTED_MODULE_2__nodeUtil_js__['a' /* default */] &&
          __WEBPACK_IMPORTED_MODULE_2__nodeUtil_js__['a' /* default */].isMap;

        /**
         * Checks if `value` is classified as a `Map` object.
         *
         * @static
         * @memberOf _
         * @since 4.3.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a map, else `false`.
         * @example
         *
         * _.isMap(new Map);
         * // => true
         *
         * _.isMap(new WeakMap);
         * // => false
         */
        var isMap = nodeIsMap
          ? Object(__WEBPACK_IMPORTED_MODULE_1__baseUnary_js__['a' /* default */])(nodeIsMap)
          : __WEBPACK_IMPORTED_MODULE_0__baseIsMap_js__['a' /* default */];

        /* harmony default export */ __webpack_exports__['a'] = isMap;

        /***/
      },
      /* 17 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony export (immutable) */ __webpack_exports__['a'] = ownKeys;
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isMap__ = __webpack_require__(
          16
        );

        function ownKeys(object) {
          if (Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isMap__['a' /* default */])(object)) {
            return Array.from(object.keys());
          }

          if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
            return Reflect.ownKeys(object);
          }

          var keys = Object.getOwnPropertyNames(object);

          if (typeof Object.getOwnPropertySymbols === 'function') {
            keys = keys.concat(Object.getOwnPropertySymbols(object));
          }

          return keys;
        }

        /***/
      },
      /* 18 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        var eventBus = {
          _listeners: {},
          _eventCache: {},
          isHappened: function isHappened(type) {
            return !!this._eventCache[type];
          },
          takeLast: function takeLast(type) {
            if (this._eventCache.hasOwnProperty(type)) {
              return Promise.resolve(this._eventCache[type]);
            }
            return this.take(type);
          },
          take: function take(type) {
            var _this = this;

            return new Promise(function(resolve, reject) {
              try {
                _this.once(type, resolve);
              } catch (err) {
                reject(err);
              }
            });
          },
          once: function once(type, cb, scope) {
            var un = this.listen(type, function(payload) {
              cb.call(scope, payload);
              un();
            });
          },
          listen: function listen(type, cb, scope) {
            var _this2 = this;

            var index = void 0;
            if (typeof this._listeners[type] !== 'undefined') {
              index = this._listeners.length;
              this._listeners[type].push({ scope: scope, cb: cb });
            } else {
              index = 0;
              this._listeners[type] = [{ scope: scope, cb: cb }];
            }
            var unListen = function unListen() {
              _this2._listeners[type].splice(index, 1);
            };
            return unListen;
          },
          emit: function emit(type, payload) {
            this._eventCache[type] = payload;
            var listeners = this._match(type);
            if (typeof listeners === 'undefined') return;
            listeners.forEach(function(listen) {
              listen.cb.call(listen.scope, payload);
            });
          },
          _match: function _match(type) {
            for (var key in this._listeners) {
              if (new RegExp(key).test(type)) {
                return this._listeners[key];
              }
            }
          },
        };

        exports.default = eventBus;
        module.exports = exports['default'];

        /***/
      },
      /* 19 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony export (immutable) */ __webpack_exports__['a'] = createAction;
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_identity__ = __webpack_require__(
          9
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isFunction__ = __webpack_require__(
          3
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_es_isNull__ = __webpack_require__(
          46
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant__ = __webpack_require__(5);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant___default = __webpack_require__.n(
          __WEBPACK_IMPORTED_MODULE_3_invariant__
        );

        function createAction(type) {
          var payloadCreator =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : __WEBPACK_IMPORTED_MODULE_0_lodash_es_identity__['a' /* default */];
          var metaCreator = arguments[2];

          __WEBPACK_IMPORTED_MODULE_3_invariant___default()(
            Object(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isFunction__['a' /* default */])(
              payloadCreator
            ) ||
              Object(__WEBPACK_IMPORTED_MODULE_2_lodash_es_isNull__['a' /* default */])(
                payloadCreator
              ),
            'Expected payloadCreator to be a function, undefined or null'
          );

          var finalPayloadCreator =
            Object(__WEBPACK_IMPORTED_MODULE_2_lodash_es_isNull__['a' /* default */])(
              payloadCreator
            ) ||
            payloadCreator === __WEBPACK_IMPORTED_MODULE_0_lodash_es_identity__['a' /* default */]
              ? __WEBPACK_IMPORTED_MODULE_0_lodash_es_identity__['a' /* default */]
              : function(head) {
                  for (
                    var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1;
                    _key < _len;
                    _key++
                  ) {
                    args[_key - 1] = arguments[_key];
                  }

                  return head instanceof Error
                    ? head
                    : payloadCreator.apply(undefined, [head].concat(args));
                };

          var hasMeta = Object(
            __WEBPACK_IMPORTED_MODULE_1_lodash_es_isFunction__['a' /* default */]
          )(metaCreator);
          var typeString = type.toString();

          var actionCreator = function actionCreator() {
            var payload = finalPayloadCreator.apply(undefined, arguments);
            var action = { type: type };

            if (payload instanceof Error) {
              action.error = true;
            }

            if (payload !== undefined) {
              action.payload = payload;
            }

            if (hasMeta) {
              action.meta = metaCreator.apply(undefined, arguments);
            }

            return action;
          };

          actionCreator.toString = function() {
            return typeString;
          };

          return actionCreator;
        }

        /***/
      },
      /* 20 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* WEBPACK VAR INJECTION */ (function(global) {
          /** Detect free variable `global` from Node.js. */
          var freeGlobal =
            typeof global == 'object' && global && global.Object === Object && global;

          /* harmony default export */ __webpack_exports__['a'] = freeGlobal;

          /* WEBPACK VAR INJECTION */
        }.call(__webpack_exports__, __webpack_require__(21)));

        /***/
      },
      /* 21 */
      /***/ function(module, exports) {
        var g;

        // This works in non-strict mode
        g = (function() {
          return this;
        })();

        try {
          // This works if eval is allowed (see CSP)
          g = g || Function('return this')() || (1, eval)('this');
        } catch (e) {
          // This works if the window reference is available
          if (typeof window === 'object') g = window;
        }

        // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}

        module.exports = g;

        /***/
      },
      /* 22 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony export (immutable) */ __webpack_exports__['a'] = handleAction;
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isFunction__ = __webpack_require__(
          3
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(
          4
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_es_identity__ = __webpack_require__(
          9
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_es_isNil__ = __webpack_require__(
          24
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_es_isUndefined__ = __webpack_require__(
          48
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_es_includes__ = __webpack_require__(
          49
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_invariant__ = __webpack_require__(5);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_invariant___default = __webpack_require__.n(
          __WEBPACK_IMPORTED_MODULE_6_invariant__
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__combineActions__ = __webpack_require__(
          34
        );
        var _slicedToArray = (function() {
          function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;
            try {
              for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i['return']) _i['return']();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          }
          return function(arr, i) {
            if (Array.isArray(arr)) {
              return arr;
            } else if (Symbol.iterator in Object(arr)) {
              return sliceIterator(arr, i);
            } else {
              throw new TypeError('Invalid attempt to destructure non-iterable instance');
            }
          };
        })();

        function handleAction(type) {
          var reducer =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : __WEBPACK_IMPORTED_MODULE_2_lodash_es_identity__['a' /* default */];
          var defaultState = arguments[2];

          var types = type
            .toString()
            .split(__WEBPACK_IMPORTED_MODULE_7__combineActions__['a' /* ACTION_TYPE_DELIMITER */]);
          __WEBPACK_IMPORTED_MODULE_6_invariant___default()(
            !Object(__WEBPACK_IMPORTED_MODULE_4_lodash_es_isUndefined__['a' /* default */])(
              defaultState
            ),
            'defaultState for reducer handling ' + types.join(', ') + ' should be defined'
          );
          __WEBPACK_IMPORTED_MODULE_6_invariant___default()(
            Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isFunction__['a' /* default */])(
              reducer
            ) ||
              Object(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__['a' /* default */])(
                reducer
              ),
            'Expected reducer to be a function or object with next and throw reducers'
          );

          var _ref = Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isFunction__['a' /* default */])(
              reducer
            )
              ? [reducer, reducer]
              : [reducer.next, reducer.throw].map(function(aReducer) {
                  return Object(__WEBPACK_IMPORTED_MODULE_3_lodash_es_isNil__['a' /* default */])(
                    aReducer
                  )
                    ? __WEBPACK_IMPORTED_MODULE_2_lodash_es_identity__['a' /* default */]
                    : aReducer;
                }),
            _ref2 = _slicedToArray(_ref, 2),
            nextReducer = _ref2[0],
            throwReducer = _ref2[1];

          return function() {
            var state =
              arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
            var action = arguments[1];
            var actionType = action.type;

            if (
              !actionType ||
              !Object(__WEBPACK_IMPORTED_MODULE_5_lodash_es_includes__['a' /* default */])(
                types,
                actionType.toString()
              )
            ) {
              return state;
            }

            return (action.error === true ? throwReducer : nextReducer)(state, action);
          };
        }

        /***/
      },
      /* 23 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /**
         * Creates a unary function that invokes `func` with its argument transformed.
         *
         * @private
         * @param {Function} func The function to wrap.
         * @param {Function} transform The argument transform.
         * @returns {Function} Returns the new function.
         */
        function overArg(func, transform) {
          return function(arg) {
            return func(transform(arg));
          };
        }

        /* harmony default export */ __webpack_exports__['a'] = overArg;

        /***/
      },
      /* 24 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /**
         * Checks if `value` is `null` or `undefined`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
         * @example
         *
         * _.isNil(null);
         * // => true
         *
         * _.isNil(void 0);
         * // => true
         *
         * _.isNil(NaN);
         * // => false
         */
        function isNil(value) {
          return value == null;
        }

        /* harmony default export */ __webpack_exports__['a'] = isNil;

        /***/
      },
      /* 25 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /** Used as references for various `Number` constants. */
        var MAX_SAFE_INTEGER = 9007199254740991;

        /**
         * Checks if `value` is a valid array-like length.
         *
         * **Note:** This method is loosely based on
         * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
         * @example
         *
         * _.isLength(3);
         * // => true
         *
         * _.isLength(Number.MIN_VALUE);
         * // => false
         *
         * _.isLength(Infinity);
         * // => false
         *
         * _.isLength('3');
         * // => false
         */
        function isLength(value) {
          return (
            typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER
          );
        }

        /* harmony default export */ __webpack_exports__['a'] = isLength;

        /***/
      },
      /* 26 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /**
         * A specialized version of `_.map` for arrays without support for iteratee
         * shorthands.
         *
         * @private
         * @param {Array} [array] The array to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array} Returns the new mapped array.
         */
        function arrayMap(array, iteratee) {
          var index = -1,
            length = array == null ? 0 : array.length,
            result = Array(length);

          while (++index < length) {
            result[index] = iteratee(array[index], index, array);
          }
          return result;
        }

        /* harmony default export */ __webpack_exports__['a'] = arrayMap;

        /***/
      },
      /* 27 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseIsArguments_js__ = __webpack_require__(
          62
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__ = __webpack_require__(
          2
        );

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /** Built-in value references. */
        var propertyIsEnumerable = objectProto.propertyIsEnumerable;

        /**
         * Checks if `value` is likely an `arguments` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an `arguments` object,
         *  else `false`.
         * @example
         *
         * _.isArguments(function() { return arguments; }());
         * // => true
         *
         * _.isArguments([1, 2, 3]);
         * // => false
         */
        var isArguments = Object(
          __WEBPACK_IMPORTED_MODULE_0__baseIsArguments_js__['a' /* default */]
        )(
          (function() {
            return arguments;
          })()
        )
          ? __WEBPACK_IMPORTED_MODULE_0__baseIsArguments_js__['a' /* default */]
          : function(value) {
              return (
                Object(__WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__['a' /* default */])(value) &&
                hasOwnProperty.call(value, 'callee') &&
                !propertyIsEnumerable.call(value, 'callee')
              );
            };

        /* harmony default export */ __webpack_exports__['a'] = isArguments;

        /***/
      },
      /* 28 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* WEBPACK VAR INJECTION */ (function(module) {
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(0);
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stubFalse_js__ = __webpack_require__(
            63
          );

          /** Detect free variable `exports`. */
          var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

          /** Detect free variable `module`. */
          var freeModule =
            freeExports && typeof module == 'object' && module && !module.nodeType && module;

          /** Detect the popular CommonJS extension `module.exports`. */
          var moduleExports = freeModule && freeModule.exports === freeExports;

          /** Built-in value references. */
          var Buffer = moduleExports
            ? __WEBPACK_IMPORTED_MODULE_0__root_js__['a' /* default */].Buffer
            : undefined;

          /* Built-in method references for those with the same name as other `lodash` methods. */
          var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

          /**
           * Checks if `value` is a buffer.
           *
           * @static
           * @memberOf _
           * @since 4.3.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
           * @example
           *
           * _.isBuffer(new Buffer(2));
           * // => true
           *
           * _.isBuffer(new Uint8Array(2));
           * // => false
           */
          var isBuffer =
            nativeIsBuffer || __WEBPACK_IMPORTED_MODULE_1__stubFalse_js__['a' /* default */];

          /* harmony default export */ __webpack_exports__['a'] = isBuffer;

          /* WEBPACK VAR INJECTION */
        }.call(__webpack_exports__, __webpack_require__(15)(module)));

        /***/
      },
      /* 29 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseIsTypedArray_js__ = __webpack_require__(
          65
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseUnary_js__ = __webpack_require__(
          30
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nodeUtil_js__ = __webpack_require__(
          31
        );

        /* Node.js helper references. */
        var nodeIsTypedArray =
          __WEBPACK_IMPORTED_MODULE_2__nodeUtil_js__['a' /* default */] &&
          __WEBPACK_IMPORTED_MODULE_2__nodeUtil_js__['a' /* default */].isTypedArray;

        /**
         * Checks if `value` is classified as a typed array.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
         * @example
         *
         * _.isTypedArray(new Uint8Array);
         * // => true
         *
         * _.isTypedArray([]);
         * // => false
         */
        var isTypedArray = nodeIsTypedArray
          ? Object(__WEBPACK_IMPORTED_MODULE_1__baseUnary_js__['a' /* default */])(nodeIsTypedArray)
          : __WEBPACK_IMPORTED_MODULE_0__baseIsTypedArray_js__['a' /* default */];

        /* harmony default export */ __webpack_exports__['a'] = isTypedArray;

        /***/
      },
      /* 30 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /**
         * The base implementation of `_.unary` without support for storing metadata.
         *
         * @private
         * @param {Function} func The function to cap arguments for.
         * @returns {Function} Returns the new capped function.
         */
        function baseUnary(func) {
          return function(value) {
            return func(value);
          };
        }

        /* harmony default export */ __webpack_exports__['a'] = baseUnary;

        /***/
      },
      /* 31 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* WEBPACK VAR INJECTION */ (function(module) {
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(
            20
          );

          /** Detect free variable `exports`. */
          var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

          /** Detect free variable `module`. */
          var freeModule =
            freeExports && typeof module == 'object' && module && !module.nodeType && module;

          /** Detect the popular CommonJS extension `module.exports`. */
          var moduleExports = freeModule && freeModule.exports === freeExports;

          /** Detect free variable `process` from Node.js. */
          var freeProcess =
            moduleExports &&
            __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__['a' /* default */].process;

          /** Used to access faster Node.js helpers. */
          var nodeUtil = (function() {
            try {
              // Use `util.types` for Node.js 10+.
              var types = freeModule && freeModule.require && freeModule.require('util').types;

              if (types) {
                return types;
              }

              // Legacy `process.binding('util')` for Node.js < 10.
              return freeProcess && freeProcess.binding && freeProcess.binding('util');
            } catch (e) {}
          })();

          /* harmony default export */ __webpack_exports__['a'] = nodeUtil;

          /* WEBPACK VAR INJECTION */
        }.call(__webpack_exports__, __webpack_require__(15)(module)));

        /***/
      },
      /* 32 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isPrototype_js__ = __webpack_require__(
          33
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nativeKeys_js__ = __webpack_require__(
          66
        );

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
         * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names.
         */
        function baseKeys(object) {
          if (!Object(__WEBPACK_IMPORTED_MODULE_0__isPrototype_js__['a' /* default */])(object)) {
            return Object(__WEBPACK_IMPORTED_MODULE_1__nativeKeys_js__['a' /* default */])(object);
          }
          var result = [];
          for (var key in Object(object)) {
            if (hasOwnProperty.call(object, key) && key != 'constructor') {
              result.push(key);
            }
          }
          return result;
        }

        /* harmony default export */ __webpack_exports__['a'] = baseKeys;

        /***/
      },
      /* 33 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /**
         * Checks if `value` is likely a prototype object.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
         */
        function isPrototype(value) {
          var Ctor = value && value.constructor,
            proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

          return value === proto;
        }

        /* harmony default export */ __webpack_exports__['a'] = isPrototype;

        /***/
      },
      /* 34 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'a', function() {
          return ACTION_TYPE_DELIMITER;
        });
        /* harmony export (immutable) */ __webpack_exports__['b'] = combineActions;
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isString__ = __webpack_require__(
          13
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isFunction__ = __webpack_require__(
          3
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_es_isEmpty__ = __webpack_require__(
          67
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_es_toString__ = __webpack_require__(
          77
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_es_isSymbol__ = __webpack_require__(
          14
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_invariant__ = __webpack_require__(5);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_invariant___default = __webpack_require__.n(
          __WEBPACK_IMPORTED_MODULE_5_invariant__
        );

        var ACTION_TYPE_DELIMITER = '||';

        function isValidActionType(type) {
          return (
            Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isString__['a' /* default */])(type) ||
            Object(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isFunction__['a' /* default */])(type) ||
            Object(__WEBPACK_IMPORTED_MODULE_4_lodash_es_isSymbol__['a' /* default */])(type)
          );
        }

        function isValidActionTypes(types) {
          if (Object(__WEBPACK_IMPORTED_MODULE_2_lodash_es_isEmpty__['a' /* default */])(types)) {
            return false;
          }
          return types.every(isValidActionType);
        }

        function combineActions() {
          for (
            var _len = arguments.length, actionsTypes = Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            actionsTypes[_key] = arguments[_key];
          }

          __WEBPACK_IMPORTED_MODULE_5_invariant___default()(
            isValidActionTypes(actionsTypes),
            'Expected action types to be strings, symbols, or action creators'
          );
          var combinedActionType = actionsTypes
            .map(__WEBPACK_IMPORTED_MODULE_3_lodash_es_toString__['a' /* default */])
            .join(ACTION_TYPE_DELIMITER);
          return {
            toString: function toString() {
              return combinedActionType;
            },
          };
        }

        /***/
      },
      /* 35 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DataView_js__ = __webpack_require__(
          68
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Map_js__ = __webpack_require__(73);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Promise_js__ = __webpack_require__(
          74
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Set_js__ = __webpack_require__(75);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__WeakMap_js__ = __webpack_require__(
          76
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__baseGetTag_js__ = __webpack_require__(
          1
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toSource_js__ = __webpack_require__(
          36
        );

        /** `Object#toString` result references. */
        var mapTag = '[object Map]',
          objectTag = '[object Object]',
          promiseTag = '[object Promise]',
          setTag = '[object Set]',
          weakMapTag = '[object WeakMap]';

        var dataViewTag = '[object DataView]';

        /** Used to detect maps, sets, and weakmaps. */
        var dataViewCtorString = Object(
            __WEBPACK_IMPORTED_MODULE_6__toSource_js__['a' /* default */]
          )(__WEBPACK_IMPORTED_MODULE_0__DataView_js__['a' /* default */]),
          mapCtorString = Object(__WEBPACK_IMPORTED_MODULE_6__toSource_js__['a' /* default */])(
            __WEBPACK_IMPORTED_MODULE_1__Map_js__['a' /* default */]
          ),
          promiseCtorString = Object(__WEBPACK_IMPORTED_MODULE_6__toSource_js__['a' /* default */])(
            __WEBPACK_IMPORTED_MODULE_2__Promise_js__['a' /* default */]
          ),
          setCtorString = Object(__WEBPACK_IMPORTED_MODULE_6__toSource_js__['a' /* default */])(
            __WEBPACK_IMPORTED_MODULE_3__Set_js__['a' /* default */]
          ),
          weakMapCtorString = Object(__WEBPACK_IMPORTED_MODULE_6__toSource_js__['a' /* default */])(
            __WEBPACK_IMPORTED_MODULE_4__WeakMap_js__['a' /* default */]
          );

        /**
         * Gets the `toStringTag` of `value`.
         *
         * @private
         * @param {*} value The value to query.
         * @returns {string} Returns the `toStringTag`.
         */
        var getTag = __WEBPACK_IMPORTED_MODULE_5__baseGetTag_js__['a' /* default */];

        // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
        if (
          (__WEBPACK_IMPORTED_MODULE_0__DataView_js__['a' /* default */] &&
            getTag(
              new __WEBPACK_IMPORTED_MODULE_0__DataView_js__['a' /* default */](new ArrayBuffer(1))
            ) != dataViewTag) ||
          (__WEBPACK_IMPORTED_MODULE_1__Map_js__['a' /* default */] &&
            getTag(new __WEBPACK_IMPORTED_MODULE_1__Map_js__['a' /* default */]()) != mapTag) ||
          (__WEBPACK_IMPORTED_MODULE_2__Promise_js__['a' /* default */] &&
            getTag(__WEBPACK_IMPORTED_MODULE_2__Promise_js__['a' /* default */].resolve()) !=
              promiseTag) ||
          (__WEBPACK_IMPORTED_MODULE_3__Set_js__['a' /* default */] &&
            getTag(new __WEBPACK_IMPORTED_MODULE_3__Set_js__['a' /* default */]()) != setTag) ||
          (__WEBPACK_IMPORTED_MODULE_4__WeakMap_js__['a' /* default */] &&
            getTag(new __WEBPACK_IMPORTED_MODULE_4__WeakMap_js__['a' /* default */]()) !=
              weakMapTag)
        ) {
          getTag = function(value) {
            var result = Object(__WEBPACK_IMPORTED_MODULE_5__baseGetTag_js__['a' /* default */])(
                value
              ),
              Ctor = result == objectTag ? value.constructor : undefined,
              ctorString = Ctor
                ? Object(__WEBPACK_IMPORTED_MODULE_6__toSource_js__['a' /* default */])(Ctor)
                : '';

            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result;
          };
        }

        /* harmony default export */ __webpack_exports__['a'] = getTag;

        /***/
      },
      /* 36 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /** Used for built-in method references. */
        var funcProto = Function.prototype;

        /** Used to resolve the decompiled source of functions. */
        var funcToString = funcProto.toString;

        /**
         * Converts `func` to its source code.
         *
         * @private
         * @param {Function} func The function to convert.
         * @returns {string} Returns the source code.
         */
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {}
            try {
              return func + '';
            } catch (e) {}
          }
          return '';
        }

        /* harmony default export */ __webpack_exports__['a'] = toSource;

        /***/
      },
      /* 37 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'a', function() {
          return defaultNamespace;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'b', function() {
          return flattenActionMap;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'c', function() {
          return flattenReducerMap;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'd', function() {
          return unflattenActionCreators;
        });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__camelCase__ = __webpack_require__(38);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ownKeys__ = __webpack_require__(17);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hasGeneratorInterface__ = __webpack_require__(
          82
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_es_isPlainObject__ = __webpack_require__(
          4
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_es_isMap__ = __webpack_require__(
          16
        );

        var defaultNamespace = '/';

        function get(key, x) {
          return Object(__WEBPACK_IMPORTED_MODULE_4_lodash_es_isMap__['a' /* default */])(x)
            ? x.get(key)
            : x[key];
        }

        var flattenWhenNode = function flattenWhenNode(predicate) {
          return function flatten(map) {
            var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              _ref$namespace = _ref.namespace,
              namespace = _ref$namespace === undefined ? defaultNamespace : _ref$namespace,
              prefix = _ref.prefix;

            var partialFlatMap =
              arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var partialFlatActionType =
              arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

            function connectNamespace(type) {
              return partialFlatActionType ? '' + partialFlatActionType + namespace + type : type;
            }

            function connectPrefix(type) {
              if (partialFlatActionType || !prefix) {
                return type;
              }

              return '' + prefix + namespace + type;
            }

            Object(__WEBPACK_IMPORTED_MODULE_1__ownKeys__['a' /* default */])(map).forEach(function(
              type
            ) {
              var nextNamespace = connectPrefix(connectNamespace(type));
              var mapValue = get(type, map);

              if (!predicate(mapValue)) {
                partialFlatMap[nextNamespace] = mapValue;
              } else {
                flatten(
                  mapValue,
                  { namespace: namespace, prefix: prefix },
                  partialFlatMap,
                  nextNamespace
                );
              }
            });

            return partialFlatMap;
          };
        };

        var flattenActionMap = flattenWhenNode(
          __WEBPACK_IMPORTED_MODULE_3_lodash_es_isPlainObject__['a' /* default */]
        );
        var flattenReducerMap = flattenWhenNode(function(node) {
          return (
            (Object(__WEBPACK_IMPORTED_MODULE_3_lodash_es_isPlainObject__['a' /* default */])(
              node
            ) ||
              Object(__WEBPACK_IMPORTED_MODULE_4_lodash_es_isMap__['a' /* default */])(node)) &&
            !Object(__WEBPACK_IMPORTED_MODULE_2__hasGeneratorInterface__['a' /* default */])(node)
          );
        });

        function unflattenActionCreators(flatActionCreators) {
          var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref2$namespace = _ref2.namespace,
            namespace = _ref2$namespace === undefined ? defaultNamespace : _ref2$namespace,
            prefix = _ref2.prefix;

          function unflatten(flatActionType) {
            var partialNestedActionCreators =
              arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var partialFlatActionTypePath =
              arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

            var nextNamespace = Object(__WEBPACK_IMPORTED_MODULE_0__camelCase__['a' /* default */])(
              partialFlatActionTypePath.shift()
            );
            if (partialFlatActionTypePath.length) {
              if (!partialNestedActionCreators[nextNamespace]) {
                partialNestedActionCreators[nextNamespace] = {};
              }
              unflatten(
                flatActionType,
                partialNestedActionCreators[nextNamespace],
                partialFlatActionTypePath
              );
            } else {
              partialNestedActionCreators[nextNamespace] = flatActionCreators[flatActionType];
            }
          }

          var nestedActionCreators = {};
          Object.getOwnPropertyNames(flatActionCreators).forEach(function(type) {
            var unprefixedType = prefix ? type.replace('' + prefix + namespace, '') : type;
            return unflatten(type, nestedActionCreators, unprefixedType.split(namespace));
          });

          return nestedActionCreators;
        }

        /***/
      },
      /* 38 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        // based on https://github.com/lodash/lodash/blob/4.17.2/lodash.js#L14100
        // eslint-disable-next-line max-len
        var wordPattern = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:(?:1ST|2ND|3RD|(?![123])\dTH)\b)|\d*(?:(?:1st|2nd|3rd|(?![123])\dth)\b)|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;
        var namespacer = '/';

        function camelCase(string) {
          return string.match(wordPattern).reduce(function(camelCased, word, index) {
            return (
              camelCased +
              (index === 0
                ? word.toLowerCase()
                : word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
            );
          }, '');
        }

        /* harmony default export */ __webpack_exports__['a'] = function(type) {
          return type
            .split(namespacer)
            .map(camelCase)
            .join(namespacer);
        };

        /***/
      },
      /* 39 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'a', function() {
          return ActionTypes;
        });
        /* harmony export (immutable) */ __webpack_exports__['b'] = createStore;
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(
          4
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(
          87
        );

        /**
         * These are private action types reserved by Redux.
         * For any unknown actions, you must return the current state.
         * If the current state is undefined, you must return the initial state.
         * Do not reference these action types directly in your code.
         */
        var ActionTypes = {
          INIT: '@@redux/INIT',

          /**
           * Creates a Redux store that holds the state tree.
           * The only way to change the data in the store is to call `dispatch()` on it.
           *
           * There should only be a single store in your app. To specify how different
           * parts of the state tree respond to actions, you may combine several reducers
           * into a single reducer function by using `combineReducers`.
           *
           * @param {Function} reducer A function that returns the next state tree, given
           * the current state tree and the action to handle.
           *
           * @param {any} [preloadedState] The initial state. You may optionally specify it
           * to hydrate the state from the server in universal apps, or to restore a
           * previously serialized user session.
           * If you use `combineReducers` to produce the root reducer function, this must be
           * an object with the same shape as `combineReducers` keys.
           *
           * @param {Function} [enhancer] The store enhancer. You may optionally specify it
           * to enhance the store with third-party capabilities such as middleware,
           * time travel, persistence, etc. The only store enhancer that ships with Redux
           * is `applyMiddleware()`.
           *
           * @returns {Store} A Redux store that lets you read the state, dispatch actions
           * and subscribe to changes.
           */
        };
        function createStore(reducer, preloadedState, enhancer) {
          var _ref2;

          if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
            enhancer = preloadedState;
            preloadedState = undefined;
          }

          if (typeof enhancer !== 'undefined') {
            if (typeof enhancer !== 'function') {
              throw new Error('Expected the enhancer to be a function.');
            }

            return enhancer(createStore)(reducer, preloadedState);
          }

          if (typeof reducer !== 'function') {
            throw new Error('Expected the reducer to be a function.');
          }

          var currentReducer = reducer;
          var currentState = preloadedState;
          var currentListeners = [];
          var nextListeners = currentListeners;
          var isDispatching = false;

          function ensureCanMutateNextListeners() {
            if (nextListeners === currentListeners) {
              nextListeners = currentListeners.slice();
            }
          }

          /**
           * Reads the state tree managed by the store.
           *
           * @returns {any} The current state tree of your application.
           */
          function getState() {
            return currentState;
          }

          /**
           * Adds a change listener. It will be called any time an action is dispatched,
           * and some part of the state tree may potentially have changed. You may then
           * call `getState()` to read the current state tree inside the callback.
           *
           * You may call `dispatch()` from a change listener, with the following
           * caveats:
           *
           * 1. The subscriptions are snapshotted just before every `dispatch()` call.
           * If you subscribe or unsubscribe while the listeners are being invoked, this
           * will not have any effect on the `dispatch()` that is currently in progress.
           * However, the next `dispatch()` call, whether nested or not, will use a more
           * recent snapshot of the subscription list.
           *
           * 2. The listener should not expect to see all state changes, as the state
           * might have been updated multiple times during a nested `dispatch()` before
           * the listener is called. It is, however, guaranteed that all subscribers
           * registered before the `dispatch()` started will be called with the latest
           * state by the time it exits.
           *
           * @param {Function} listener A callback to be invoked on every dispatch.
           * @returns {Function} A function to remove this change listener.
           */
          function subscribe(listener) {
            if (typeof listener !== 'function') {
              throw new Error('Expected listener to be a function.');
            }

            var isSubscribed = true;

            ensureCanMutateNextListeners();
            nextListeners.push(listener);

            return function unsubscribe() {
              if (!isSubscribed) {
                return;
              }

              isSubscribed = false;

              ensureCanMutateNextListeners();
              var index = nextListeners.indexOf(listener);
              nextListeners.splice(index, 1);
            };
          }

          /**
           * Dispatches an action. It is the only way to trigger a state change.
           *
           * The `reducer` function, used to create the store, will be called with the
           * current state tree and the given `action`. Its return value will
           * be considered the **next** state of the tree, and the change listeners
           * will be notified.
           *
           * The base implementation only supports plain object actions. If you want to
           * dispatch a Promise, an Observable, a thunk, or something else, you need to
           * wrap your store creating function into the corresponding middleware. For
           * example, see the documentation for the `redux-thunk` package. Even the
           * middleware will eventually dispatch plain object actions using this method.
           *
           * @param {Object} action A plain object representing “what changed”. It is
           * a good idea to keep actions serializable so you can record and replay user
           * sessions, or use the time travelling `redux-devtools`. An action must have
           * a `type` property which may not be `undefined`. It is a good idea to use
           * string constants for action types.
           *
           * @returns {Object} For convenience, the same action object you dispatched.
           *
           * Note that, if you use a custom middleware, it may wrap `dispatch()` to
           * return something else (for example, a Promise you can await).
           */
          function dispatch(action) {
            if (
              !Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__['a' /* default */])(
                action
              )
            ) {
              throw new Error(
                'Actions must be plain objects. ' + 'Use custom middleware for async actions.'
              );
            }

            if (typeof action.type === 'undefined') {
              throw new Error(
                'Actions may not have an undefined "type" property. ' +
                  'Have you misspelled a constant?'
              );
            }

            if (isDispatching) {
              throw new Error('Reducers may not dispatch actions.');
            }

            try {
              isDispatching = true;
              currentState = currentReducer(currentState, action);
            } finally {
              isDispatching = false;
            }

            var listeners = (currentListeners = nextListeners);
            for (var i = 0; i < listeners.length; i++) {
              var listener = listeners[i];
              listener();
            }

            return action;
          }

          /**
           * Replaces the reducer currently used by the store to calculate the state.
           *
           * You might need this if your app implements code splitting and you want to
           * load some of the reducers dynamically. You might also need this if you
           * implement a hot reloading mechanism for Redux.
           *
           * @param {Function} nextReducer The reducer for the store to use instead.
           * @returns {void}
           */
          function replaceReducer(nextReducer) {
            if (typeof nextReducer !== 'function') {
              throw new Error('Expected the nextReducer to be a function.');
            }

            currentReducer = nextReducer;
            dispatch({ type: ActionTypes.INIT });
          }

          /**
           * Interoperability point for observable/reactive libraries.
           * @returns {observable} A minimal observable of state changes.
           * For more information, see the observable proposal:
           * https://github.com/tc39/proposal-observable
           */
          function observable() {
            var _ref;

            var outerSubscribe = subscribe;
            return (
              (_ref = {
                /**
                 * The minimal observable subscription method.
                 * @param {Object} observer Any object that can be used as an observer.
                 * The observer object should have a `next` method.
                 * @returns {subscription} An object with an `unsubscribe` method that can
                 * be used to unsubscribe the observable from the store, and prevent further
                 * emission of values from the observable.
                 */
                subscribe: function subscribe(observer) {
                  if (typeof observer !== 'object') {
                    throw new TypeError('Expected the observer to be an object.');
                  }

                  function observeState() {
                    if (observer.next) {
                      observer.next(getState());
                    }
                  }

                  observeState();
                  var unsubscribe = outerSubscribe(observeState);
                  return { unsubscribe: unsubscribe };
                },
              }),
              (_ref[
                __WEBPACK_IMPORTED_MODULE_1_symbol_observable__['a' /* default */]
              ] = function() {
                return this;
              }),
              _ref
            );
          }

          // When a store is created, an "INIT" action is dispatched so that every
          // reducer returns their initial state. This effectively populates
          // the initial state tree.
          dispatch({ type: ActionTypes.INIT });

          return (
            (_ref2 = {
              dispatch: dispatch,
              subscribe: subscribe,
              getState: getState,
              replaceReducer: replaceReducer,
            }),
            (_ref2[
              __WEBPACK_IMPORTED_MODULE_1_symbol_observable__['a' /* default */]
            ] = observable),
            _ref2
          );
        }

        /***/
      },
      /* 40 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony export (immutable) */ __webpack_exports__['a'] = warning;
        /**
         * Prints a warning in the console if it exists.
         *
         * @param {String} message The warning message.
         * @returns {void}
         */
        function warning(message) {
          /* eslint-disable no-console */
          if (typeof console !== 'undefined' && typeof console.error === 'function') {
            console.error(message);
          }
          /* eslint-enable no-console */
          try {
            // This error was thrown as a convenience so that if you enable
            // "break on all exceptions" in your console,
            // it would pause the execution at this line.
            throw new Error(message);
            /* eslint-disable no-empty */
          } catch (e) {}
          /* eslint-enable no-empty */
        }

        /***/
      },
      /* 41 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony export (immutable) */ __webpack_exports__['a'] = compose;
        /**
         * Composes single-argument functions from right to left. The rightmost
         * function can take multiple arguments as it provides the signature for
         * the resulting composite function.
         *
         * @param {...Function} funcs The functions to compose.
         * @returns {Function} A function obtained by composing the argument functions
         * from right to left. For example, compose(f, g, h) is identical to doing
         * (...args) => f(g(h(...args))).
         */

        function compose() {
          for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
            funcs[_key] = arguments[_key];
          }

          if (funcs.length === 0) {
            return function(arg) {
              return arg;
            };
          }

          if (funcs.length === 1) {
            return funcs[0];
          }

          return funcs.reduce(function(a, b) {
            return function() {
              return a(b.apply(undefined, arguments));
            };
          });
        }

        /***/
      },
      /* 42 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        var _typeof =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  typeof Symbol === 'function' &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              };

        var _reduxActions = __webpack_require__(43);

        var _redux = __webpack_require__(86);

        var _eventBus = __webpack_require__(18);

        var _eventBus2 = _interopRequireDefault(_eventBus);

        var _actionTake = __webpack_require__(92);

        var _actionTake2 = _interopRequireDefault(_actionTake);

        var _tunk = __webpack_require__(93);

        var _tunk2 = _interopRequireDefault(_tunk);

        var _immer = __webpack_require__(94);

        var _immer2 = _interopRequireDefault(_immer);

        var _assert = __webpack_require__(95);

        var _assert2 = _interopRequireDefault(_assert);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _toConsumableArray(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          } else {
            return Array.from(arr);
          }
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        var SEP = '/';

        var prefix = function prefix(name, propName) {
          return '' + name + SEP + propName;
        };

        /**
         * 用 immer 包装 reducer
         */
        var produceWrapp = function produceWrapp(cb) {
          return function(state, action) {
            return (0, _immer2.default)(state, function(draft) {
              return cb(draft, action.payload);
            });
          };
        };

        function create() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          var app = {
            eventBus: _eventBus2.default,
            dispatcher: {},
            model: model,
            use: use,
            models: models,
            start: start,
            _setups: {},
            _actions: {},
            _models: {},
            _reducers: {},
            _store: undefined,
            _effectsErrorDefaultHandle: function _effectsErrorDefaultHandle(error) {
              throw error;
            },
          };

          // 待注入到 thunk 的 dispatcher namespace maps
          var _composeDispatcher = {};
          // 待注入到 thunk 的 take namespace maps
          var _takes = {};
          var _extraModels = [];
          var _suffixMiddlewares = [_tunk2.default, _actionTake2.default];
          var _prefixMiddlewares = [];
          var _extraEnhancers = []; // eslint-disable-line

          use(options);

          return app;

          function use(options) {
            (0, _assert2.default)(
              (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object',
              '[app.use]: options type must be object'
            );
            var suffixMiddlewares = options.suffixMiddlewares,
              prefixMiddlewares = options.prefixMiddlewares,
              onError = options.onError,
              extraModels = options.extraModels;

            if (suffixMiddlewares) {
              (0, _assert2.default)(
                Array.isArray(suffixMiddlewares),
                '[app.use]: suffixMiddlewares type must be Array'
              );
              _suffixMiddlewares = _suffixMiddlewares.concat(suffixMiddlewares);
            }

            if (prefixMiddlewares) {
              (0, _assert2.default)(
                Array.isArray(prefixMiddlewares),
                '[app.use]: prefixMiddlewares type must be Array'
              );
              _prefixMiddlewares = _prefixMiddlewares.concat(prefixMiddlewares);
            }

            if (onError) {
              (0, _assert2.default)(
                typeof onError === 'function',
                '[app.use]: onError type must be Function'
              );
              app._effectsErrorDefaultHandle = onError;
            }

            if (extraModels) {
              (0, _assert2.default)(
                Array.isArray(extraModels),
                '[app.use]: _extraModels type must be Array'
              );
              _extraModels = _extraModels.concat(extraModels);
            }
          }

          function model(options) {
            var namespace = options.namespace,
              _options$state = options.state,
              state = _options$state === undefined ? {} : _options$state,
              _options$mutations = options.mutations,
              mutations = _options$mutations === undefined ? {} : _options$mutations,
              _options$actions = options.actions,
              actions = _options$actions === undefined ? {} : _options$actions;
            var _options$setups = options.setups,
              setups = _options$setups === undefined ? {} : _options$setups;

            (0, _assert2.default)(namespace, 'model namespace must be exsit');
            (0, _assert2.default)(
              undefined === app._models[namespace],
              'model[namespace=' + namespace + '] must be union'
            );

            app._models[namespace] = namespace;

            // init reducer
            for (var rName in mutations) {
              if (!mutations.hasOwnProperty(rName)) continue;

              // 默认的 action 会对 mutations 里面的 key 进行赋值
              !actions[rName] &&
                (actions[rName] = function(payload) {
                  return payload;
                });

              mutations[prefix(namespace, rName)] = produceWrapp(mutations[rName]);
              delete mutations[rName];
            }
            app._reducers[namespace] = (0, _reduxActions.handleActions)(mutations, state);

            // add actions meta
            for (var actionName in actions) {
              var payloadCreator = actions[actionName];
              // _composeDispatcher[namespace] 不可以在此取值，它只是容器，是动态添值的
              var metaCreator = function metaCreator() {
                return {
                  namespace: namespace,
                  app: app,
                  takes: _takes,
                  composeDispatcher: _composeDispatcher,
                };
              };
              actions[actionName] = [payloadCreator, metaCreator];
            }
            // https://redux-actions.js.org/docs/api/createAction.html#createactionsactionmap
            app._actions[namespace] = (0, _reduxActions.createActions)(
              _defineProperty({}, namespace, actions)
            )[namespace];

            if (typeof setups === 'function') {
              setups = { setup: setups };
            }
            app._setups[namespace] = setups;
          }

          function models(models) {
            models.forEach(function(model) {
              return app.model(model);
            });
          }

          function start() {
            var _this = this;

            _extraModels.forEach(function(m) {
              return model(m);
            });

            var rootReducer = (0, _redux.combineReducers)(app._reducers);

            var store = (0, _redux.createStore)(
              rootReducer,
              _redux.applyMiddleware.apply(
                undefined,
                _toConsumableArray(_prefixMiddlewares.concat(_suffixMiddlewares))
              )
            );

            // 包装 actionCreator => dispatch

            var _loop = function _loop(namespace) {
              if (!_this._actions.hasOwnProperty(namespace)) return 'continue';
              _this.dispatcher[namespace] || (_this.dispatcher[namespace] = {});

              var _loop2 = function _loop2(actionName) {
                if (!_this._actions[namespace].hasOwnProperty(actionName)) return 'continue';

                _this.dispatcher[namespace][actionName] = function() {
                  var _actions$namespace;

                  return store.dispatch(
                    (_actions$namespace = _this._actions[namespace])[actionName].apply(
                      _actions$namespace,
                      arguments
                    )
                  );
                };
              };

              for (var actionName in _this._actions[namespace]) {
                var _ret2 = _loop2(actionName);

                if (_ret2 === 'continue') continue;
              }
            };

            for (var namespace in this._actions) {
              var _ret = _loop(namespace);

              if (_ret === 'continue') continue;
            }

            // compose global & inner dispatcher
            Object.keys(this._models).forEach(function(namespace) {
              var dispatcher = _this.dispatcher;

              var innerDispatcher = dispatcher[namespace];
              var namespaces = Object.keys(dispatcher);
              var dispatchersInNamespace = Object.keys(innerDispatcher);

              var compose = namespaces.concat(dispatchersInNamespace).reduce(function(obj, key) {
                if (obj[key]) {
                  console.warn(
                    'dispatcher[action=' +
                      key +
                      '] on model[namespace=' +
                      namespace +
                      '] has conflict with global dispathcer, precedence use globals'
                  );
                  return obj;
                }
                obj[key] = dispatcher[key] || innerDispatcher[key];
                return obj;
              }, {});

              _composeDispatcher[namespace] = compose;
            });

            Object.keys(this._models).forEach(function(namespace) {
              var take = function take(type) {
                if (new RegExp(namespace + '/.*', 'ig').test(type)) {
                  console.warn(
                    'take action type:' +
                      type +
                      ", You don't have to add a prefix when you operate under the current model[namespace:" +
                      namespace +
                      '].'
                  );
                } else {
                  type = prefix(namespace, type);
                }
                return _eventBus2.default.take(type).then(function(action) {
                  return action.payload;
                });
              };
              _takes[namespace] = take;
            });

            // call setup
            for (var namespace in this._setups) {
              if (!this._setups.hasOwnProperty(namespace)) continue;
              for (var sName in this._setups[namespace]) {
                if (!this._setups[namespace].hasOwnProperty(sName)) continue;
                // @todo 注入 history
                this._setups[namespace][sName].call(this, {
                  dispatcher: _composeDispatcher[namespace],
                  take: _takes[namespace],
                  eventBus: _eventBus2.default,
                });
              }
            }

            this._store = store;
            return store;
          }
        }

        exports.default = create;
        module.exports = exports['default'];

        /***/
      },
      /* 43 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createAction__ = __webpack_require__(
          19
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__handleAction__ = __webpack_require__(
          22
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__handleActions__ = __webpack_require__(
          79
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__combineActions__ = __webpack_require__(
          34
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createActions__ = __webpack_require__(
          83
        );
        /* harmony reexport (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'createAction',
          function() {
            return __WEBPACK_IMPORTED_MODULE_0__createAction__['a'];
          }
        );
        /* harmony reexport (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'createActions',
          function() {
            return __WEBPACK_IMPORTED_MODULE_4__createActions__['a'];
          }
        );
        /* harmony reexport (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'handleAction',
          function() {
            return __WEBPACK_IMPORTED_MODULE_1__handleAction__['a'];
          }
        );
        /* harmony reexport (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'handleActions',
          function() {
            return __WEBPACK_IMPORTED_MODULE_2__handleActions__['a'];
          }
        );
        /* harmony reexport (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'combineActions',
          function() {
            return __WEBPACK_IMPORTED_MODULE_3__combineActions__['b'];
          }
        );

        /***/
      },
      /* 44 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(10);

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
         * Used to resolve the
         * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
         * of values.
         */
        var nativeObjectToString = objectProto.toString;

        /** Built-in value references. */
        var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__['a' /* default */]
          ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__['a' /* default */].toStringTag
          : undefined;

        /**
         * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
         *
         * @private
         * @param {*} value The value to query.
         * @returns {string} Returns the raw `toStringTag`.
         */
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag),
            tag = value[symToStringTag];

          try {
            value[symToStringTag] = undefined;
            var unmasked = true;
          } catch (e) {}

          var result = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result;
        }

        /* harmony default export */ __webpack_exports__['a'] = getRawTag;

        /***/
      },
      /* 45 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /**
         * Used to resolve the
         * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
         * of values.
         */
        var nativeObjectToString = objectProto.toString;

        /**
         * Converts `value` to a string using `Object.prototype.toString`.
         *
         * @private
         * @param {*} value The value to convert.
         * @returns {string} Returns the converted string.
         */
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }

        /* harmony default export */ __webpack_exports__['a'] = objectToString;

        /***/
      },
      /* 46 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /**
         * Checks if `value` is `null`.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
         * @example
         *
         * _.isNull(null);
         * // => true
         *
         * _.isNull(void 0);
         * // => false
         */
        function isNull(value) {
          return value === null;
        }

        /* harmony default export */ __webpack_exports__['a'] = isNull;

        /***/
      },
      /* 47 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(
          23
        );

        /** Built-in value references. */
        var getPrototype = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__['a' /* default */])(
          Object.getPrototypeOf,
          Object
        );

        /* harmony default export */ __webpack_exports__['a'] = getPrototype;

        /***/
      },
      /* 48 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /**
         * Checks if `value` is `undefined`.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
         * @example
         *
         * _.isUndefined(void 0);
         * // => true
         *
         * _.isUndefined(null);
         * // => false
         */
        function isUndefined(value) {
          return value === undefined;
        }

        /* harmony default export */ __webpack_exports__['a'] = isUndefined;

        /***/
      },
      /* 49 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseIndexOf_js__ = __webpack_require__(
          50
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__ = __webpack_require__(
          12
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isString_js__ = __webpack_require__(
          13
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toInteger_js__ = __webpack_require__(
          54
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values_js__ = __webpack_require__(57);

        /* Built-in method references for those with the same name as other `lodash` methods. */
        var nativeMax = Math.max;

        /**
         * Checks if `value` is in `collection`. If `collection` is a string, it's
         * checked for a substring of `value`, otherwise
         * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
         * is used for equality comparisons. If `fromIndex` is negative, it's used as
         * the offset from the end of `collection`.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Collection
         * @param {Array|Object|string} collection The collection to inspect.
         * @param {*} value The value to search for.
         * @param {number} [fromIndex=0] The index to search from.
         * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
         * @returns {boolean} Returns `true` if `value` is found, else `false`.
         * @example
         *
         * _.includes([1, 2, 3], 1);
         * // => true
         *
         * _.includes([1, 2, 3], 1, 2);
         * // => false
         *
         * _.includes({ 'a': 1, 'b': 2 }, 1);
         * // => true
         *
         * _.includes('abcd', 'bc');
         * // => true
         */
        function includes(collection, value, fromIndex, guard) {
          collection = Object(__WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__['a' /* default */])(
            collection
          )
            ? collection
            : Object(__WEBPACK_IMPORTED_MODULE_4__values_js__['a' /* default */])(collection);
          fromIndex =
            fromIndex && !guard
              ? Object(__WEBPACK_IMPORTED_MODULE_3__toInteger_js__['a' /* default */])(fromIndex)
              : 0;

          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return Object(__WEBPACK_IMPORTED_MODULE_2__isString_js__['a' /* default */])(collection)
            ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1
            : !!length &&
                Object(__WEBPACK_IMPORTED_MODULE_0__baseIndexOf_js__['a' /* default */])(
                  collection,
                  value,
                  fromIndex
                ) > -1;
        }

        /* harmony default export */ __webpack_exports__['a'] = includes;

        /***/
      },
      /* 50 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseFindIndex_js__ = __webpack_require__(
          51
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseIsNaN_js__ = __webpack_require__(
          52
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__strictIndexOf_js__ = __webpack_require__(
          53
        );

        /**
         * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
         *
         * @private
         * @param {Array} array The array to inspect.
         * @param {*} value The value to search for.
         * @param {number} fromIndex The index to search from.
         * @returns {number} Returns the index of the matched value, else `-1`.
         */
        function baseIndexOf(array, value, fromIndex) {
          return value === value
            ? Object(__WEBPACK_IMPORTED_MODULE_2__strictIndexOf_js__['a' /* default */])(
                array,
                value,
                fromIndex
              )
            : Object(__WEBPACK_IMPORTED_MODULE_0__baseFindIndex_js__['a' /* default */])(
                array,
                __WEBPACK_IMPORTED_MODULE_1__baseIsNaN_js__['a' /* default */],
                fromIndex
              );
        }

        /* harmony default export */ __webpack_exports__['a'] = baseIndexOf;

        /***/
      },
      /* 51 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /**
         * The base implementation of `_.findIndex` and `_.findLastIndex` without
         * support for iteratee shorthands.
         *
         * @private
         * @param {Array} array The array to inspect.
         * @param {Function} predicate The function invoked per iteration.
         * @param {number} fromIndex The index to search from.
         * @param {boolean} [fromRight] Specify iterating from right to left.
         * @returns {number} Returns the index of the matched value, else `-1`.
         */
        function baseFindIndex(array, predicate, fromIndex, fromRight) {
          var length = array.length,
            index = fromIndex + (fromRight ? 1 : -1);

          while (fromRight ? index-- : ++index < length) {
            if (predicate(array[index], index, array)) {
              return index;
            }
          }
          return -1;
        }

        /* harmony default export */ __webpack_exports__['a'] = baseFindIndex;

        /***/
      },
      /* 52 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /**
         * The base implementation of `_.isNaN` without support for number objects.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
         */
        function baseIsNaN(value) {
          return value !== value;
        }

        /* harmony default export */ __webpack_exports__['a'] = baseIsNaN;

        /***/
      },
      /* 53 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /**
         * A specialized version of `_.indexOf` which performs strict equality
         * comparisons of values, i.e. `===`.
         *
         * @private
         * @param {Array} array The array to inspect.
         * @param {*} value The value to search for.
         * @param {number} fromIndex The index to search from.
         * @returns {number} Returns the index of the matched value, else `-1`.
         */
        function strictIndexOf(array, value, fromIndex) {
          var index = fromIndex - 1,
            length = array.length;

          while (++index < length) {
            if (array[index] === value) {
              return index;
            }
          }
          return -1;
        }

        /* harmony default export */ __webpack_exports__['a'] = strictIndexOf;

        /***/
      },
      /* 54 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toFinite_js__ = __webpack_require__(
          55
        );

        /**
         * Converts `value` to an integer.
         *
         * **Note:** This method is loosely based on
         * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to convert.
         * @returns {number} Returns the converted integer.
         * @example
         *
         * _.toInteger(3.2);
         * // => 3
         *
         * _.toInteger(Number.MIN_VALUE);
         * // => 0
         *
         * _.toInteger(Infinity);
         * // => 1.7976931348623157e+308
         *
         * _.toInteger('3.2');
         * // => 3
         */
        function toInteger(value) {
          var result = Object(__WEBPACK_IMPORTED_MODULE_0__toFinite_js__['a' /* default */])(value),
            remainder = result % 1;

          return result === result ? (remainder ? result - remainder : result) : 0;
        }

        /* harmony default export */ __webpack_exports__['a'] = toInteger;

        /***/
      },
      /* 55 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toNumber_js__ = __webpack_require__(
          56
        );

        /** Used as references for various `Number` constants. */
        var INFINITY = 1 / 0,
          MAX_INTEGER = 1.7976931348623157e308;

        /**
         * Converts `value` to a finite number.
         *
         * @static
         * @memberOf _
         * @since 4.12.0
         * @category Lang
         * @param {*} value The value to convert.
         * @returns {number} Returns the converted number.
         * @example
         *
         * _.toFinite(3.2);
         * // => 3.2
         *
         * _.toFinite(Number.MIN_VALUE);
         * // => 5e-324
         *
         * _.toFinite(Infinity);
         * // => 1.7976931348623157e+308
         *
         * _.toFinite('3.2');
         * // => 3.2
         */
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = Object(__WEBPACK_IMPORTED_MODULE_0__toNumber_js__['a' /* default */])(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }

        /* harmony default export */ __webpack_exports__['a'] = toFinite;

        /***/
      },
      /* 56 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isObject_js__ = __webpack_require__(
          11
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isSymbol_js__ = __webpack_require__(
          14
        );

        /** Used as references for various `Number` constants. */
        var NAN = 0 / 0;

        /** Used to match leading and trailing whitespace. */
        var reTrim = /^\s+|\s+$/g;

        /** Used to detect bad signed hexadecimal string values. */
        var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

        /** Used to detect binary string values. */
        var reIsBinary = /^0b[01]+$/i;

        /** Used to detect octal string values. */
        var reIsOctal = /^0o[0-7]+$/i;

        /** Built-in method references without a dependency on `root`. */
        var freeParseInt = parseInt;

        /**
         * Converts `value` to a number.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to process.
         * @returns {number} Returns the number.
         * @example
         *
         * _.toNumber(3.2);
         * // => 3.2
         *
         * _.toNumber(Number.MIN_VALUE);
         * // => 5e-324
         *
         * _.toNumber(Infinity);
         * // => Infinity
         *
         * _.toNumber('3.2');
         * // => 3.2
         */
        function toNumber(value) {
          if (typeof value == 'number') {
            return value;
          }
          if (Object(__WEBPACK_IMPORTED_MODULE_1__isSymbol_js__['a' /* default */])(value)) {
            return NAN;
          }
          if (Object(__WEBPACK_IMPORTED_MODULE_0__isObject_js__['a' /* default */])(value)) {
            var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
            value = Object(__WEBPACK_IMPORTED_MODULE_0__isObject_js__['a' /* default */])(other)
              ? other + ''
              : other;
          }
          if (typeof value != 'string') {
            return value === 0 ? value : +value;
          }
          value = value.replace(reTrim, '');
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value)
            ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
            : reIsBadHex.test(value)
              ? NAN
              : +value;
        }

        /* harmony default export */ __webpack_exports__['a'] = toNumber;

        /***/
      },
      /* 57 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseValues_js__ = __webpack_require__(
          58
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys_js__ = __webpack_require__(59);

        /**
         * Creates an array of the own enumerable string keyed property values of `object`.
         *
         * **Note:** Non-object values are coerced to objects.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Object
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property values.
         * @example
         *
         * function Foo() {
         *   this.a = 1;
         *   this.b = 2;
         * }
         *
         * Foo.prototype.c = 3;
         *
         * _.values(new Foo);
         * // => [1, 2] (iteration order is not guaranteed)
         *
         * _.values('hi');
         * // => ['h', 'i']
         */
        function values(object) {
          return object == null
            ? []
            : Object(__WEBPACK_IMPORTED_MODULE_0__baseValues_js__['a' /* default */])(
                object,
                Object(__WEBPACK_IMPORTED_MODULE_1__keys_js__['a' /* default */])(object)
              );
        }

        /* harmony default export */ __webpack_exports__['a'] = values;

        /***/
      },
      /* 58 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrayMap_js__ = __webpack_require__(
          26
        );

        /**
         * The base implementation of `_.values` and `_.valuesIn` which creates an
         * array of `object` property values corresponding to the property names
         * of `props`.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {Array} props The property names to get values for.
         * @returns {Object} Returns the array of property values.
         */
        function baseValues(object, props) {
          return Object(__WEBPACK_IMPORTED_MODULE_0__arrayMap_js__['a' /* default */])(
            props,
            function(key) {
              return object[key];
            }
          );
        }

        /* harmony default export */ __webpack_exports__['a'] = baseValues;

        /***/
      },
      /* 59 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrayLikeKeys_js__ = __webpack_require__(
          60
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseKeys_js__ = __webpack_require__(
          32
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isArrayLike_js__ = __webpack_require__(
          12
        );

        /**
         * Creates an array of the own enumerable property names of `object`.
         *
         * **Note:** Non-object values are coerced to objects. See the
         * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
         * for more details.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Object
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names.
         * @example
         *
         * function Foo() {
         *   this.a = 1;
         *   this.b = 2;
         * }
         *
         * Foo.prototype.c = 3;
         *
         * _.keys(new Foo);
         * // => ['a', 'b'] (iteration order is not guaranteed)
         *
         * _.keys('hi');
         * // => ['0', '1']
         */
        function keys(object) {
          return Object(__WEBPACK_IMPORTED_MODULE_2__isArrayLike_js__['a' /* default */])(object)
            ? Object(__WEBPACK_IMPORTED_MODULE_0__arrayLikeKeys_js__['a' /* default */])(object)
            : Object(__WEBPACK_IMPORTED_MODULE_1__baseKeys_js__['a' /* default */])(object);
        }

        /* harmony default export */ __webpack_exports__['a'] = keys;

        /***/
      },
      /* 60 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseTimes_js__ = __webpack_require__(
          61
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArguments_js__ = __webpack_require__(
          27
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isArray_js__ = __webpack_require__(6);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isBuffer_js__ = __webpack_require__(
          28
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isIndex_js__ = __webpack_require__(
          64
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__isTypedArray_js__ = __webpack_require__(
          29
        );

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
         * Creates an array of the enumerable property names of the array-like `value`.
         *
         * @private
         * @param {*} value The value to query.
         * @param {boolean} inherited Specify returning inherited property names.
         * @returns {Array} Returns the array of property names.
         */
        function arrayLikeKeys(value, inherited) {
          var isArr = Object(__WEBPACK_IMPORTED_MODULE_2__isArray_js__['a' /* default */])(value),
            isArg =
              !isArr &&
              Object(__WEBPACK_IMPORTED_MODULE_1__isArguments_js__['a' /* default */])(value),
            isBuff =
              !isArr &&
              !isArg &&
              Object(__WEBPACK_IMPORTED_MODULE_3__isBuffer_js__['a' /* default */])(value),
            isType =
              !isArr &&
              !isArg &&
              !isBuff &&
              Object(__WEBPACK_IMPORTED_MODULE_5__isTypedArray_js__['a' /* default */])(value),
            skipIndexes = isArr || isArg || isBuff || isType,
            result = skipIndexes
              ? Object(__WEBPACK_IMPORTED_MODULE_0__baseTimes_js__['a' /* default */])(
                  value.length,
                  String
                )
              : [],
            length = result.length;

          for (var key in value) {
            if (
              (inherited || hasOwnProperty.call(value, key)) &&
              !(
                skipIndexes &&
                // Safari 9 has enumerable `arguments.length` in strict mode.
                (key == 'length' ||
                  // Node.js 0.10 has enumerable non-index properties on buffers.
                  (isBuff && (key == 'offset' || key == 'parent')) ||
                  // PhantomJS 2 has enumerable non-index properties on typed arrays.
                  (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
                  // Skip index properties.
                  Object(__WEBPACK_IMPORTED_MODULE_4__isIndex_js__['a' /* default */])(key, length))
              )
            ) {
              result.push(key);
            }
          }
          return result;
        }

        /* harmony default export */ __webpack_exports__['a'] = arrayLikeKeys;

        /***/
      },
      /* 61 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /**
         * The base implementation of `_.times` without support for iteratee shorthands
         * or max array length checks.
         *
         * @private
         * @param {number} n The number of times to invoke `iteratee`.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array} Returns the array of results.
         */
        function baseTimes(n, iteratee) {
          var index = -1,
            result = Array(n);

          while (++index < n) {
            result[index] = iteratee(index);
          }
          return result;
        }

        /* harmony default export */ __webpack_exports__['a'] = baseTimes;

        /***/
      },
      /* 62 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(
          1
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__ = __webpack_require__(
          2
        );

        /** `Object#toString` result references. */
        var argsTag = '[object Arguments]';

        /**
         * The base implementation of `_.isArguments`.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an `arguments` object,
         */
        function baseIsArguments(value) {
          return (
            Object(__WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__['a' /* default */])(value) &&
            Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__['a' /* default */])(value) ==
              argsTag
          );
        }

        /* harmony default export */ __webpack_exports__['a'] = baseIsArguments;

        /***/
      },
      /* 63 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /**
         * This method returns `false`.
         *
         * @static
         * @memberOf _
         * @since 4.13.0
         * @category Util
         * @returns {boolean} Returns `false`.
         * @example
         *
         * _.times(2, _.stubFalse);
         * // => [false, false]
         */
        function stubFalse() {
          return false;
        }

        /* harmony default export */ __webpack_exports__['a'] = stubFalse;

        /***/
      },
      /* 64 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /** Used as references for various `Number` constants. */
        var MAX_SAFE_INTEGER = 9007199254740991;

        /** Used to detect unsigned integer values. */
        var reIsUint = /^(?:0|[1-9]\d*)$/;

        /**
         * Checks if `value` is a valid array-like index.
         *
         * @private
         * @param {*} value The value to check.
         * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
         * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
         */
        function isIndex(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;

          return (
            !!length &&
            (type == 'number' || (type != 'symbol' && reIsUint.test(value))) &&
            (value > -1 && value % 1 == 0 && value < length)
          );
        }

        /* harmony default export */ __webpack_exports__['a'] = isIndex;

        /***/
      },
      /* 65 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(
          1
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isLength_js__ = __webpack_require__(
          25
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(
          2
        );

        /** `Object#toString` result references. */
        var argsTag = '[object Arguments]',
          arrayTag = '[object Array]',
          boolTag = '[object Boolean]',
          dateTag = '[object Date]',
          errorTag = '[object Error]',
          funcTag = '[object Function]',
          mapTag = '[object Map]',
          numberTag = '[object Number]',
          objectTag = '[object Object]',
          regexpTag = '[object RegExp]',
          setTag = '[object Set]',
          stringTag = '[object String]',
          weakMapTag = '[object WeakMap]';

        var arrayBufferTag = '[object ArrayBuffer]',
          dataViewTag = '[object DataView]',
          float32Tag = '[object Float32Array]',
          float64Tag = '[object Float64Array]',
          int8Tag = '[object Int8Array]',
          int16Tag = '[object Int16Array]',
          int32Tag = '[object Int32Array]',
          uint8Tag = '[object Uint8Array]',
          uint8ClampedTag = '[object Uint8ClampedArray]',
          uint16Tag = '[object Uint16Array]',
          uint32Tag = '[object Uint32Array]';

        /** Used to identify `toStringTag` values of typed arrays. */
        var typedArrayTags = {};
        typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[
          int8Tag
        ] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[
          uint8Tag
        ] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[
          uint32Tag
        ] = true;
        typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[
          arrayBufferTag
        ] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[
          dateTag
        ] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[
          mapTag
        ] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[
          regexpTag
        ] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

        /**
         * The base implementation of `_.isTypedArray` without Node.js optimizations.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
         */
        function baseIsTypedArray(value) {
          return (
            Object(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__['a' /* default */])(value) &&
            Object(__WEBPACK_IMPORTED_MODULE_1__isLength_js__['a' /* default */])(value.length) &&
            !!typedArrayTags[
              Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__['a' /* default */])(value)
            ]
          );
        }

        /* harmony default export */ __webpack_exports__['a'] = baseIsTypedArray;

        /***/
      },
      /* 66 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(
          23
        );

        /* Built-in method references for those with the same name as other `lodash` methods. */
        var nativeKeys = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__['a' /* default */])(
          Object.keys,
          Object
        );

        /* harmony default export */ __webpack_exports__['a'] = nativeKeys;

        /***/
      },
      /* 67 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseKeys_js__ = __webpack_require__(
          32
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getTag_js__ = __webpack_require__(35);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isArguments_js__ = __webpack_require__(
          27
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isArray_js__ = __webpack_require__(6);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isArrayLike_js__ = __webpack_require__(
          12
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__isBuffer_js__ = __webpack_require__(
          28
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__isPrototype_js__ = __webpack_require__(
          33
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__isTypedArray_js__ = __webpack_require__(
          29
        );

        /** `Object#toString` result references. */
        var mapTag = '[object Map]',
          setTag = '[object Set]';

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
         * Checks if `value` is an empty object, collection, map, or set.
         *
         * Objects are considered empty if they have no own enumerable string keyed
         * properties.
         *
         * Array-like values such as `arguments` objects, arrays, buffers, strings, or
         * jQuery-like collections are considered empty if they have a `length` of `0`.
         * Similarly, maps and sets are considered empty if they have a `size` of `0`.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is empty, else `false`.
         * @example
         *
         * _.isEmpty(null);
         * // => true
         *
         * _.isEmpty(true);
         * // => true
         *
         * _.isEmpty(1);
         * // => true
         *
         * _.isEmpty([1, 2, 3]);
         * // => false
         *
         * _.isEmpty({ 'a': 1 });
         * // => false
         */
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (
            Object(__WEBPACK_IMPORTED_MODULE_4__isArrayLike_js__['a' /* default */])(value) &&
            (Object(__WEBPACK_IMPORTED_MODULE_3__isArray_js__['a' /* default */])(value) ||
              typeof value == 'string' ||
              typeof value.splice == 'function' ||
              Object(__WEBPACK_IMPORTED_MODULE_5__isBuffer_js__['a' /* default */])(value) ||
              Object(__WEBPACK_IMPORTED_MODULE_7__isTypedArray_js__['a' /* default */])(value) ||
              Object(__WEBPACK_IMPORTED_MODULE_2__isArguments_js__['a' /* default */])(value))
          ) {
            return !value.length;
          }
          var tag = Object(__WEBPACK_IMPORTED_MODULE_1__getTag_js__['a' /* default */])(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (Object(__WEBPACK_IMPORTED_MODULE_6__isPrototype_js__['a' /* default */])(value)) {
            return !Object(__WEBPACK_IMPORTED_MODULE_0__baseKeys_js__['a' /* default */])(value)
              .length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }

        /* harmony default export */ __webpack_exports__['a'] = isEmpty;

        /***/
      },
      /* 68 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getNative_js__ = __webpack_require__(
          7
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__root_js__ = __webpack_require__(0);

        /* Built-in method references that are verified to be native. */
        var DataView = Object(__WEBPACK_IMPORTED_MODULE_0__getNative_js__['a' /* default */])(
          __WEBPACK_IMPORTED_MODULE_1__root_js__['a' /* default */],
          'DataView'
        );

        /* harmony default export */ __webpack_exports__['a'] = DataView;

        /***/
      },
      /* 69 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isFunction_js__ = __webpack_require__(
          3
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isMasked_js__ = __webpack_require__(
          70
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObject_js__ = __webpack_require__(
          11
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toSource_js__ = __webpack_require__(
          36
        );

        /**
         * Used to match `RegExp`
         * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
         */
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

        /** Used to detect host constructors (Safari). */
        var reIsHostCtor = /^\[object .+?Constructor\]$/;

        /** Used for built-in method references. */
        var funcProto = Function.prototype,
          objectProto = Object.prototype;

        /** Used to resolve the decompiled source of functions. */
        var funcToString = funcProto.toString;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /** Used to detect if a method is native. */
        var reIsNative = RegExp(
          '^' +
            funcToString
              .call(hasOwnProperty)
              .replace(reRegExpChar, '\\$&')
              .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$'
        );

        /**
         * The base implementation of `_.isNative` without bad shim checks.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a native function,
         *  else `false`.
         */
        function baseIsNative(value) {
          if (
            !Object(__WEBPACK_IMPORTED_MODULE_2__isObject_js__['a' /* default */])(value) ||
            Object(__WEBPACK_IMPORTED_MODULE_1__isMasked_js__['a' /* default */])(value)
          ) {
            return false;
          }
          var pattern = Object(__WEBPACK_IMPORTED_MODULE_0__isFunction_js__['a' /* default */])(
            value
          )
            ? reIsNative
            : reIsHostCtor;
          return pattern.test(
            Object(__WEBPACK_IMPORTED_MODULE_3__toSource_js__['a' /* default */])(value)
          );
        }

        /* harmony default export */ __webpack_exports__['a'] = baseIsNative;

        /***/
      },
      /* 70 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__coreJsData_js__ = __webpack_require__(
          71
        );

        /** Used to detect methods masquerading as native. */
        var maskSrcKey = (function() {
          var uid = /[^.]+$/.exec(
            (__WEBPACK_IMPORTED_MODULE_0__coreJsData_js__['a' /* default */] &&
              __WEBPACK_IMPORTED_MODULE_0__coreJsData_js__['a' /* default */].keys &&
              __WEBPACK_IMPORTED_MODULE_0__coreJsData_js__['a' /* default */].keys.IE_PROTO) ||
              ''
          );
          return uid ? 'Symbol(src)_1.' + uid : '';
        })();

        /**
         * Checks if `func` has its source masked.
         *
         * @private
         * @param {Function} func The function to check.
         * @returns {boolean} Returns `true` if `func` is masked, else `false`.
         */
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }

        /* harmony default export */ __webpack_exports__['a'] = isMasked;

        /***/
      },
      /* 71 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(0);

        /** Used to detect overreaching core-js shims. */
        var coreJsData =
          __WEBPACK_IMPORTED_MODULE_0__root_js__['a' /* default */]['__core-js_shared__'];

        /* harmony default export */ __webpack_exports__['a'] = coreJsData;

        /***/
      },
      /* 72 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /**
         * Gets the value at `key` of `object`.
         *
         * @private
         * @param {Object} [object] The object to query.
         * @param {string} key The key of the property to get.
         * @returns {*} Returns the property value.
         */
        function getValue(object, key) {
          return object == null ? undefined : object[key];
        }

        /* harmony default export */ __webpack_exports__['a'] = getValue;

        /***/
      },
      /* 73 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getNative_js__ = __webpack_require__(
          7
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__root_js__ = __webpack_require__(0);

        /* Built-in method references that are verified to be native. */
        var Map = Object(__WEBPACK_IMPORTED_MODULE_0__getNative_js__['a' /* default */])(
          __WEBPACK_IMPORTED_MODULE_1__root_js__['a' /* default */],
          'Map'
        );

        /* harmony default export */ __webpack_exports__['a'] = Map;

        /***/
      },
      /* 74 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getNative_js__ = __webpack_require__(
          7
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__root_js__ = __webpack_require__(0);

        /* Built-in method references that are verified to be native. */
        var Promise = Object(__WEBPACK_IMPORTED_MODULE_0__getNative_js__['a' /* default */])(
          __WEBPACK_IMPORTED_MODULE_1__root_js__['a' /* default */],
          'Promise'
        );

        /* harmony default export */ __webpack_exports__['a'] = Promise;

        /***/
      },
      /* 75 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getNative_js__ = __webpack_require__(
          7
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__root_js__ = __webpack_require__(0);

        /* Built-in method references that are verified to be native. */
        var Set = Object(__WEBPACK_IMPORTED_MODULE_0__getNative_js__['a' /* default */])(
          __WEBPACK_IMPORTED_MODULE_1__root_js__['a' /* default */],
          'Set'
        );

        /* harmony default export */ __webpack_exports__['a'] = Set;

        /***/
      },
      /* 76 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getNative_js__ = __webpack_require__(
          7
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__root_js__ = __webpack_require__(0);

        /* Built-in method references that are verified to be native. */
        var WeakMap = Object(__WEBPACK_IMPORTED_MODULE_0__getNative_js__['a' /* default */])(
          __WEBPACK_IMPORTED_MODULE_1__root_js__['a' /* default */],
          'WeakMap'
        );

        /* harmony default export */ __webpack_exports__['a'] = WeakMap;

        /***/
      },
      /* 77 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseToString_js__ = __webpack_require__(
          78
        );

        /**
         * Converts `value` to a string. An empty string is returned for `null`
         * and `undefined` values. The sign of `-0` is preserved.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to convert.
         * @returns {string} Returns the converted string.
         * @example
         *
         * _.toString(null);
         * // => ''
         *
         * _.toString(-0);
         * // => '-0'
         *
         * _.toString([1, 2, 3]);
         * // => '1,2,3'
         */
        function toString(value) {
          return value == null
            ? ''
            : Object(__WEBPACK_IMPORTED_MODULE_0__baseToString_js__['a' /* default */])(value);
        }

        /* harmony default export */ __webpack_exports__['a'] = toString;

        /***/
      },
      /* 78 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(10);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__arrayMap_js__ = __webpack_require__(
          26
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isArray_js__ = __webpack_require__(6);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isSymbol_js__ = __webpack_require__(
          14
        );

        /** Used as references for various `Number` constants. */
        var INFINITY = 1 / 0;

        /** Used to convert symbols to primitives and strings. */
        var symbolProto = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__['a' /* default */]
            ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__['a' /* default */].prototype
            : undefined,
          symbolToString = symbolProto ? symbolProto.toString : undefined;

        /**
         * The base implementation of `_.toString` which doesn't convert nullish
         * values to empty strings.
         *
         * @private
         * @param {*} value The value to process.
         * @returns {string} Returns the string.
         */
        function baseToString(value) {
          // Exit early for strings to avoid a performance hit in some environments.
          if (typeof value == 'string') {
            return value;
          }
          if (Object(__WEBPACK_IMPORTED_MODULE_2__isArray_js__['a' /* default */])(value)) {
            // Recursively convert values (susceptible to call stack limits).
            return (
              Object(__WEBPACK_IMPORTED_MODULE_1__arrayMap_js__['a' /* default */])(
                value,
                baseToString
              ) + ''
            );
          }
          if (Object(__WEBPACK_IMPORTED_MODULE_3__isSymbol_js__['a' /* default */])(value)) {
            return symbolToString ? symbolToString.call(value) : '';
          }
          var result = value + '';
          return result == '0' && 1 / value == -INFINITY ? '-0' : result;
        }

        /* harmony default export */ __webpack_exports__['a'] = baseToString;

        /***/
      },
      /* 79 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony export (immutable) */ __webpack_exports__['a'] = handleActions;
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(
          4
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isMap__ = __webpack_require__(
          16
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reduce_reducers__ = __webpack_require__(
          81
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reduce_reducers___default = __webpack_require__.n(
          __WEBPACK_IMPORTED_MODULE_2_reduce_reducers__
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant__ = __webpack_require__(5);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant___default = __webpack_require__.n(
          __WEBPACK_IMPORTED_MODULE_3_invariant__
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__handleAction__ = __webpack_require__(
          22
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ownKeys__ = __webpack_require__(17);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__flattenUtils__ = __webpack_require__(
          37
        );
        function _toConsumableArray(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          } else {
            return Array.from(arr);
          }
        }

        function get(key, x) {
          return Object(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isMap__['a' /* default */])(x)
            ? x.get(key)
            : x[key];
        }

        function handleActions(handlers, defaultState) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          __WEBPACK_IMPORTED_MODULE_3_invariant___default()(
            Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__['a' /* default */])(
              handlers
            ) || Object(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isMap__['a' /* default */])(handlers),
            'Expected handlers to be a plain object.'
          );
          var flattenedReducerMap = Object(
            __WEBPACK_IMPORTED_MODULE_6__flattenUtils__['c' /* flattenReducerMap */]
          )(handlers, options);
          var reducers = Object(__WEBPACK_IMPORTED_MODULE_5__ownKeys__['a' /* default */])(
            flattenedReducerMap
          ).map(function(type) {
            return Object(
              __WEBPACK_IMPORTED_MODULE_4__handleAction__['a' /* default */]
            )(type, get(type, flattenedReducerMap), defaultState);
          });
          var reducer = __WEBPACK_IMPORTED_MODULE_2_reduce_reducers___default.a.apply(
            undefined,
            _toConsumableArray(reducers)
          );
          return function() {
            var state =
              arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
            var action = arguments[1];
            return reducer(state, action);
          };
        }

        /***/
      },
      /* 80 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getTag_js__ = __webpack_require__(35);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__ = __webpack_require__(
          2
        );

        /** `Object#toString` result references. */
        var mapTag = '[object Map]';

        /**
         * The base implementation of `_.isMap` without Node.js optimizations.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a map, else `false`.
         */
        function baseIsMap(value) {
          return (
            Object(__WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__['a' /* default */])(value) &&
            Object(__WEBPACK_IMPORTED_MODULE_0__getTag_js__['a' /* default */])(value) == mapTag
          );
        }

        /* harmony default export */ __webpack_exports__['a'] = baseIsMap;

        /***/
      },
      /* 81 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        exports.default = function() {
          for (var _len = arguments.length, reducers = Array(_len), _key = 0; _key < _len; _key++) {
            reducers[_key] = arguments[_key];
          }

          return function(previous, current) {
            return reducers.reduce(function(p, r) {
              return r(p, current);
            }, previous);
          };
        };

        module.exports = exports['default'];

        /***/
      },
      /* 82 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony export (immutable) */ __webpack_exports__['a'] = hasGeneratorInterface;
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ownKeys__ = __webpack_require__(17);

        function hasGeneratorInterface(handler) {
          var keys = Object(__WEBPACK_IMPORTED_MODULE_0__ownKeys__['a' /* default */])(handler);
          var hasOnlyInterfaceNames = keys.every(function(ownKey) {
            return ownKey === 'next' || ownKey === 'throw';
          });
          return keys.length && keys.length <= 2 && hasOnlyInterfaceNames;
        }

        /***/
      },
      /* 83 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony export (immutable) */ __webpack_exports__['a'] = createActions;
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__camelCase__ = __webpack_require__(38);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_identity__ = __webpack_require__(
          9
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_es_isPlainObject__ = __webpack_require__(
          4
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_es_isArray__ = __webpack_require__(
          6
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_es_last__ = __webpack_require__(
          84
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_es_isString__ = __webpack_require__(
          13
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_es_isFunction__ = __webpack_require__(
          3
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_es_isNil__ = __webpack_require__(
          24
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__createAction__ = __webpack_require__(
          19
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_invariant__ = __webpack_require__(5);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_invariant___default = __webpack_require__.n(
          __WEBPACK_IMPORTED_MODULE_9_invariant__
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__arrayToObject__ = __webpack_require__(
          85
        );
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__flattenUtils__ = __webpack_require__(
          37
        );
        var _slicedToArray = (function() {
          function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;
            try {
              for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i['return']) _i['return']();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          }
          return function(arr, i) {
            if (Array.isArray(arr)) {
              return arr;
            } else if (Symbol.iterator in Object(arr)) {
              return sliceIterator(arr, i);
            } else {
              throw new TypeError('Invalid attempt to destructure non-iterable instance');
            }
          };
        })();

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        function _toConsumableArray(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          } else {
            return Array.from(arr);
          }
        }

        function createActions(actionMap) {
          for (
            var _len = arguments.length, identityActions = Array(_len > 1 ? _len - 1 : 0), _key = 1;
            _key < _len;
            _key++
          ) {
            identityActions[_key - 1] = arguments[_key];
          }

          var options = Object(
            __WEBPACK_IMPORTED_MODULE_2_lodash_es_isPlainObject__['a' /* default */]
          )(
            Object(__WEBPACK_IMPORTED_MODULE_4_lodash_es_last__['a' /* default */])(identityActions)
          )
            ? identityActions.pop()
            : {};
          __WEBPACK_IMPORTED_MODULE_9_invariant___default()(
            identityActions.every(
              __WEBPACK_IMPORTED_MODULE_5_lodash_es_isString__['a' /* default */]
            ) &&
              (Object(__WEBPACK_IMPORTED_MODULE_5_lodash_es_isString__['a' /* default */])(
                actionMap
              ) ||
                Object(__WEBPACK_IMPORTED_MODULE_2_lodash_es_isPlainObject__['a' /* default */])(
                  actionMap
                )),
            'Expected optional object followed by string action types'
          );
          if (
            Object(__WEBPACK_IMPORTED_MODULE_5_lodash_es_isString__['a' /* default */])(actionMap)
          ) {
            return actionCreatorsFromIdentityActions([actionMap].concat(identityActions), options);
          }
          return _extends(
            {},
            actionCreatorsFromActionMap(actionMap, options),
            actionCreatorsFromIdentityActions(identityActions, options)
          );
        }

        function actionCreatorsFromActionMap(actionMap, options) {
          var flatActionMap = Object(
            __WEBPACK_IMPORTED_MODULE_11__flattenUtils__['b' /* flattenActionMap */]
          )(actionMap, options);
          var flatActionCreators = actionMapToActionCreators(flatActionMap);
          return Object(
            __WEBPACK_IMPORTED_MODULE_11__flattenUtils__['d' /* unflattenActionCreators */]
          )(flatActionCreators, options);
        }

        function actionMapToActionCreators(actionMap) {
          var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            prefix = _ref.prefix,
            _ref$namespace = _ref.namespace,
            namespace =
              _ref$namespace === undefined
                ? __WEBPACK_IMPORTED_MODULE_11__flattenUtils__['a' /* defaultNamespace */]
                : _ref$namespace;

          function isValidActionMapValue(actionMapValue) {
            if (
              Object(__WEBPACK_IMPORTED_MODULE_6_lodash_es_isFunction__['a' /* default */])(
                actionMapValue
              ) ||
              Object(__WEBPACK_IMPORTED_MODULE_7_lodash_es_isNil__['a' /* default */])(
                actionMapValue
              )
            ) {
              return true;
            } else if (
              Object(__WEBPACK_IMPORTED_MODULE_3_lodash_es_isArray__['a' /* default */])(
                actionMapValue
              )
            ) {
              var _actionMapValue = _slicedToArray(actionMapValue, 2),
                _actionMapValue$ = _actionMapValue[0],
                payload =
                  _actionMapValue$ === undefined
                    ? __WEBPACK_IMPORTED_MODULE_1_lodash_es_identity__['a' /* default */]
                    : _actionMapValue$,
                meta = _actionMapValue[1];

              return (
                Object(__WEBPACK_IMPORTED_MODULE_6_lodash_es_isFunction__['a' /* default */])(
                  payload
                ) &&
                Object(__WEBPACK_IMPORTED_MODULE_6_lodash_es_isFunction__['a' /* default */])(meta)
              );
            }
            return false;
          }

          return Object(__WEBPACK_IMPORTED_MODULE_10__arrayToObject__['a' /* default */])(
            Object.keys(actionMap),
            function(partialActionCreators, type) {
              var actionMapValue = actionMap[type];
              __WEBPACK_IMPORTED_MODULE_9_invariant___default()(
                isValidActionMapValue(actionMapValue),
                'Expected function, undefined, null, or array with payload and meta ' +
                  ('functions for ' + type)
              );
              var prefixedType = prefix ? '' + prefix + namespace + type : type;
              var actionCreator = Object(
                __WEBPACK_IMPORTED_MODULE_3_lodash_es_isArray__['a' /* default */]
              )(actionMapValue)
                ? __WEBPACK_IMPORTED_MODULE_8__createAction__['a' /* default */].apply(
                    undefined,
                    [prefixedType].concat(_toConsumableArray(actionMapValue))
                  )
                : Object(__WEBPACK_IMPORTED_MODULE_8__createAction__['a' /* default */])(
                    prefixedType,
                    actionMapValue
                  );
              return _extends({}, partialActionCreators, _defineProperty({}, type, actionCreator));
            }
          );
        }

        function actionCreatorsFromIdentityActions(identityActions, options) {
          var actionMap = Object(__WEBPACK_IMPORTED_MODULE_10__arrayToObject__['a' /* default */])(
            identityActions,
            function(partialActionMap, type) {
              return _extends(
                {},
                partialActionMap,
                _defineProperty(
                  {},
                  type,
                  __WEBPACK_IMPORTED_MODULE_1_lodash_es_identity__['a' /* default */]
                )
              );
            }
          );
          var actionCreators = actionMapToActionCreators(actionMap, options);
          return Object(__WEBPACK_IMPORTED_MODULE_10__arrayToObject__['a' /* default */])(
            Object.keys(actionCreators),
            function(partialActionCreators, type) {
              return _extends(
                {},
                partialActionCreators,
                _defineProperty(
                  {},
                  Object(__WEBPACK_IMPORTED_MODULE_0__camelCase__['a' /* default */])(type),
                  actionCreators[type]
                )
              );
            }
          );
        }

        /***/
      },
      /* 84 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /**
         * Gets the last element of `array`.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Array
         * @param {Array} array The array to query.
         * @returns {*} Returns the last element of `array`.
         * @example
         *
         * _.last([1, 2, 3]);
         * // => 3
         */
        function last(array) {
          var length = array == null ? 0 : array.length;
          return length ? array[length - 1] : undefined;
        }

        /* harmony default export */ __webpack_exports__['a'] = last;

        /***/
      },
      /* 85 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony default export */ __webpack_exports__['a'] = function(array, callback) {
          return array.reduce(function(partialObject, element) {
            return callback(partialObject, element);
          }, {});
        };

        /***/
      },
      /* 86 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
        /* WEBPACK VAR INJECTION */ (function(process) {
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(
            39
          );
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(
            89
          );
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(
            90
          );
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(
            91
          );
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(41);
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(
            40
          );
          /* harmony reexport (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'createStore',
            function() {
              return __WEBPACK_IMPORTED_MODULE_0__createStore__['b'];
            }
          );
          /* harmony reexport (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'combineReducers',
            function() {
              return __WEBPACK_IMPORTED_MODULE_1__combineReducers__['a'];
            }
          );
          /* harmony reexport (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'bindActionCreators',
            function() {
              return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__['a'];
            }
          );
          /* harmony reexport (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'applyMiddleware',
            function() {
              return __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__['a'];
            }
          );
          /* harmony reexport (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'compose',
            function() {
              return __WEBPACK_IMPORTED_MODULE_4__compose__['a'];
            }
          );

          /*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
          function isCrushed() {}

          if (
            process.env.NODE_ENV !== 'production' &&
            typeof isCrushed.name === 'string' &&
            isCrushed.name !== 'isCrushed'
          ) {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_warning__['a' /* default */])(
              "You are currently using minified code outside of NODE_ENV === 'production'. " +
                'This means that you are running a slower development build of Redux. ' +
                'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' +
                'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' +
                'to ensure you have the correct code for your production build.'
            );
          }

          /* WEBPACK VAR INJECTION */
        }.call(__webpack_exports__, __webpack_require__(8)));

        /***/
      },
      /* 87 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* WEBPACK VAR INJECTION */ (function(global, module) {
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponyfill_js__ = __webpack_require__(
            88
          );
          /* global window */

          var root;

          if (typeof self !== 'undefined') {
            root = self;
          } else if (typeof window !== 'undefined') {
            root = window;
          } else if (typeof global !== 'undefined') {
            root = global;
          } else if (true) {
            root = module;
          } else {
            root = Function('return this')();
          }

          var result = Object(__WEBPACK_IMPORTED_MODULE_0__ponyfill_js__['a' /* default */])(root);
          /* harmony default export */ __webpack_exports__['a'] = result;

          /* WEBPACK VAR INJECTION */
        }.call(__webpack_exports__, __webpack_require__(21), __webpack_require__(15)(module)));

        /***/
      },
      /* 88 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony export (immutable) */ __webpack_exports__['a'] = symbolObservablePonyfill;
        function symbolObservablePonyfill(root) {
          var result;
          var Symbol = root.Symbol;

          if (typeof Symbol === 'function') {
            if (Symbol.observable) {
              result = Symbol.observable;
            } else {
              result = Symbol('observable');
              Symbol.observable = result;
            }
          } else {
            result = '@@observable';
          }

          return result;
        }

        /***/
      },
      /* 89 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* WEBPACK VAR INJECTION */ (function(process) {
          /* harmony export (immutable) */ __webpack_exports__['a'] = combineReducers;
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(
            39
          );
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(
            4
          );
          /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(
            40
          );

          function getUndefinedStateErrorMessage(key, action) {
            var actionType = action && action.type;
            var actionName = (actionType && '"' + actionType.toString() + '"') || 'an action';

            return (
              'Given action ' +
              actionName +
              ', reducer "' +
              key +
              '" returned undefined. ' +
              'To ignore an action, you must explicitly return the previous state. ' +
              'If you want this reducer to hold no value, you can return null instead of undefined.'
            );
          }

          function getUnexpectedStateShapeWarningMessage(
            inputState,
            reducers,
            action,
            unexpectedKeyCache
          ) {
            var reducerKeys = Object.keys(reducers);
            var argumentName =
              action &&
              action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__['a' /* ActionTypes */].INIT
                ? 'preloadedState argument passed to createStore'
                : 'previous state received by the reducer';

            if (reducerKeys.length === 0) {
              return (
                'Store does not have a valid reducer. Make sure the argument passed ' +
                'to combineReducers is an object whose values are reducers.'
              );
            }

            if (
              !Object(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__['a' /* default */])(
                inputState
              )
            ) {
              return (
                'The ' +
                argumentName +
                ' has unexpected type of "' +
                {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] +
                '". Expected argument to be an object with the following ' +
                ('keys: "' + reducerKeys.join('", "') + '"')
              );
            }

            var unexpectedKeys = Object.keys(inputState).filter(function(key) {
              return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
            });

            unexpectedKeys.forEach(function(key) {
              unexpectedKeyCache[key] = true;
            });

            if (unexpectedKeys.length > 0) {
              return (
                'Unexpected ' +
                (unexpectedKeys.length > 1 ? 'keys' : 'key') +
                ' ' +
                ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') +
                'Expected to find one of the known reducer keys instead: ' +
                ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.')
              );
            }
          }

          function assertReducerShape(reducers) {
            Object.keys(reducers).forEach(function(key) {
              var reducer = reducers[key];
              var initialState = reducer(undefined, {
                type: __WEBPACK_IMPORTED_MODULE_0__createStore__['a' /* ActionTypes */].INIT,
              });

              if (typeof initialState === 'undefined') {
                throw new Error(
                  'Reducer "' +
                    key +
                    '" returned undefined during initialization. ' +
                    'If the state passed to the reducer is undefined, you must ' +
                    'explicitly return the initial state. The initial state may ' +
                    "not be undefined. If you don't want to set a value for this reducer, " +
                    'you can use null instead of undefined.'
                );
              }

              var type =
                '@@redux/PROBE_UNKNOWN_ACTION_' +
                Math.random()
                  .toString(36)
                  .substring(7)
                  .split('')
                  .join('.');
              if (typeof reducer(undefined, { type: type }) === 'undefined') {
                throw new Error(
                  'Reducer "' +
                    key +
                    '" returned undefined when probed with a random type. ' +
                    ("Don't try to handle " +
                      __WEBPACK_IMPORTED_MODULE_0__createStore__['a' /* ActionTypes */].INIT +
                      ' or other actions in "redux/*" ') +
                    'namespace. They are considered private. Instead, you must return the ' +
                    'current state for any unknown actions, unless it is undefined, ' +
                    'in which case you must return the initial state, regardless of the ' +
                    'action type. The initial state may not be undefined, but can be null.'
                );
              }
            });
          }

          /**
           * Turns an object whose values are different reducer functions, into a single
           * reducer function. It will call every child reducer, and gather their results
           * into a single state object, whose keys correspond to the keys of the passed
           * reducer functions.
           *
           * @param {Object} reducers An object whose values correspond to different
           * reducer functions that need to be combined into one. One handy way to obtain
           * it is to use ES6 `import * as reducers` syntax. The reducers may never return
           * undefined for any action. Instead, they should return their initial state
           * if the state passed to them was undefined, and the current state for any
           * unrecognized action.
           *
           * @returns {Function} A reducer function that invokes every reducer inside the
           * passed object, and builds a state object with the same shape.
           */
          function combineReducers(reducers) {
            var reducerKeys = Object.keys(reducers);
            var finalReducers = {};
            for (var i = 0; i < reducerKeys.length; i++) {
              var key = reducerKeys[i];

              if (process.env.NODE_ENV !== 'production') {
                if (typeof reducers[key] === 'undefined') {
                  Object(__WEBPACK_IMPORTED_MODULE_2__utils_warning__['a' /* default */])(
                    'No reducer provided for key "' + key + '"'
                  );
                }
              }

              if (typeof reducers[key] === 'function') {
                finalReducers[key] = reducers[key];
              }
            }
            var finalReducerKeys = Object.keys(finalReducers);

            var unexpectedKeyCache = void 0;
            if (process.env.NODE_ENV !== 'production') {
              unexpectedKeyCache = {};
            }

            var shapeAssertionError = void 0;
            try {
              assertReducerShape(finalReducers);
            } catch (e) {
              shapeAssertionError = e;
            }

            return function combination() {
              var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              var action = arguments[1];

              if (shapeAssertionError) {
                throw shapeAssertionError;
              }

              if (process.env.NODE_ENV !== 'production') {
                var warningMessage = getUnexpectedStateShapeWarningMessage(
                  state,
                  finalReducers,
                  action,
                  unexpectedKeyCache
                );
                if (warningMessage) {
                  Object(__WEBPACK_IMPORTED_MODULE_2__utils_warning__['a' /* default */])(
                    warningMessage
                  );
                }
              }

              var hasChanged = false;
              var nextState = {};
              for (var _i = 0; _i < finalReducerKeys.length; _i++) {
                var _key = finalReducerKeys[_i];
                var reducer = finalReducers[_key];
                var previousStateForKey = state[_key];
                var nextStateForKey = reducer(previousStateForKey, action);
                if (typeof nextStateForKey === 'undefined') {
                  var errorMessage = getUndefinedStateErrorMessage(_key, action);
                  throw new Error(errorMessage);
                }
                nextState[_key] = nextStateForKey;
                hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
              }
              return hasChanged ? nextState : state;
            };
          }
          /* WEBPACK VAR INJECTION */
        }.call(__webpack_exports__, __webpack_require__(8)));

        /***/
      },
      /* 90 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony export (immutable) */ __webpack_exports__['a'] = bindActionCreators;
        function bindActionCreator(actionCreator, dispatch) {
          return function() {
            return dispatch(actionCreator.apply(undefined, arguments));
          };
        }

        /**
         * Turns an object whose values are action creators, into an object with the
         * same keys, but with every function wrapped into a `dispatch` call so they
         * may be invoked directly. This is just a convenience method, as you can call
         * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
         *
         * For convenience, you can also pass a single function as the first argument,
         * and get a function in return.
         *
         * @param {Function|Object} actionCreators An object whose values are action
         * creator functions. One handy way to obtain it is to use ES6 `import * as`
         * syntax. You may also pass a single function.
         *
         * @param {Function} dispatch The `dispatch` function available on your Redux
         * store.
         *
         * @returns {Function|Object} The object mimicking the original object, but with
         * every action creator wrapped into the `dispatch` call. If you passed a
         * function as `actionCreators`, the return value will also be a single
         * function.
         */
        function bindActionCreators(actionCreators, dispatch) {
          if (typeof actionCreators === 'function') {
            return bindActionCreator(actionCreators, dispatch);
          }

          if (typeof actionCreators !== 'object' || actionCreators === null) {
            throw new Error(
              'bindActionCreators expected an object or a function, instead received ' +
                (actionCreators === null ? 'null' : typeof actionCreators) +
                '. ' +
                'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
            );
          }

          var keys = Object.keys(actionCreators);
          var boundActionCreators = {};
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var actionCreator = actionCreators[key];
            if (typeof actionCreator === 'function') {
              boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
            }
          }
          return boundActionCreators;
        }

        /***/
      },
      /* 91 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony export (immutable) */ __webpack_exports__['a'] = applyMiddleware;
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(41);
        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        /**
         * Creates a store enhancer that applies middleware to the dispatch method
         * of the Redux store. This is handy for a variety of tasks, such as expressing
         * asynchronous actions in a concise manner, or logging every action payload.
         *
         * See `redux-thunk` package as an example of the Redux middleware.
         *
         * Because middleware is potentially asynchronous, this should be the first
         * store enhancer in the composition chain.
         *
         * Note that each middleware will be given the `dispatch` and `getState` functions
         * as named arguments.
         *
         * @param {...Function} middlewares The middleware chain to be applied.
         * @returns {Function} A store enhancer applying the middleware.
         */
        function applyMiddleware() {
          for (
            var _len = arguments.length, middlewares = Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            middlewares[_key] = arguments[_key];
          }

          return function(createStore) {
            return function(reducer, preloadedState, enhancer) {
              var store = createStore(reducer, preloadedState, enhancer);
              var _dispatch = store.dispatch;
              var chain = [];

              var middlewareAPI = {
                getState: store.getState,
                dispatch: function dispatch(action) {
                  return _dispatch(action);
                },
              };
              chain = middlewares.map(function(middleware) {
                return middleware(middlewareAPI);
              });
              _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__['a' /* default */].apply(
                undefined,
                chain
              )(store.dispatch);

              return _extends({}, store, {
                dispatch: _dispatch,
              });
            };
          };
        }

        /***/
      },
      /* 92 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        var _eventBus = __webpack_require__(18);

        var _eventBus2 = _interopRequireDefault(_eventBus);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var actionTakeMiddleware = function actionTakeMiddleware(_ref) {
          var dispatch = _ref.dispatch,
            getState = _ref.getState;
          return function(next) {
            return function(action) {
              var acfun = typeof action === 'function';
              !acfun && _eventBus2.default.emit(action.type, action);
              var returnValue = next(action);
              !acfun && _eventBus2.default.emit(action.type + ':after', action);
              return returnValue;
            };
          };
        };

        exports.default = actionTakeMiddleware;
        module.exports = exports['default'];

        /***/
      },
      /* 93 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        var _eventBus = __webpack_require__(18);

        var _eventBus2 = _interopRequireDefault(_eventBus);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var thunkMiddleware = function thunkMiddleware(_ref) {
          var dispatch = _ref.dispatch,
            getState = _ref.getState;
          return function(next) {
            return function(action) {
              if (action.meta && action.payload && typeof action.payload === 'function') {
                var rootState = getState();
                var _action$meta = action.meta,
                  namespace = _action$meta.namespace,
                  app = _action$meta.app,
                  composeDispatcher = _action$meta.composeDispatcher,
                  takes = _action$meta.takes;

                action.payload = action
                  .payload({
                    dispatcher: composeDispatcher[namespace],
                    take: takes[namespace],
                    getState: getState,
                    state: rootState[namespace],
                    eventBus: _eventBus2.default,
                  })
                  .catch(function(error) {
                    return app._effectsErrorDefaultHandle(error);
                  });

                next(action);

                return action.payload;
              }

              return next(action);
            };
          };
        };

        exports.default = thunkMiddleware;
        module.exports = exports['default'];

        /***/
      },
      /* 94 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
        /* WEBPACK VAR INJECTION */ (function(process) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'setAutoFreeze',
            function() {
              return setAutoFreeze;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'setUseProxies',
            function() {
              return setUseProxies;
            }
          );
          var _typeof =
            typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
              ? function(obj) {
                  return typeof obj;
                }
              : function(obj) {
                  return obj &&
                    typeof Symbol === 'function' &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? 'symbol'
                    : typeof obj;
                };

          var PROXY_STATE =
            typeof Symbol !== 'undefined' ? Symbol('immer-proxy-state') : '__$immer_state';

          var RETURNED_AND_MODIFIED_ERROR =
            'An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.';

          function verifyMinified() {}

          var inProduction =
            (typeof process !== 'undefined' && process.env.NODE_ENV === 'production') ||
            verifyMinified.name !== 'verifyMinified';

          var autoFreeze = !inProduction;
          var useProxies = typeof Proxy !== 'undefined';

          /**
           * Automatically freezes any state trees generated by immer.
           * This protects against accidental modifications of the state tree outside of an immer function.
           * This comes with a performance impact, so it is recommended to disable this option in production.
           * It is by default enabled.
           *
           * @returns {void}
           */
          function setAutoFreeze(enableAutoFreeze) {
            autoFreeze = enableAutoFreeze;
          }

          function setUseProxies(value) {
            useProxies = value;
          }

          function getUseProxies() {
            return useProxies;
          }

          function isProxy(value) {
            return !!value && !!value[PROXY_STATE];
          }

          function isProxyable(value) {
            if (!value) return false;
            if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object')
              return false;
            if (Array.isArray(value)) return true;
            var proto = Object.getPrototypeOf(value);
            return proto === null || proto === Object.prototype;
          }

          function freeze(value) {
            if (autoFreeze) {
              Object.freeze(value);
            }
            return value;
          }

          function shallowCopy(value) {
            if (Array.isArray(value)) return value.slice();
            if (value.__proto__ === undefined) return Object.assign(Object.create(null), value);
            return Object.assign({}, value);
          }

          function each(value, cb) {
            if (Array.isArray(value)) {
              for (var i = 0; i < value.length; i++) {
                cb(i, value[i]);
              }
            } else {
              for (var key in value) {
                cb(key, value[key]);
              }
            }
          }

          function has(thing, prop) {
            return Object.prototype.hasOwnProperty.call(thing, prop);
          }

          // given a base object, returns it if unmodified, or return the changed cloned if modified
          function finalize(base) {
            if (isProxy(base)) {
              var state = base[PROXY_STATE];
              if (state.modified === true) {
                if (state.finalized === true) return state.copy;
                state.finalized = true;
                return finalizeObject(
                  useProxies ? state.copy : (state.copy = shallowCopy(base)),
                  state
                );
              } else {
                return state.base;
              }
            }
            finalizeNonProxiedObject(base);
            return base;
          }

          function finalizeObject(copy, state) {
            var base = state.base;
            each(copy, function(prop, value) {
              if (value !== base[prop]) copy[prop] = finalize(value);
            });
            return freeze(copy);
          }

          function finalizeNonProxiedObject(parent) {
            // If finalize is called on an object that was not a proxy, it means that it is an object that was not there in the original
            // tree and it could contain proxies at arbitrarily places. Let's find and finalize them as well
            if (!isProxyable(parent)) return;
            if (Object.isFrozen(parent)) return;
            each(parent, function(i, child) {
              if (isProxy(child)) {
                parent[i] = finalize(child);
              } else finalizeNonProxiedObject(child);
            });
            // always freeze completely new data
            freeze(parent);
          }

          function is(x, y) {
            // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
            if (x === y) {
              return x !== 0 || 1 / x === 1 / y;
            } else {
              return x !== x && y !== y;
            }
          }

          // @ts-check

          var proxies = null;

          var objectTraps = {
            get: get$1,
            has: function has$$1(target, prop) {
              return prop in source(target);
            },
            ownKeys: function ownKeys(target) {
              return Reflect.ownKeys(source(target));
            },

            set: set$1,
            deleteProperty: deleteProperty,
            getOwnPropertyDescriptor: getOwnPropertyDescriptor,
            defineProperty: defineProperty$1,
            setPrototypeOf: function setPrototypeOf() {
              throw new Error("Don't even try this...");
            },
          };

          var arrayTraps = {};
          each(objectTraps, function(key, fn) {
            arrayTraps[key] = function() {
              arguments[0] = arguments[0][0];
              return fn.apply(this, arguments);
            };
          });

          function createState(parent, base) {
            return {
              modified: false,
              finalized: false,
              parent: parent,
              base: base,
              copy: undefined,
              proxies: {},
            };
          }

          function source(state) {
            return state.modified === true ? state.copy : state.base;
          }

          function get$1(state, prop) {
            if (prop === PROXY_STATE) return state;
            if (state.modified) {
              var value = state.copy[prop];
              if (value === state.base[prop] && isProxyable(value))
                // only create proxy if it is not yet a proxy, and not a new object
                // (new objects don't need proxying, they will be processed in finalize anyway)
                return (state.copy[prop] = createProxy(state, value));
              return value;
            } else {
              if (has(state.proxies, prop)) return state.proxies[prop];
              var _value = state.base[prop];
              if (!isProxy(_value) && isProxyable(_value))
                return (state.proxies[prop] = createProxy(state, _value));
              return _value;
            }
          }

          function set$1(state, prop, value) {
            if (!state.modified) {
              if (
                (prop in state.base && is(state.base[prop], value)) ||
                (has(state.proxies, prop) && state.proxies[prop] === value)
              )
                return true;
              markChanged(state);
            }
            state.copy[prop] = value;
            return true;
          }

          function deleteProperty(state, prop) {
            markChanged(state);
            delete state.copy[prop];
            return true;
          }

          function getOwnPropertyDescriptor(state, prop) {
            var owner = state.modified
              ? state.copy
              : has(state.proxies, prop)
                ? state.proxies
                : state.base;
            var descriptor = Reflect.getOwnPropertyDescriptor(owner, prop);
            if (descriptor && !(Array.isArray(owner) && prop === 'length'))
              descriptor.configurable = true;
            return descriptor;
          }

          function defineProperty$1() {
            throw new Error(
              'Immer does currently not support defining properties on draft objects'
            );
          }

          function markChanged(state) {
            if (!state.modified) {
              state.modified = true;
              state.copy = shallowCopy(state.base);
              // copy the proxies over the base-copy
              Object.assign(state.copy, state.proxies); // yup that works for arrays as well
              if (state.parent) markChanged(state.parent);
            }
          }

          // creates a proxy for plain objects / arrays
          function createProxy(parentState, base) {
            var state = createState(parentState, base);
            var proxy = Array.isArray(base)
              ? Proxy.revocable([state], arrayTraps)
              : Proxy.revocable(state, objectTraps);
            proxies.push(proxy);
            return proxy.proxy;
          }

          function produceProxy(baseState, producer) {
            var previousProxies = proxies;
            proxies = [];
            try {
              // create proxy for root
              var rootProxy = createProxy(undefined, baseState);
              // execute the thunk
              var returnValue = producer.call(rootProxy, rootProxy);
              // and finalize the modified proxy
              var result = void 0;
              // check whether the draft was modified and/or a value was returned
              if (returnValue !== undefined && returnValue !== rootProxy) {
                // something was returned, and it wasn't the proxy itself
                if (rootProxy[PROXY_STATE].modified) throw new Error(RETURNED_AND_MODIFIED_ERROR);

                // See #117
                // Should we just throw when returning a proxy which is not the root, but a subset of the original state?
                // Looks like a wrongly modeled reducer
                result = finalize(returnValue);
              } else {
                result = finalize(rootProxy);
              }
              // revoke all proxies
              each(proxies, function(_, p) {
                return p.revoke();
              });
              return result;
            } finally {
              proxies = previousProxies;
            }
          }

          // @ts-check

          var descriptors = {};
          var states = null;

          function createState$1(parent, proxy, base) {
            return {
              modified: false,
              hasCopy: false,
              parent: parent,
              base: base,
              proxy: proxy,
              copy: undefined,
              finished: false,
              finalizing: false,
              finalized: false,
            };
          }

          function source$1(state) {
            return state.hasCopy ? state.copy : state.base;
          }

          function _get(state, prop) {
            assertUnfinished(state);
            var value = source$1(state)[prop];
            if (!state.finalizing && value === state.base[prop] && isProxyable(value)) {
              // only create a proxy if the value is proxyable, and the value was in the base state
              // if it wasn't in the base state, the object is already modified and we will process it in finalize
              prepareCopy(state);
              return (state.copy[prop] = createProxy$1(state, value));
            }
            return value;
          }

          function _set(state, prop, value) {
            assertUnfinished(state);
            if (!state.modified) {
              if (is(source$1(state)[prop], value)) return;
              markChanged$1(state);
              prepareCopy(state);
            }
            state.copy[prop] = value;
          }

          function markChanged$1(state) {
            if (!state.modified) {
              state.modified = true;
              if (state.parent) markChanged$1(state.parent);
            }
          }

          function prepareCopy(state) {
            if (state.hasCopy) return;
            state.hasCopy = true;
            state.copy = shallowCopy(state.base);
          }

          // creates a proxy for plain objects / arrays
          function createProxy$1(parent, base) {
            var proxy = shallowCopy(base);
            each(base, function(i) {
              Object.defineProperty(proxy, '' + i, createPropertyProxy('' + i));
            });
            var state = createState$1(parent, proxy, base);
            createHiddenProperty(proxy, PROXY_STATE, state);
            states.push(state);
            return proxy;
          }

          function createPropertyProxy(prop) {
            return (
              descriptors[prop] ||
              (descriptors[prop] = {
                configurable: true,
                enumerable: true,
                get: function get$$1() {
                  return _get(this[PROXY_STATE], prop);
                },
                set: function set$$1(value) {
                  _set(this[PROXY_STATE], prop, value);
                },
              })
            );
          }

          function assertUnfinished(state) {
            if (state.finished === true)
              throw new Error(
                'Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process?'
              );
          }

          // this sounds very expensive, but actually it is not that extensive in practice
          // as it will only visit proxies, and only do key-based change detection for objects for
          // which it is not already know that they are changed (that is, only object for which no known key was changed)
          function markChanges() {
            // intentionally we process the proxies in reverse order;
            // ideally we start by processing leafs in the tree, because if a child has changed, we don't have to check the parent anymore
            // reverse order of proxy creation approximates this
            for (var i = states.length - 1; i >= 0; i--) {
              var state = states[i];
              if (state.modified === false) {
                if (Array.isArray(state.base)) {
                  if (hasArrayChanges(state)) markChanged$1(state);
                } else if (hasObjectChanges(state)) markChanged$1(state);
              }
            }
          }

          function hasObjectChanges(state) {
            var baseKeys = Object.keys(state.base);
            var keys = Object.keys(state.proxy);
            return !shallowEqual(baseKeys, keys);
          }

          function hasArrayChanges(state) {
            var proxy = state.proxy;

            if (proxy.length !== state.base.length) return true;
            // See #116
            // If we first shorten the length, our array interceptors will be removed.
            // If after that new items are added, result in the same original length,
            // those last items will have no intercepting property.
            // So if there is no own descriptor on the last position, we know that items were removed and added
            // N.B.: splice, unshift, etc only shift values around, but not prop descriptors, so we only have to check
            // the last one
            var descriptor = Object.getOwnPropertyDescriptor(proxy, proxy.length - 1);
            // descriptor can be null, but only for newly created sparse arrays, eg. new Array(10)
            if (descriptor && !descriptor.get) return true;
            // For all other cases, we don't have to compare, as they would have been picked up by the index setters
            return false;
          }

          function produceEs5(baseState, producer) {
            var prevStates = states;
            states = [];
            try {
              // create proxy for root
              var rootProxy = createProxy$1(undefined, baseState);
              // execute the thunk
              var returnValue = producer.call(rootProxy, rootProxy);
              // and finalize the modified proxy
              each(states, function(_, state) {
                state.finalizing = true;
              });
              // find and mark all changes (for parts not done yet)
              // TODO: store states by depth, to be able guarantee processing leaves first
              markChanges();
              var result = void 0;
              // check whether the draft was modified and/or a value was returned
              if (returnValue !== undefined && returnValue !== rootProxy) {
                // something was returned, and it wasn't the proxy itself
                if (rootProxy[PROXY_STATE].modified) throw new Error(RETURNED_AND_MODIFIED_ERROR);
                result = finalize(returnValue);
              } else result = finalize(rootProxy);
              // make sure all proxies become unusable
              each(states, function(_, state) {
                state.finished = true;
              });
              return result;
            } finally {
              states = prevStates;
            }
          }

          function shallowEqual(objA, objB) {
            //From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
            if (is(objA, objB)) return true;
            if (
              (typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' ||
              objA === null ||
              (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' ||
              objB === null
            ) {
              return false;
            }
            var keysA = Object.keys(objA);
            var keysB = Object.keys(objB);
            if (keysA.length !== keysB.length) return false;
            for (var i = 0; i < keysA.length; i++) {
              if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
                return false;
              }
            }
            return true;
          }

          function createHiddenProperty(target, prop, value) {
            Object.defineProperty(target, prop, {
              value: value,
              enumerable: false,
              writable: true,
            });
          }

          /**
           * produce takes a state, and runs a function against it.
           * That function can freely mutate the state, as it will create copies-on-write.
           * This means that the original state will stay unchanged, and once the function finishes, the modified state is returned
           *
           * @export
           * @param {any} baseState - the state to start with
           * @param {Function} producer - function that receives a proxy of the base state as first argument and which can be freely modified
           * @returns {any} a new state, or the base state if nothing was modified
           */
          function produce(baseState, producer) {
            // prettier-ignore
            if (arguments.length !== 1 && arguments.length !== 2) throw new Error("produce expects 1 or 2 arguments, got " + arguments.length);

            // curried invocation
            if (typeof baseState === 'function') {
              // prettier-ignore
              if (typeof producer === "function") throw new Error("if first argument is a function (curried invocation), the second argument to produce cannot be a function");

              var initialState = producer;
              var recipe = baseState;

              return function() {
                var args = arguments;

                var currentState =
                  args[0] === undefined && initialState !== undefined ? initialState : args[0];

                return produce(currentState, function(draft) {
                  args[0] = draft; // blegh!
                  return recipe.apply(draft, args);
                });
              };
            }

            // prettier-ignore
            {
        if (typeof producer !== "function") throw new Error("if first argument is not a function, the second argument to produce should be a function");
    }

            // if state is a primitive, don't bother proxying at all and just return whatever the producer returns on that value
            if (
              (typeof baseState === 'undefined' ? 'undefined' : _typeof(baseState)) !== 'object' ||
              baseState === null
            )
              return producer(baseState);
            if (!isProxyable(baseState))
              throw new Error(
                'the first argument to an immer producer should be a primitive, plain object or array, got ' +
                  (typeof baseState === 'undefined' ? 'undefined' : _typeof(baseState)) +
                  ': "' +
                  baseState +
                  '"'
              );
            return getUseProxies()
              ? produceProxy(baseState, producer)
              : produceEs5(baseState, producer);
          }

          /* harmony default export */ __webpack_exports__['default'] = produce;
          //# sourceMappingURL=immer.module.js.map

          /* WEBPACK VAR INJECTION */
        }.call(__webpack_exports__, __webpack_require__(8)));

        /***/
      },
      /* 95 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.default = assert;
        function assert(condition) {
          var error =
            arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'assert no pass';

          var correct = condition;
          if (typeof condition === 'function') {
            correct = condition();
          }
          if (!correct) {
            throw new Error(error);
          }
        }
        module.exports = exports['default'];

        /***/
      },
      /******/
    ]
  );
});
