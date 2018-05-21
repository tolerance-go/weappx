(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["weappx-wepy"] = factory();
	else
		root["weappx-wepy"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStore = getStore;
exports.setStore = setStore;
var store = null;

function getStore() {
  return store;
}

function setStore(s) {
  store = s;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapActions = exports.mapState = undefined;

var _store = __webpack_require__(0);

var mapState = exports.mapState = function mapState(states) {
  var res = {};
  normalizeMap(states).forEach(function (_ref) {
    var key = _ref.key,
        val = _ref.val;

    res[key] = function mappedState() {
      var store = (0, _store.getStore)();
      var state = store.getState();
      return typeof val === 'function' ? val.call(this, state) : state[val];
    };
  });
  return res;
};

var mapActions = exports.mapActions = function mapActions(actions) {
  var res = {};
  normalizeMap(actions).forEach(function (_ref2) {
    var key = _ref2.key,
        val = _ref2.val;

    res[key] = function mappedAction() {
      var store = (0, _store.getStore)();
      var dispatchParam = void 0;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (typeof val === 'string') {
        // 如果是字符串代表是直接同步模式 一个 action 的名字而已
        dispatchParam = {
          type: val,
          // 修正一般情况下的参数 一般支持只传一个参数
          // 如果真的是多个参数的话 那么 payload 就是参数组成的数组
          payload: args.length > 1 ? args : args[0]
        };
      } else {
        // 如果说是函数 则先调用执行
        // 否则直接 dispatch 该值 例如说是个 promise
        dispatchParam = typeof val === 'function' ? val.apply(store, args) : val;
      }
      return store.dispatch.call(store, dispatchParam);
    };
  });
  return res;
};

function normalizeMap(map) {
  return Array.isArray(map) ? map.map(function (key) {
    return { key: key, val: key };
  }) : Object.keys(map).map(function (key) {
    return { key: key, val: map[key] };
  });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _connect = __webpack_require__(3);

var _connect2 = _interopRequireDefault(_connect);

var _store = __webpack_require__(0);

var _helpers = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connector = {
  connect: _connect2.default,
  setStore: _store.setStore,
  getStore: _store.getStore,
  mapState: _helpers.mapState,
  mapActions: _helpers.mapActions
};

exports.default = connector;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = connect;

var _store = __webpack_require__(0);

var _helpers = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function connect(states, actions) {
  states = (0, _helpers.mapState)(states || {});
  actions = (0, _helpers.mapActions)(actions || {});
  return function connectComponent(Component) {
    var unSubscribe = null;
    // 绑定
    var _onLoad = Component.prototype.onLoad;
    var _onUnload = Component.prototype.onUnload;

    var onStateChange = function onStateChange() {
      var _this = this;

      var store = (0, _store.getStore)();
      var hasChanged = false;
      Object.keys(states).forEach(function (k) {
        var newV = states[k].call(_this);
        if (_this[k] !== newV) {
          // 不相等
          _this[k] = newV;
          hasChanged = true;
        }
      });
      hasChanged && this.$apply();
    };
    return function (_Component) {
      _inherits(_class, _Component);

      function _class() {
        _classCallCheck(this, _class);

        var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this2.computed = Object.assign(_this2.computed || {}, states);
        _this2.methods = Object.assign(_this2.methods || {}, actions);
        return _this2;
      }

      _createClass(_class, [{
        key: 'onLoad',
        value: function onLoad() {
          var store = (0, _store.getStore)();
          unSubscribe = store.subscribe(onStateChange.bind(this));
          onStateChange.call(this);
          _onLoad && _onLoad.apply(this, arguments);
        }
      }, {
        key: 'onUnload',
        value: function onUnload() {
          unSubscribe && unSubscribe();
          unSubscribe = null;
          _onUnload && _onUnload.apply(this, arguments);
        }
      }]);

      return _class;
    }(Component);
  };
}
module.exports = exports['default'];

/***/ })
/******/ ]);
});