(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else if (typeof exports === 'object') exports['weappx-plugin-loading'] = factory();
  else root['weappx-plugin-loading'] = factory();
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
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

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

        var some = function some(obj) {
          for (var k in obj) {
            if (!obj.hasOwnProperty(k)) continue;
            if (obj[k]) return true;
          }
          return false;
        };

        var SPLIT = '/';

        var createLoading = function createLoading() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var _options$namespace = options.namespace,
            namespace = _options$namespace === undefined ? 'loading' : _options$namespace,
            _options$global = options.global,
            global = _options$global === undefined ? 'global' : _options$global;

          var loadingModel = {
            namespace: namespace,

            state: {
              '@namespaceLoadingCounts': {},
            },

            mutations: {
              save: function save(state, _ref) {
                var actionType = _ref.actionType,
                  loading = _ref.loading;

                state[actionType] = loading;

                var _actionType$split = actionType.split(SPLIT),
                  _actionType$split2 = _slicedToArray(_actionType$split, 2),
                  namespace = _actionType$split2[0],
                  actionCreatorName = _actionType$split2[1]; // eslint-disable-line

                var loadingCounts = state['@namespaceLoadingCounts'];

                if (!loadingCounts[namespace]) {
                  loadingCounts[namespace] = 0;
                }

                if (loading) {
                  loadingCounts[namespace]++;
                } else {
                  loadingCounts[namespace]--;
                }

                state[namespace] = !!loadingCounts[namespace];

                state[global] = some(loadingCounts);
              },
            },
          };

          var changeLoading = function changeLoading(dispatch, type, loading) {
            return dispatch({
              type: namespace + '/save',
              payload: { actionType: type, loading: loading },
            });
          };

          var prefixMiddleware = function prefixMiddleware(_ref2) {
            var dispatch = _ref2.dispatch,
              getState = _ref2.getState;
            return function(next) {
              return function(action) {
                if (action.meta && action.payload && action.payload instanceof Function) {
                  changeLoading(dispatch, action.type, true);
                }
                return next(action);
              };
            };
          };

          var suffixMiddleware = function suffixMiddleware(_ref3) {
            var dispatch = _ref3.dispatch,
              getState = _ref3.getState;
            return function(next) {
              return function(action) {
                if (action.meta && action.payload && action.payload instanceof Promise) {
                  action.payload.then(function(result) {
                    changeLoading(dispatch, action.type, false);
                    return result;
                  });
                }
                return next(action);
              };
            };
          };

          return {
            prefixMiddlewares: [prefixMiddleware],
            suffixMiddlewares: [suffixMiddleware],
            extraModels: [loadingModel],
          };
        };

        exports.default = createLoading;
        module.exports = exports['default'];

        /***/
      },
      /******/
    ]
  );
});
