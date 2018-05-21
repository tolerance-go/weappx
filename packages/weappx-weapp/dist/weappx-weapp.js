(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["weappx-weapp"] = factory();
	else
		root["weappx-weapp"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _store = __webpack_require__(1);

function normalizeMap(map) {
  return Array.isArray(map) ? map.map(function (key) {
    return { key: key, val: key };
  }) : Object.keys(map).map(function (key) {
    return { key: key, val: map[key] };
  });
}

function mapState(states) {
  var _this = this;

  var res = {};
  var store = (0, _store.getStore)();
  var state = store.getState();
  states.forEach(function (_ref) {
    var key = _ref.key,
        val = _ref.val;

    res[key] = typeof val === 'function' ? val.call(_this, state) : state[val];
  });
  return res;
}

function connectComponent() {
  var states = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  states = normalizeMap(states);
  return function (ComponentOptions) {
    var unSubscribe = null;

    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    var methods = ComponentOptions.methods || {};
    var _attached = methods.attached || ComponentOptions.attached;
    var _detached = methods.detached || ComponentOptions.detached;

    methods.attached && delete methods.attached;
    methods.detached && delete methods.detached;

    var onStateChange = function onStateChange() {
      var _this2 = this;

      var newStates = mapState(states);
      var hasChanged = false;
      Object.keys(newStates).forEach(function (k) {
        var newV = newStates[k];
        if (_this2.data[k] !== newV) {
          // 不相等
          hasChanged = true;
        }
      });
      hasChanged && this.setData(newStates);
    };

    return _extends({}, ComponentOptions, {
      data: Object.assign(ComponentOptions.data || {}, mapState(states)),
      attached: function attached() {
        var store = (0, _store.getStore)();
        unSubscribe = store.subscribe(onStateChange.bind(this));
        onStateChange.call(this);
        _attached && _attached.apply(this, arguments);
      },
      detached: function detached() {
        unSubscribe && unSubscribe();
        unSubscribe = null;
        _detached && _detached.apply(this, arguments);
      }
    });
  };
}

function connectPage() {
  var states = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  states = normalizeMap(states);
  return function (PageOptions) {
    var unSubscribe = null;

    var _onLoad = PageOptions.onLoad;
    var _onUnload = PageOptions.onUnload;
    var _onShow = PageOptions.onShow;
    var _onHide = PageOptions.onHide;

    var onStateChange = function onStateChange() {
      var _this3 = this;

      if (this.$hide) return;
      var newStates = mapState(states);
      var hasChanged = false;
      Object.keys(newStates).forEach(function (k) {
        var newV = newStates[k];
        if (_this3.data[k] !== newV) {
          // 不相等
          hasChanged = true;
        }
      });
      hasChanged && this.setData(newStates);
    };

    return _extends({}, PageOptions, {
      data: Object.assign(PageOptions.data || {}, mapState(states)),
      onLoad: function onLoad() {
        var store = (0, _store.getStore)();
        unSubscribe = store.subscribe(onStateChange.bind(this));
        onStateChange.call(this);
        _onLoad && _onLoad.apply(this, arguments);
      },
      onUnload: function onUnload() {
        unSubscribe && unSubscribe();
        unSubscribe = null;
        _onUnload && _onUnload.apply(this, arguments);
      },
      onShow: function onShow() {
        this.$hide = false;
        onStateChange.call(this);
        _onShow && _onShow.apply(this, arguments);
      },
      onHide: function onHide() {
        this.$hide = true;
        _onHide && _onHide.apply(this, arguments);
      }
    });
  };
}

var connector = { connectPage: connectPage, connectComponent: connectComponent, setStore: _store.setStore, getStore: _store.getStore };

exports.default = connector;
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStore = getStore;
exports.setStore = setStore;
var store = void 0;

function getStore() {
  return store;
}

function setStore(s) {
  store = s;
}

/***/ })
/******/ ]);
});