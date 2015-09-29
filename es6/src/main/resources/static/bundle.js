/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	console.log('Babel was here');
	
	var React = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var when = __webpack_require__(1);
	var client = __webpack_require__(23);
	//var follow = require('./follow');
	//
	//var stompClient = require('./websocket-listener');
	
	var root = '/api';
	
	var App = (function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App() {
	        _classCallCheck(this, App);
	
	        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                null,
	                'Hello, React!'
	            );
	        }
	    }]);
	
	    return App;
	})(React.Component);
	
	React.render(React.createElement(App, null), document.getElementById('react'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	
	'use strict';
	
	(function (define) {
		'use strict';
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	
			var timed = __webpack_require__(3);
			var array = __webpack_require__(9);
			var flow = __webpack_require__(12);
			var fold = __webpack_require__(13);
			var inspect = __webpack_require__(14);
			var generate = __webpack_require__(15);
			var progress = __webpack_require__(16);
			var withThis = __webpack_require__(17);
			var unhandledRejection = __webpack_require__(18);
			var TimeoutError = __webpack_require__(8);
	
			var Promise = [array, flow, fold, generate, progress, inspect, withThis, timed, unhandledRejection].reduce(function (Promise, feature) {
				return feature(Promise);
			}, __webpack_require__(20));
	
			var apply = __webpack_require__(11)(Promise);
	
			// Public API
	
			when.promise = promise; // Create a pending promise
			when.resolve = Promise.resolve; // Create a resolved promise
			when.reject = Promise.reject; // Create a rejected promise
	
			when.lift = lift; // lift a function to return promises
			when['try'] = attempt; // call a function and return a promise
			when.attempt = attempt; // alias for when.try
	
			when.iterate = Promise.iterate; // DEPRECATED (use cujojs/most streams) Generate a stream of promises
			when.unfold = Promise.unfold; // DEPRECATED (use cujojs/most streams) Generate a stream of promises
	
			when.join = join; // Join 2 or more promises
	
			when.all = all; // Resolve a list of promises
			when.settle = settle; // Settle a list of promises
	
			when.any = lift(Promise.any); // One-winner race
			when.some = lift(Promise.some); // Multi-winner race
			when.race = lift(Promise.race); // First-to-settle race
	
			when.map = map; // Array.map() for promises
			when.filter = filter; // Array.filter() for promises
			when.reduce = lift(Promise.reduce); // Array.reduce() for promises
			when.reduceRight = lift(Promise.reduceRight); // Array.reduceRight() for promises
	
			when.isPromiseLike = isPromiseLike; // Is something promise-like, aka thenable
	
			when.Promise = Promise; // Promise constructor
			when.defer = defer; // Create a {promise, resolve, reject} tuple
	
			// Error types
	
			when.TimeoutError = TimeoutError;
	
			/**
	   * Get a trusted promise for x, or by transforming x with onFulfilled
	   *
	   * @param {*} x
	   * @param {function?} onFulfilled callback to be called when x is
	   *   successfully fulfilled.  If promiseOrValue is an immediate value, callback
	   *   will be invoked immediately.
	   * @param {function?} onRejected callback to be called when x is
	   *   rejected.
	   * @param {function?} onProgress callback to be called when progress updates
	   *   are issued for x. @deprecated
	   * @returns {Promise} a new promise that will fulfill with the return
	   *   value of callback or errback or the completion value of promiseOrValue if
	   *   callback and/or errback is not supplied.
	   */
			function when(x, onFulfilled, onRejected, onProgress) {
				var p = Promise.resolve(x);
				if (arguments.length < 2) {
					return p;
				}
	
				return p.then(onFulfilled, onRejected, onProgress);
			}
	
			/**
	   * Creates a new promise whose fate is determined by resolver.
	   * @param {function} resolver function(resolve, reject, notify)
	   * @returns {Promise} promise whose fate is determine by resolver
	   */
			function promise(resolver) {
				return new Promise(resolver);
			}
	
			/**
	   * Lift the supplied function, creating a version of f that returns
	   * promises, and accepts promises as arguments.
	   * @param {function} f
	   * @returns {Function} version of f that returns promises
	   */
			function lift(f) {
				return function () {
					for (var i = 0, l = arguments.length, a = new Array(l); i < l; ++i) {
						a[i] = arguments[i];
					}
					return apply(f, this, a);
				};
			}
	
			/**
	   * Call f in a future turn, with the supplied args, and return a promise
	   * for the result.
	   * @param {function} f
	   * @returns {Promise}
	   */
			function attempt(f /*, args... */) {
				/*jshint validthis:true */
				for (var i = 0, l = arguments.length - 1, a = new Array(l); i < l; ++i) {
					a[i] = arguments[i + 1];
				}
				return apply(f, this, a);
			}
	
			/**
	   * Creates a {promise, resolver} pair, either or both of which
	   * may be given out safely to consumers.
	   * @return {{promise: Promise, resolve: function, reject: function, notify: function}}
	   */
			function defer() {
				return new Deferred();
			}
	
			function Deferred() {
				var p = Promise._defer();
	
				function resolve(x) {
					p._handler.resolve(x);
				}
				function reject(x) {
					p._handler.reject(x);
				}
				function notify(x) {
					p._handler.notify(x);
				}
	
				this.promise = p;
				this.resolve = resolve;
				this.reject = reject;
				this.notify = notify;
				this.resolver = { resolve: resolve, reject: reject, notify: notify };
			}
	
			/**
	   * Determines if x is promise-like, i.e. a thenable object
	   * NOTE: Will return true for *any thenable object*, and isn't truly
	   * safe, since it may attempt to access the `then` property of x (i.e.
	   *  clever/malicious getters may do weird things)
	   * @param {*} x anything
	   * @returns {boolean} true if x is promise-like
	   */
			function isPromiseLike(x) {
				return x && typeof x.then === 'function';
			}
	
			/**
	   * Return a promise that will resolve only once all the supplied arguments
	   * have resolved. The resolution value of the returned promise will be an array
	   * containing the resolution values of each of the arguments.
	   * @param {...*} arguments may be a mix of promises and values
	   * @returns {Promise}
	   */
			function join() /* ...promises */{
				return Promise.all(arguments);
			}
	
			/**
	   * Return a promise that will fulfill once all input promises have
	   * fulfilled, or reject when any one input promise rejects.
	   * @param {array|Promise} promises array (or promise for an array) of promises
	   * @returns {Promise}
	   */
			function all(promises) {
				return when(promises, Promise.all);
			}
	
			/**
	   * Return a promise that will always fulfill with an array containing
	   * the outcome states of all input promises.  The returned promise
	   * will only reject if `promises` itself is a rejected promise.
	   * @param {array|Promise} promises array (or promise for an array) of promises
	   * @returns {Promise} promise for array of settled state descriptors
	   */
			function settle(promises) {
				return when(promises, Promise.settle);
			}
	
			/**
	   * Promise-aware array map function, similar to `Array.prototype.map()`,
	   * but input array may contain promises or values.
	   * @param {Array|Promise} promises array of anything, may contain promises and values
	   * @param {function(x:*, index:Number):*} mapFunc map function which may
	   *  return a promise or value
	   * @returns {Promise} promise that will fulfill with an array of mapped values
	   *  or reject if any input promise rejects.
	   */
			function map(promises, mapFunc) {
				return when(promises, function (promises) {
					return Promise.map(promises, mapFunc);
				});
			}
	
			/**
	   * Filter the provided array of promises using the provided predicate.  Input may
	   * contain promises and values
	   * @param {Array|Promise} promises array of promises and values
	   * @param {function(x:*, index:Number):boolean} predicate filtering predicate.
	   *  Must return truthy (or promise for truthy) for items to retain.
	   * @returns {Promise} promise that will fulfill with an array containing all items
	   *  for which predicate returned truthy.
	   */
			function filter(promises, predicate) {
				return when(promises, function (promises) {
					return Promise.filter(promises, predicate);
				});
			}
	
			return when;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(7));
	/**
	 * Promises/A+ and when() implementation
	 * when is part of the cujoJS family of libraries (http://cujojs.com/)
	 * @author Brian Cavalier
	 * @author John Hann
	 */

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	'use strict';
	
	(function (define) {
		'use strict';
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	
			var env = __webpack_require__(4);
			var TimeoutError = __webpack_require__(8);
	
			function setTimeout(f, ms, x, y) {
				return env.setTimer(function () {
					f(x, y, ms);
				}, ms);
			}
	
			return function timed(Promise) {
				/**
	    * Return a new promise whose fulfillment value is revealed only
	    * after ms milliseconds
	    * @param {number} ms milliseconds
	    * @returns {Promise}
	    */
				Promise.prototype.delay = function (ms) {
					var p = this._beget();
					this._handler.fold(handleDelay, ms, void 0, p._handler);
					return p;
				};
	
				function handleDelay(ms, x, h) {
					setTimeout(resolveDelay, ms, x, h);
				}
	
				function resolveDelay(x, h) {
					h.resolve(x);
				}
	
				/**
	    * Return a new promise that rejects after ms milliseconds unless
	    * this promise fulfills earlier, in which case the returned promise
	    * fulfills with the same value.
	    * @param {number} ms milliseconds
	    * @param {Error|*=} reason optional rejection reason to use, defaults
	    *   to a TimeoutError if not provided
	    * @returns {Promise}
	    */
				Promise.prototype.timeout = function (ms, reason) {
					var p = this._beget();
					var h = p._handler;
	
					var t = setTimeout(onTimeout, ms, reason, p._handler);
	
					this._handler.visit(h, function onFulfill(x) {
						env.clearTimer(t);
						this.resolve(x); // this = h
					}, function onReject(x) {
						env.clearTimer(t);
						this.reject(x); // this = h
					}, h.notify);
	
					return p;
				};
	
				function onTimeout(reason, h, ms) {
					var e = typeof reason === 'undefined' ? new TimeoutError('timed out after ' + ms + 'ms') : reason;
					h.reject(e);
				}
	
				return Promise;
			};
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(7));
	/** @author John Hann */

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var require;var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process) {/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	'use strict';
	
	(function (define) {
		'use strict';
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
			/*jshint maxcomplexity:6*/
	
			// Sniff "best" async scheduling option
			// Prefer process.nextTick or MutationObserver, then check for
			// setTimeout, and finally vertx, since its the only env that doesn't
			// have setTimeout
	
			var MutationObs;
			var capturedSetTimeout = typeof setTimeout !== 'undefined' && setTimeout;
	
			// Default env
			var setTimer = function setTimer(f, ms) {
				return setTimeout(f, ms);
			};
			var clearTimer = function clearTimer(t) {
				return clearTimeout(t);
			};
			var asap = function asap(f) {
				return capturedSetTimeout(f, 0);
			};
	
			// Detect specific env
			if (isNode()) {
				// Node
				asap = function (f) {
					return process.nextTick(f);
				};
			} else if (MutationObs = hasMutationObserver()) {
				// Modern browser
				asap = initMutationObserver(MutationObs);
			} else if (!capturedSetTimeout) {
				// vert.x
				var vertxRequire = require;
				var vertx = __webpack_require__(6);
				setTimer = function (f, ms) {
					return vertx.setTimer(ms, f);
				};
				clearTimer = vertx.cancelTimer;
				asap = vertx.runOnLoop || vertx.runOnContext;
			}
	
			return {
				setTimer: setTimer,
				clearTimer: clearTimer,
				asap: asap
			};
	
			function isNode() {
				return typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]';
			}
	
			function hasMutationObserver() {
				return typeof MutationObserver === 'function' && MutationObserver || typeof WebKitMutationObserver === 'function' && WebKitMutationObserver;
			}
	
			function initMutationObserver(MutationObserver) {
				var scheduled;
				var node = document.createTextNode('');
				var o = new MutationObserver(run);
				o.observe(node, { characterData: true });
	
				function run() {
					var f = scheduled;
					scheduled = void 0;
					f();
				}
	
				var i = 0;
				return function (f) {
					scheduled = f;
					node.data = i ^= 1;
				};
			}
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(7));
	/*global process,document,setTimeout,clearTimeout,MutationObserver,WebKitMutationObserver*/
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	'use strict';
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
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
	    var timeout = setTimeout(cleanUpNextTick);
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
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
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
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	'use strict';
	
	(function (define) {
		'use strict';
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	
			/**
	   * Custom error type for promises rejected by promise.timeout
	   * @param {string} message
	   * @constructor
	   */
			function TimeoutError(message) {
				Error.call(this);
				this.message = message;
				this.name = TimeoutError.name;
				if (typeof Error.captureStackTrace === 'function') {
					Error.captureStackTrace(this, TimeoutError);
				}
			}
	
			TimeoutError.prototype = Object.create(Error.prototype);
			TimeoutError.prototype.constructor = TimeoutError;
	
			return TimeoutError;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(7));
	/** @author John Hann */

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	'use strict';
	
	(function (define) {
		'use strict';
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	
			var state = __webpack_require__(10);
			var applier = __webpack_require__(11);
	
			return function array(Promise) {
	
				var applyFold = applier(Promise);
				var toPromise = Promise.resolve;
				var all = Promise.all;
	
				var ar = Array.prototype.reduce;
				var arr = Array.prototype.reduceRight;
				var slice = Array.prototype.slice;
	
				// Additional array combinators
	
				Promise.any = any;
				Promise.some = some;
				Promise.settle = settle;
	
				Promise.map = map;
				Promise.filter = filter;
				Promise.reduce = reduce;
				Promise.reduceRight = reduceRight;
	
				/**
	    * When this promise fulfills with an array, do
	    * onFulfilled.apply(void 0, array)
	    * @param {function} onFulfilled function to apply
	    * @returns {Promise} promise for the result of applying onFulfilled
	    */
				Promise.prototype.spread = function (onFulfilled) {
					return this.then(all).then(function (array) {
						return onFulfilled.apply(this, array);
					});
				};
	
				return Promise;
	
				/**
	    * One-winner competitive race.
	    * Return a promise that will fulfill when one of the promises
	    * in the input array fulfills, or will reject when all promises
	    * have rejected.
	    * @param {array} promises
	    * @returns {Promise} promise for the first fulfilled value
	    */
				function any(promises) {
					var p = Promise._defer();
					var resolver = p._handler;
					var l = promises.length >>> 0;
	
					var pending = l;
					var errors = [];
	
					for (var h, x, i = 0; i < l; ++i) {
						x = promises[i];
						if (x === void 0 && !(i in promises)) {
							--pending;
							continue;
						}
	
						h = Promise._handler(x);
						if (h.state() > 0) {
							resolver.become(h);
							Promise._visitRemaining(promises, i, h);
							break;
						} else {
							h.visit(resolver, handleFulfill, handleReject);
						}
					}
	
					if (pending === 0) {
						resolver.reject(new RangeError('any(): array must not be empty'));
					}
	
					return p;
	
					function handleFulfill(x) {
						/*jshint validthis:true*/
						errors = null;
						this.resolve(x); // this === resolver
					}
	
					function handleReject(e) {
						/*jshint validthis:true*/
						if (this.resolved) {
							// this === resolver
							return;
						}
	
						errors.push(e);
						if (--pending === 0) {
							this.reject(errors);
						}
					}
				}
	
				/**
	    * N-winner competitive race
	    * Return a promise that will fulfill when n input promises have
	    * fulfilled, or will reject when it becomes impossible for n
	    * input promises to fulfill (ie when promises.length - n + 1
	    * have rejected)
	    * @param {array} promises
	    * @param {number} n
	    * @returns {Promise} promise for the earliest n fulfillment values
	    *
	    * @deprecated
	    */
				function some(promises, n) {
					/*jshint maxcomplexity:7*/
					var p = Promise._defer();
					var resolver = p._handler;
	
					var results = [];
					var errors = [];
	
					var l = promises.length >>> 0;
					var nFulfill = 0;
					var nReject;
					var x, i; // reused in both for() loops
	
					// First pass: count actual array items
					for (i = 0; i < l; ++i) {
						x = promises[i];
						if (x === void 0 && !(i in promises)) {
							continue;
						}
						++nFulfill;
					}
	
					// Compute actual goals
					n = Math.max(n, 0);
					nReject = nFulfill - n + 1;
					nFulfill = Math.min(n, nFulfill);
	
					if (n > nFulfill) {
						resolver.reject(new RangeError('some(): array must contain at least ' + n + ' item(s), but had ' + nFulfill));
					} else if (nFulfill === 0) {
						resolver.resolve(results);
					}
	
					// Second pass: observe each array item, make progress toward goals
					for (i = 0; i < l; ++i) {
						x = promises[i];
						if (x === void 0 && !(i in promises)) {
							continue;
						}
	
						Promise._handler(x).visit(resolver, fulfill, reject, resolver.notify);
					}
	
					return p;
	
					function fulfill(x) {
						/*jshint validthis:true*/
						if (this.resolved) {
							// this === resolver
							return;
						}
	
						results.push(x);
						if (--nFulfill === 0) {
							errors = null;
							this.resolve(results);
						}
					}
	
					function reject(e) {
						/*jshint validthis:true*/
						if (this.resolved) {
							// this === resolver
							return;
						}
	
						errors.push(e);
						if (--nReject === 0) {
							results = null;
							this.reject(errors);
						}
					}
				}
	
				/**
	    * Apply f to the value of each promise in a list of promises
	    * and return a new list containing the results.
	    * @param {array} promises
	    * @param {function(x:*, index:Number):*} f mapping function
	    * @returns {Promise}
	    */
				function map(promises, f) {
					return Promise._traverse(f, promises);
				}
	
				/**
	    * Filter the provided array of promises using the provided predicate.  Input may
	    * contain promises and values
	    * @param {Array} promises array of promises and values
	    * @param {function(x:*, index:Number):boolean} predicate filtering predicate.
	    *  Must return truthy (or promise for truthy) for items to retain.
	    * @returns {Promise} promise that will fulfill with an array containing all items
	    *  for which predicate returned truthy.
	    */
				function filter(promises, predicate) {
					var a = slice.call(promises);
					return Promise._traverse(predicate, a).then(function (keep) {
						return filterSync(a, keep);
					});
				}
	
				function filterSync(promises, keep) {
					// Safe because we know all promises have fulfilled if we've made it this far
					var l = keep.length;
					var filtered = new Array(l);
					for (var i = 0, j = 0; i < l; ++i) {
						if (keep[i]) {
							filtered[j++] = Promise._handler(promises[i]).value;
						}
					}
					filtered.length = j;
					return filtered;
				}
	
				/**
	    * Return a promise that will always fulfill with an array containing
	    * the outcome states of all input promises.  The returned promise
	    * will never reject.
	    * @param {Array} promises
	    * @returns {Promise} promise for array of settled state descriptors
	    */
				function settle(promises) {
					return all(promises.map(settleOne));
				}
	
				function settleOne(p) {
					var h = Promise._handler(p);
					if (h.state() === 0) {
						return toPromise(p).then(state.fulfilled, state.rejected);
					}
	
					h._unreport();
					return state.inspect(h);
				}
	
				/**
	    * Traditional reduce function, similar to `Array.prototype.reduce()`, but
	    * input may contain promises and/or values, and reduceFunc
	    * may return either a value or a promise, *and* initialValue may
	    * be a promise for the starting value.
	    * @param {Array|Promise} promises array or promise for an array of anything,
	    *      may contain a mix of promises and values.
	    * @param {function(accumulated:*, x:*, index:Number):*} f reduce function
	    * @returns {Promise} that will resolve to the final reduced value
	    */
				function reduce(promises, f /*, initialValue */) {
					return arguments.length > 2 ? ar.call(promises, liftCombine(f), arguments[2]) : ar.call(promises, liftCombine(f));
				}
	
				/**
	    * Traditional reduce function, similar to `Array.prototype.reduceRight()`, but
	    * input may contain promises and/or values, and reduceFunc
	    * may return either a value or a promise, *and* initialValue may
	    * be a promise for the starting value.
	    * @param {Array|Promise} promises array or promise for an array of anything,
	    *      may contain a mix of promises and values.
	    * @param {function(accumulated:*, x:*, index:Number):*} f reduce function
	    * @returns {Promise} that will resolve to the final reduced value
	    */
				function reduceRight(promises, f /*, initialValue */) {
					return arguments.length > 2 ? arr.call(promises, liftCombine(f), arguments[2]) : arr.call(promises, liftCombine(f));
				}
	
				function liftCombine(f) {
					return function (z, x, i) {
						return applyFold(f, void 0, [z, x, i]);
					};
				}
			};
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(7));
	/** @author John Hann */

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	'use strict';
	
	(function (define) {
		'use strict';
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	
			return {
				pending: toPendingState,
				fulfilled: toFulfilledState,
				rejected: toRejectedState,
				inspect: inspect
			};
	
			function toPendingState() {
				return { state: 'pending' };
			}
	
			function toRejectedState(e) {
				return { state: 'rejected', reason: e };
			}
	
			function toFulfilledState(x) {
				return { state: 'fulfilled', value: x };
			}
	
			function inspect(handler) {
				var state = handler.state();
				return state === 0 ? toPendingState() : state > 0 ? toFulfilledState(handler.value) : toRejectedState(handler.value);
			}
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(7));
	/** @author John Hann */

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	'use strict';
	
	(function (define) {
		'use strict';
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	
			makeApply.tryCatchResolve = tryCatchResolve;
	
			return makeApply;
	
			function makeApply(Promise, call) {
				if (arguments.length < 2) {
					call = tryCatchResolve;
				}
	
				return apply;
	
				function apply(f, thisArg, args) {
					var p = Promise._defer();
					var l = args.length;
					var params = new Array(l);
					callAndResolve({ f: f, thisArg: thisArg, args: args, params: params, i: l - 1, call: call }, p._handler);
	
					return p;
				}
	
				function callAndResolve(c, h) {
					if (c.i < 0) {
						return call(c.f, c.thisArg, c.params, h);
					}
	
					var handler = Promise._handler(c.args[c.i]);
					handler.fold(callAndResolveNext, c, void 0, h);
				}
	
				function callAndResolveNext(c, x, h) {
					c.params[c.i] = x;
					c.i -= 1;
					callAndResolve(c, h);
				}
			}
	
			function tryCatchResolve(f, thisArg, args, resolver) {
				try {
					resolver.resolve(f.apply(thisArg, args));
				} catch (e) {
					resolver.reject(e);
				}
			}
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(7));
	/** @author John Hann */

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	'use strict';
	
	(function (define) {
		'use strict';
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	
			return function flow(Promise) {
	
				var resolve = Promise.resolve;
				var reject = Promise.reject;
				var origCatch = Promise.prototype['catch'];
	
				/**
	    * Handle the ultimate fulfillment value or rejection reason, and assume
	    * responsibility for all errors.  If an error propagates out of result
	    * or handleFatalError, it will be rethrown to the host, resulting in a
	    * loud stack track on most platforms and a crash on some.
	    * @param {function?} onResult
	    * @param {function?} onError
	    * @returns {undefined}
	    */
				Promise.prototype.done = function (onResult, onError) {
					this._handler.visit(this._handler.receiver, onResult, onError);
				};
	
				/**
	    * Add Error-type and predicate matching to catch.  Examples:
	    * promise.catch(TypeError, handleTypeError)
	    *   .catch(predicate, handleMatchedErrors)
	    *   .catch(handleRemainingErrors)
	    * @param onRejected
	    * @returns {*}
	    */
				Promise.prototype['catch'] = Promise.prototype.otherwise = function (onRejected) {
					if (arguments.length < 2) {
						return origCatch.call(this, onRejected);
					}
	
					if (typeof onRejected !== 'function') {
						return this.ensure(rejectInvalidPredicate);
					}
	
					return origCatch.call(this, createCatchFilter(arguments[1], onRejected));
				};
	
				/**
	    * Wraps the provided catch handler, so that it will only be called
	    * if the predicate evaluates truthy
	    * @param {?function} handler
	    * @param {function} predicate
	    * @returns {function} conditional catch handler
	    */
				function createCatchFilter(handler, predicate) {
					return function (e) {
						return evaluatePredicate(e, predicate) ? handler.call(this, e) : reject(e);
					};
				}
	
				/**
	    * Ensures that onFulfilledOrRejected will be called regardless of whether
	    * this promise is fulfilled or rejected.  onFulfilledOrRejected WILL NOT
	    * receive the promises' value or reason.  Any returned value will be disregarded.
	    * onFulfilledOrRejected may throw or return a rejected promise to signal
	    * an additional error.
	    * @param {function} handler handler to be called regardless of
	    *  fulfillment or rejection
	    * @returns {Promise}
	    */
				Promise.prototype['finally'] = Promise.prototype.ensure = function (handler) {
					if (typeof handler !== 'function') {
						return this;
					}
	
					return this.then(function (x) {
						return runSideEffect(handler, this, identity, x);
					}, function (e) {
						return runSideEffect(handler, this, reject, e);
					});
				};
	
				function runSideEffect(handler, thisArg, propagate, value) {
					var result = handler.call(thisArg);
					return maybeThenable(result) ? propagateValue(result, propagate, value) : propagate(value);
				}
	
				function propagateValue(result, propagate, x) {
					return resolve(result).then(function () {
						return propagate(x);
					});
				}
	
				/**
	    * Recover from a failure by returning a defaultValue.  If defaultValue
	    * is a promise, it's fulfillment value will be used.  If defaultValue is
	    * a promise that rejects, the returned promise will reject with the
	    * same reason.
	    * @param {*} defaultValue
	    * @returns {Promise} new promise
	    */
				Promise.prototype['else'] = Promise.prototype.orElse = function (defaultValue) {
					return this.then(void 0, function () {
						return defaultValue;
					});
				};
	
				/**
	    * Shortcut for .then(function() { return value; })
	    * @param  {*} value
	    * @return {Promise} a promise that:
	    *  - is fulfilled if value is not a promise, or
	    *  - if value is a promise, will fulfill with its value, or reject
	    *    with its reason.
	    */
				Promise.prototype['yield'] = function (value) {
					return this.then(function () {
						return value;
					});
				};
	
				/**
	    * Runs a side effect when this promise fulfills, without changing the
	    * fulfillment value.
	    * @param {function} onFulfilledSideEffect
	    * @returns {Promise}
	    */
				Promise.prototype.tap = function (onFulfilledSideEffect) {
					return this.then(onFulfilledSideEffect)['yield'](this);
				};
	
				return Promise;
			};
	
			function rejectInvalidPredicate() {
				throw new TypeError('catch predicate must be a function');
			}
	
			function evaluatePredicate(e, predicate) {
				return isError(predicate) ? e instanceof predicate : predicate(e);
			}
	
			function isError(predicate) {
				return predicate === Error || predicate != null && predicate.prototype instanceof Error;
			}
	
			function maybeThenable(x) {
				return (typeof x === 'object' || typeof x === 'function') && x !== null;
			}
	
			function identity(x) {
				return x;
			}
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(7));
	/** @author John Hann */

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	'use strict';
	
	(function (define) {
		'use strict';
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	
			return function fold(Promise) {
	
				Promise.prototype.fold = function (f, z) {
					var promise = this._beget();
	
					this._handler.fold(function (z, x, to) {
						Promise._handler(z).fold(function (x, z, to) {
							to.resolve(f.call(this, z, x));
						}, x, this, to);
					}, z, promise._handler.receiver, promise._handler);
	
					return promise;
				};
	
				return Promise;
			};
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(7));
	/** @author Jeff Escalante */

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	'use strict';
	
	(function (define) {
		'use strict';
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	
			var inspect = __webpack_require__(10).inspect;
	
			return function inspection(Promise) {
	
				Promise.prototype.inspect = function () {
					return inspect(Promise._handler(this));
				};
	
				return Promise;
			};
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(7));
	/** @author John Hann */

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	'use strict';
	
	(function (define) {
		'use strict';
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	
			return function generate(Promise) {
	
				var resolve = Promise.resolve;
	
				Promise.iterate = iterate;
				Promise.unfold = unfold;
	
				return Promise;
	
				/**
	    * @deprecated Use github.com/cujojs/most streams and most.iterate
	    * Generate a (potentially infinite) stream of promised values:
	    * x, f(x), f(f(x)), etc. until condition(x) returns true
	    * @param {function} f function to generate a new x from the previous x
	    * @param {function} condition function that, given the current x, returns
	    *  truthy when the iterate should stop
	    * @param {function} handler function to handle the value produced by f
	    * @param {*|Promise} x starting value, may be a promise
	    * @return {Promise} the result of the last call to f before
	    *  condition returns true
	    */
				function iterate(f, condition, handler, x) {
					return unfold(function (x) {
						return [x, f(x)];
					}, condition, handler, x);
				}
	
				/**
	    * @deprecated Use github.com/cujojs/most streams and most.unfold
	    * Generate a (potentially infinite) stream of promised values
	    * by applying handler(generator(seed)) iteratively until
	    * condition(seed) returns true.
	    * @param {function} unspool function that generates a [value, newSeed]
	    *  given a seed.
	    * @param {function} condition function that, given the current seed, returns
	    *  truthy when the unfold should stop
	    * @param {function} handler function to handle the value produced by unspool
	    * @param x {*|Promise} starting value, may be a promise
	    * @return {Promise} the result of the last value produced by unspool before
	    *  condition returns true
	    */
				function unfold(unspool, condition, handler, x) {
					return resolve(x).then(function (seed) {
						return resolve(condition(seed)).then(function (done) {
							return done ? seed : resolve(unspool(seed)).spread(next);
						});
					});
	
					function next(item, newSeed) {
						return resolve(handler(item)).then(function () {
							return unfold(unspool, condition, handler, newSeed);
						});
					}
				}
			};
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(7));
	/** @author John Hann */

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	'use strict';
	
	(function (define) {
		'use strict';
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	
			return function progress(Promise) {
	
				/**
	    * @deprecated
	    * Register a progress handler for this promise
	    * @param {function} onProgress
	    * @returns {Promise}
	    */
				Promise.prototype.progress = function (onProgress) {
					return this.then(void 0, void 0, onProgress);
				};
	
				return Promise;
			};
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(7));
	/** @author John Hann */

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	'use strict';
	
	(function (define) {
		'use strict';
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	
			return function addWith(Promise) {
				/**
	    * Returns a promise whose handlers will be called with `this` set to
	    * the supplied receiver.  Subsequent promises derived from the
	    * returned promise will also have their handlers called with receiver
	    * as `this`. Calling `with` with undefined or no arguments will return
	    * a promise whose handlers will again be called in the usual Promises/A+
	    * way (no `this`) thus safely undoing any previous `with` in the
	    * promise chain.
	    *
	    * WARNING: Promises returned from `with`/`withThis` are NOT Promises/A+
	    * compliant, specifically violating 2.2.5 (http://promisesaplus.com/#point-41)
	    *
	    * @param {object} receiver `this` value for all handlers attached to
	    *  the returned promise.
	    * @returns {Promise}
	    */
				Promise.prototype['with'] = Promise.prototype.withThis = function (receiver) {
					var p = this._beget();
					var child = p._handler;
					child.receiver = receiver;
					this._handler.chain(child, receiver);
					return p;
				};
	
				return Promise;
			};
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(7));
	/** @author John Hann */

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	'use strict';
	
	(function (define) {
		'use strict';
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	
			var setTimer = __webpack_require__(4).setTimer;
			var format = __webpack_require__(19);
	
			return function unhandledRejection(Promise) {
	
				var logError = noop;
				var logInfo = noop;
				var localConsole;
	
				if (typeof console !== 'undefined') {
					// Alias console to prevent things like uglify's drop_console option from
					// removing console.log/error. Unhandled rejections fall into the same
					// category as uncaught exceptions, and build tools shouldn't silence them.
					localConsole = console;
					logError = typeof localConsole.error !== 'undefined' ? function (e) {
						localConsole.error(e);
					} : function (e) {
						localConsole.log(e);
					};
	
					logInfo = typeof localConsole.info !== 'undefined' ? function (e) {
						localConsole.info(e);
					} : function (e) {
						localConsole.log(e);
					};
				}
	
				Promise.onPotentiallyUnhandledRejection = function (rejection) {
					enqueue(report, rejection);
				};
	
				Promise.onPotentiallyUnhandledRejectionHandled = function (rejection) {
					enqueue(unreport, rejection);
				};
	
				Promise.onFatalRejection = function (rejection) {
					enqueue(throwit, rejection.value);
				};
	
				var tasks = [];
				var reported = [];
				var running = null;
	
				function report(r) {
					if (!r.handled) {
						reported.push(r);
						logError('Potentially unhandled rejection [' + r.id + '] ' + format.formatError(r.value));
					}
				}
	
				function unreport(r) {
					var i = reported.indexOf(r);
					if (i >= 0) {
						reported.splice(i, 1);
						logInfo('Handled previous rejection [' + r.id + '] ' + format.formatObject(r.value));
					}
				}
	
				function enqueue(f, x) {
					tasks.push(f, x);
					if (running === null) {
						running = setTimer(flush, 0);
					}
				}
	
				function flush() {
					running = null;
					while (tasks.length > 0) {
						tasks.shift()(tasks.shift());
					}
				}
	
				return Promise;
			};
	
			function throwit(e) {
				throw e;
			}
	
			function noop() {}
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(7));
	/** @author John Hann */

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	'use strict';
	
	(function (define) {
		'use strict';
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	
			return {
				formatError: formatError,
				formatObject: formatObject,
				tryStringify: tryStringify
			};
	
			/**
	   * Format an error into a string.  If e is an Error and has a stack property,
	   * it's returned.  Otherwise, e is formatted using formatObject, with a
	   * warning added about e not being a proper Error.
	   * @param {*} e
	   * @returns {String} formatted string, suitable for output to developers
	   */
			function formatError(e) {
				var s = typeof e === 'object' && e !== null && e.stack ? e.stack : formatObject(e);
				return e instanceof Error ? s : s + ' (WARNING: non-Error used)';
			}
	
			/**
	   * Format an object, detecting "plain" objects and running them through
	   * JSON.stringify if possible.
	   * @param {Object} o
	   * @returns {string}
	   */
			function formatObject(o) {
				var s = String(o);
				if (s === '[object Object]' && typeof JSON !== 'undefined') {
					s = tryStringify(o, s);
				}
				return s;
			}
	
			/**
	   * Try to return the result of JSON.stringify(x).  If that fails, return
	   * defaultValue
	   * @param {*} x
	   * @param {*} defaultValue
	   * @returns {String|*} JSON.stringify(x) or defaultValue
	   */
			function tryStringify(x, defaultValue) {
				try {
					return JSON.stringify(x);
				} catch (e) {
					return defaultValue;
				}
			}
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(7));
	/** @author John Hann */

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	'use strict';
	
	(function (define) {
		'use strict';
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	
			var makePromise = __webpack_require__(21);
			var Scheduler = __webpack_require__(22);
			var async = __webpack_require__(4).asap;
	
			return makePromise({
				scheduler: new Scheduler(async)
			});
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(7));
	/** @author John Hann */

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process) {/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	'use strict';
	
	(function (define) {
		'use strict';
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	
			return function makePromise(environment) {
	
				var tasks = environment.scheduler;
				var emitRejection = initEmitRejection();
	
				var objectCreate = Object.create || function (proto) {
					function Child() {}
					Child.prototype = proto;
					return new Child();
				};
	
				/**
	    * Create a promise whose fate is determined by resolver
	    * @constructor
	    * @returns {Promise} promise
	    * @name Promise
	    */
				function Promise(resolver, handler) {
					this._handler = resolver === Handler ? handler : init(resolver);
				}
	
				/**
	    * Run the supplied resolver
	    * @param resolver
	    * @returns {Pending}
	    */
				function init(resolver) {
					var handler = new Pending();
	
					try {
						resolver(promiseResolve, promiseReject, promiseNotify);
					} catch (e) {
						promiseReject(e);
					}
	
					return handler;
	
					/**
	     * Transition from pre-resolution state to post-resolution state, notifying
	     * all listeners of the ultimate fulfillment or rejection
	     * @param {*} x resolution value
	     */
					function promiseResolve(x) {
						handler.resolve(x);
					}
					/**
	     * Reject this promise with reason, which will be used verbatim
	     * @param {Error|*} reason rejection reason, strongly suggested
	     *   to be an Error type
	     */
					function promiseReject(reason) {
						handler.reject(reason);
					}
	
					/**
	     * @deprecated
	     * Issue a progress event, notifying all progress listeners
	     * @param {*} x progress event payload to pass to all listeners
	     */
					function promiseNotify(x) {
						handler.notify(x);
					}
				}
	
				// Creation
	
				Promise.resolve = resolve;
				Promise.reject = reject;
				Promise.never = never;
	
				Promise._defer = defer;
				Promise._handler = getHandler;
	
				/**
	    * Returns a trusted promise. If x is already a trusted promise, it is
	    * returned, otherwise returns a new trusted Promise which follows x.
	    * @param  {*} x
	    * @return {Promise} promise
	    */
				function resolve(x) {
					return isPromise(x) ? x : new Promise(Handler, new Async(getHandler(x)));
				}
	
				/**
	    * Return a reject promise with x as its reason (x is used verbatim)
	    * @param {*} x
	    * @returns {Promise} rejected promise
	    */
				function reject(x) {
					return new Promise(Handler, new Async(new Rejected(x)));
				}
	
				/**
	    * Return a promise that remains pending forever
	    * @returns {Promise} forever-pending promise.
	    */
				function never() {
					return foreverPendingPromise; // Should be frozen
				}
	
				/**
	    * Creates an internal {promise, resolver} pair
	    * @private
	    * @returns {Promise}
	    */
				function defer() {
					return new Promise(Handler, new Pending());
				}
	
				// Transformation and flow control
	
				/**
	    * Transform this promise's fulfillment value, returning a new Promise
	    * for the transformed result.  If the promise cannot be fulfilled, onRejected
	    * is called with the reason.  onProgress *may* be called with updates toward
	    * this promise's fulfillment.
	    * @param {function=} onFulfilled fulfillment handler
	    * @param {function=} onRejected rejection handler
	    * @param {function=} onProgress @deprecated progress handler
	    * @return {Promise} new promise
	    */
				Promise.prototype.then = function (onFulfilled, onRejected, onProgress) {
					var parent = this._handler;
					var state = parent.join().state();
	
					if (typeof onFulfilled !== 'function' && state > 0 || typeof onRejected !== 'function' && state < 0) {
						// Short circuit: value will not change, simply share handler
						return new this.constructor(Handler, parent);
					}
	
					var p = this._beget();
					var child = p._handler;
	
					parent.chain(child, parent.receiver, onFulfilled, onRejected, onProgress);
	
					return p;
				};
	
				/**
	    * If this promise cannot be fulfilled due to an error, call onRejected to
	    * handle the error. Shortcut for .then(undefined, onRejected)
	    * @param {function?} onRejected
	    * @return {Promise}
	    */
				Promise.prototype['catch'] = function (onRejected) {
					return this.then(void 0, onRejected);
				};
	
				/**
	    * Creates a new, pending promise of the same type as this promise
	    * @private
	    * @returns {Promise}
	    */
				Promise.prototype._beget = function () {
					return begetFrom(this._handler, this.constructor);
				};
	
				function begetFrom(parent, Promise) {
					var child = new Pending(parent.receiver, parent.join().context);
					return new Promise(Handler, child);
				}
	
				// Array combinators
	
				Promise.all = all;
				Promise.race = race;
				Promise._traverse = traverse;
	
				/**
	    * Return a promise that will fulfill when all promises in the
	    * input array have fulfilled, or will reject when one of the
	    * promises rejects.
	    * @param {array} promises array of promises
	    * @returns {Promise} promise for array of fulfillment values
	    */
				function all(promises) {
					return traverseWith(snd, null, promises);
				}
	
				/**
	    * Array<Promise<X>> -> Promise<Array<f(X)>>
	    * @private
	    * @param {function} f function to apply to each promise's value
	    * @param {Array} promises array of promises
	    * @returns {Promise} promise for transformed values
	    */
				function traverse(f, promises) {
					return traverseWith(tryCatch2, f, promises);
				}
	
				function traverseWith(tryMap, f, promises) {
					var handler = typeof f === 'function' ? mapAt : settleAt;
	
					var resolver = new Pending();
					var pending = promises.length >>> 0;
					var results = new Array(pending);
	
					for (var i = 0, x; i < promises.length && !resolver.resolved; ++i) {
						x = promises[i];
	
						if (x === void 0 && !(i in promises)) {
							--pending;
							continue;
						}
	
						traverseAt(promises, handler, i, x, resolver);
					}
	
					if (pending === 0) {
						resolver.become(new Fulfilled(results));
					}
	
					return new Promise(Handler, resolver);
	
					function mapAt(i, x, resolver) {
						if (!resolver.resolved) {
							traverseAt(promises, settleAt, i, tryMap(f, x, i), resolver);
						}
					}
	
					function settleAt(i, x, resolver) {
						results[i] = x;
						if (--pending === 0) {
							resolver.become(new Fulfilled(results));
						}
					}
				}
	
				function traverseAt(promises, handler, i, x, resolver) {
					if (maybeThenable(x)) {
						var h = getHandlerMaybeThenable(x);
						var s = h.state();
	
						if (s === 0) {
							h.fold(handler, i, void 0, resolver);
						} else if (s > 0) {
							handler(i, h.value, resolver);
						} else {
							resolver.become(h);
							visitRemaining(promises, i + 1, h);
						}
					} else {
						handler(i, x, resolver);
					}
				}
	
				Promise._visitRemaining = visitRemaining;
				function visitRemaining(promises, start, handler) {
					for (var i = start; i < promises.length; ++i) {
						markAsHandled(getHandler(promises[i]), handler);
					}
				}
	
				function markAsHandled(h, handler) {
					if (h === handler) {
						return;
					}
	
					var s = h.state();
					if (s === 0) {
						h.visit(h, void 0, h._unreport);
					} else if (s < 0) {
						h._unreport();
					}
				}
	
				/**
	    * Fulfill-reject competitive race. Return a promise that will settle
	    * to the same state as the earliest input promise to settle.
	    *
	    * WARNING: The ES6 Promise spec requires that race()ing an empty array
	    * must return a promise that is pending forever.  This implementation
	    * returns a singleton forever-pending promise, the same singleton that is
	    * returned by Promise.never(), thus can be checked with ===
	    *
	    * @param {array} promises array of promises to race
	    * @returns {Promise} if input is non-empty, a promise that will settle
	    * to the same outcome as the earliest input promise to settle. if empty
	    * is empty, returns a promise that will never settle.
	    */
				function race(promises) {
					if (typeof promises !== 'object' || promises === null) {
						return reject(new TypeError('non-iterable passed to race()'));
					}
	
					// Sigh, race([]) is untestable unless we return *something*
					// that is recognizable without calling .then() on it.
					return promises.length === 0 ? never() : promises.length === 1 ? resolve(promises[0]) : runRace(promises);
				}
	
				function runRace(promises) {
					var resolver = new Pending();
					var i, x, h;
					for (i = 0; i < promises.length; ++i) {
						x = promises[i];
						if (x === void 0 && !(i in promises)) {
							continue;
						}
	
						h = getHandler(x);
						if (h.state() !== 0) {
							resolver.become(h);
							visitRemaining(promises, i + 1, h);
							break;
						} else {
							h.visit(resolver, resolver.resolve, resolver.reject);
						}
					}
					return new Promise(Handler, resolver);
				}
	
				// Promise internals
				// Below this, everything is @private
	
				/**
	    * Get an appropriate handler for x, without checking for cycles
	    * @param {*} x
	    * @returns {object} handler
	    */
				function getHandler(x) {
					if (isPromise(x)) {
						return x._handler.join();
					}
					return maybeThenable(x) ? getHandlerUntrusted(x) : new Fulfilled(x);
				}
	
				/**
	    * Get a handler for thenable x.
	    * NOTE: You must only call this if maybeThenable(x) == true
	    * @param {object|function|Promise} x
	    * @returns {object} handler
	    */
				function getHandlerMaybeThenable(x) {
					return isPromise(x) ? x._handler.join() : getHandlerUntrusted(x);
				}
	
				/**
	    * Get a handler for potentially untrusted thenable x
	    * @param {*} x
	    * @returns {object} handler
	    */
				function getHandlerUntrusted(x) {
					try {
						var untrustedThen = x.then;
						return typeof untrustedThen === 'function' ? new Thenable(untrustedThen, x) : new Fulfilled(x);
					} catch (e) {
						return new Rejected(e);
					}
				}
	
				/**
	    * Handler for a promise that is pending forever
	    * @constructor
	    */
				function Handler() {}
	
				Handler.prototype.when = Handler.prototype.become = Handler.prototype.notify // deprecated
				 = Handler.prototype.fail = Handler.prototype._unreport = Handler.prototype._report = noop;
	
				Handler.prototype._state = 0;
	
				Handler.prototype.state = function () {
					return this._state;
				};
	
				/**
	    * Recursively collapse handler chain to find the handler
	    * nearest to the fully resolved value.
	    * @returns {object} handler nearest the fully resolved value
	    */
				Handler.prototype.join = function () {
					var h = this;
					while (h.handler !== void 0) {
						h = h.handler;
					}
					return h;
				};
	
				Handler.prototype.chain = function (to, receiver, fulfilled, rejected, progress) {
					this.when({
						resolver: to,
						receiver: receiver,
						fulfilled: fulfilled,
						rejected: rejected,
						progress: progress
					});
				};
	
				Handler.prototype.visit = function (receiver, fulfilled, rejected, progress) {
					this.chain(failIfRejected, receiver, fulfilled, rejected, progress);
				};
	
				Handler.prototype.fold = function (f, z, c, to) {
					this.when(new Fold(f, z, c, to));
				};
	
				/**
	    * Handler that invokes fail() on any handler it becomes
	    * @constructor
	    */
				function FailIfRejected() {}
	
				inherit(Handler, FailIfRejected);
	
				FailIfRejected.prototype.become = function (h) {
					h.fail();
				};
	
				var failIfRejected = new FailIfRejected();
	
				/**
	    * Handler that manages a queue of consumers waiting on a pending promise
	    * @constructor
	    */
				function Pending(receiver, inheritedContext) {
					Promise.createContext(this, inheritedContext);
	
					this.consumers = void 0;
					this.receiver = receiver;
					this.handler = void 0;
					this.resolved = false;
				}
	
				inherit(Handler, Pending);
	
				Pending.prototype._state = 0;
	
				Pending.prototype.resolve = function (x) {
					this.become(getHandler(x));
				};
	
				Pending.prototype.reject = function (x) {
					if (this.resolved) {
						return;
					}
	
					this.become(new Rejected(x));
				};
	
				Pending.prototype.join = function () {
					if (!this.resolved) {
						return this;
					}
	
					var h = this;
	
					while (h.handler !== void 0) {
						h = h.handler;
						if (h === this) {
							return this.handler = cycle();
						}
					}
	
					return h;
				};
	
				Pending.prototype.run = function () {
					var q = this.consumers;
					var handler = this.handler;
					this.handler = this.handler.join();
					this.consumers = void 0;
	
					for (var i = 0; i < q.length; ++i) {
						handler.when(q[i]);
					}
				};
	
				Pending.prototype.become = function (handler) {
					if (this.resolved) {
						return;
					}
	
					this.resolved = true;
					this.handler = handler;
					if (this.consumers !== void 0) {
						tasks.enqueue(this);
					}
	
					if (this.context !== void 0) {
						handler._report(this.context);
					}
				};
	
				Pending.prototype.when = function (continuation) {
					if (this.resolved) {
						tasks.enqueue(new ContinuationTask(continuation, this.handler));
					} else {
						if (this.consumers === void 0) {
							this.consumers = [continuation];
						} else {
							this.consumers.push(continuation);
						}
					}
				};
	
				/**
	    * @deprecated
	    */
				Pending.prototype.notify = function (x) {
					if (!this.resolved) {
						tasks.enqueue(new ProgressTask(x, this));
					}
				};
	
				Pending.prototype.fail = function (context) {
					var c = typeof context === 'undefined' ? this.context : context;
					this.resolved && this.handler.join().fail(c);
				};
	
				Pending.prototype._report = function (context) {
					this.resolved && this.handler.join()._report(context);
				};
	
				Pending.prototype._unreport = function () {
					this.resolved && this.handler.join()._unreport();
				};
	
				/**
	    * Wrap another handler and force it into a future stack
	    * @param {object} handler
	    * @constructor
	    */
				function Async(handler) {
					this.handler = handler;
				}
	
				inherit(Handler, Async);
	
				Async.prototype.when = function (continuation) {
					tasks.enqueue(new ContinuationTask(continuation, this));
				};
	
				Async.prototype._report = function (context) {
					this.join()._report(context);
				};
	
				Async.prototype._unreport = function () {
					this.join()._unreport();
				};
	
				/**
	    * Handler that wraps an untrusted thenable and assimilates it in a future stack
	    * @param {function} then
	    * @param {{then: function}} thenable
	    * @constructor
	    */
				function Thenable(then, thenable) {
					Pending.call(this);
					tasks.enqueue(new AssimilateTask(then, thenable, this));
				}
	
				inherit(Pending, Thenable);
	
				/**
	    * Handler for a fulfilled promise
	    * @param {*} x fulfillment value
	    * @constructor
	    */
				function Fulfilled(x) {
					Promise.createContext(this);
					this.value = x;
				}
	
				inherit(Handler, Fulfilled);
	
				Fulfilled.prototype._state = 1;
	
				Fulfilled.prototype.fold = function (f, z, c, to) {
					runContinuation3(f, z, this, c, to);
				};
	
				Fulfilled.prototype.when = function (cont) {
					runContinuation1(cont.fulfilled, this, cont.receiver, cont.resolver);
				};
	
				var errorId = 0;
	
				/**
	    * Handler for a rejected promise
	    * @param {*} x rejection reason
	    * @constructor
	    */
				function Rejected(x) {
					Promise.createContext(this);
	
					this.id = ++errorId;
					this.value = x;
					this.handled = false;
					this.reported = false;
	
					this._report();
				}
	
				inherit(Handler, Rejected);
	
				Rejected.prototype._state = -1;
	
				Rejected.prototype.fold = function (f, z, c, to) {
					to.become(this);
				};
	
				Rejected.prototype.when = function (cont) {
					if (typeof cont.rejected === 'function') {
						this._unreport();
					}
					runContinuation1(cont.rejected, this, cont.receiver, cont.resolver);
				};
	
				Rejected.prototype._report = function (context) {
					tasks.afterQueue(new ReportTask(this, context));
				};
	
				Rejected.prototype._unreport = function () {
					if (this.handled) {
						return;
					}
					this.handled = true;
					tasks.afterQueue(new UnreportTask(this));
				};
	
				Rejected.prototype.fail = function (context) {
					this.reported = true;
					emitRejection('unhandledRejection', this);
					Promise.onFatalRejection(this, context === void 0 ? this.context : context);
				};
	
				function ReportTask(rejection, context) {
					this.rejection = rejection;
					this.context = context;
				}
	
				ReportTask.prototype.run = function () {
					if (!this.rejection.handled && !this.rejection.reported) {
						this.rejection.reported = true;
						emitRejection('unhandledRejection', this.rejection) || Promise.onPotentiallyUnhandledRejection(this.rejection, this.context);
					}
				};
	
				function UnreportTask(rejection) {
					this.rejection = rejection;
				}
	
				UnreportTask.prototype.run = function () {
					if (this.rejection.reported) {
						emitRejection('rejectionHandled', this.rejection) || Promise.onPotentiallyUnhandledRejectionHandled(this.rejection);
					}
				};
	
				// Unhandled rejection hooks
				// By default, everything is a noop
	
				Promise.createContext = Promise.enterContext = Promise.exitContext = Promise.onPotentiallyUnhandledRejection = Promise.onPotentiallyUnhandledRejectionHandled = Promise.onFatalRejection = noop;
	
				// Errors and singletons
	
				var foreverPendingHandler = new Handler();
				var foreverPendingPromise = new Promise(Handler, foreverPendingHandler);
	
				function cycle() {
					return new Rejected(new TypeError('Promise cycle'));
				}
	
				// Task runners
	
				/**
	    * Run a single consumer
	    * @constructor
	    */
				function ContinuationTask(continuation, handler) {
					this.continuation = continuation;
					this.handler = handler;
				}
	
				ContinuationTask.prototype.run = function () {
					this.handler.join().when(this.continuation);
				};
	
				/**
	    * Run a queue of progress handlers
	    * @constructor
	    */
				function ProgressTask(value, handler) {
					this.handler = handler;
					this.value = value;
				}
	
				ProgressTask.prototype.run = function () {
					var q = this.handler.consumers;
					if (q === void 0) {
						return;
					}
	
					for (var c, i = 0; i < q.length; ++i) {
						c = q[i];
						runNotify(c.progress, this.value, this.handler, c.receiver, c.resolver);
					}
				};
	
				/**
	    * Assimilate a thenable, sending it's value to resolver
	    * @param {function} then
	    * @param {object|function} thenable
	    * @param {object} resolver
	    * @constructor
	    */
				function AssimilateTask(then, thenable, resolver) {
					this._then = then;
					this.thenable = thenable;
					this.resolver = resolver;
				}
	
				AssimilateTask.prototype.run = function () {
					var h = this.resolver;
					tryAssimilate(this._then, this.thenable, _resolve, _reject, _notify);
	
					function _resolve(x) {
						h.resolve(x);
					}
					function _reject(x) {
						h.reject(x);
					}
					function _notify(x) {
						h.notify(x);
					}
				};
	
				function tryAssimilate(then, thenable, resolve, reject, notify) {
					try {
						then.call(thenable, resolve, reject, notify);
					} catch (e) {
						reject(e);
					}
				}
	
				/**
	    * Fold a handler value with z
	    * @constructor
	    */
				function Fold(f, z, c, to) {
					this.f = f;this.z = z;this.c = c;this.to = to;
					this.resolver = failIfRejected;
					this.receiver = this;
				}
	
				Fold.prototype.fulfilled = function (x) {
					this.f.call(this.c, this.z, x, this.to);
				};
	
				Fold.prototype.rejected = function (x) {
					this.to.reject(x);
				};
	
				Fold.prototype.progress = function (x) {
					this.to.notify(x);
				};
	
				// Other helpers
	
				/**
	    * @param {*} x
	    * @returns {boolean} true iff x is a trusted Promise
	    */
				function isPromise(x) {
					return x instanceof Promise;
				}
	
				/**
	    * Test just enough to rule out primitives, in order to take faster
	    * paths in some code
	    * @param {*} x
	    * @returns {boolean} false iff x is guaranteed *not* to be a thenable
	    */
				function maybeThenable(x) {
					return (typeof x === 'object' || typeof x === 'function') && x !== null;
				}
	
				function runContinuation1(f, h, receiver, next) {
					if (typeof f !== 'function') {
						return next.become(h);
					}
	
					Promise.enterContext(h);
					tryCatchReject(f, h.value, receiver, next);
					Promise.exitContext();
				}
	
				function runContinuation3(f, x, h, receiver, next) {
					if (typeof f !== 'function') {
						return next.become(h);
					}
	
					Promise.enterContext(h);
					tryCatchReject3(f, x, h.value, receiver, next);
					Promise.exitContext();
				}
	
				/**
	    * @deprecated
	    */
				function runNotify(f, x, h, receiver, next) {
					if (typeof f !== 'function') {
						return next.notify(x);
					}
	
					Promise.enterContext(h);
					tryCatchReturn(f, x, receiver, next);
					Promise.exitContext();
				}
	
				function tryCatch2(f, a, b) {
					try {
						return f(a, b);
					} catch (e) {
						return reject(e);
					}
				}
	
				/**
	    * Return f.call(thisArg, x), or if it throws return a rejected promise for
	    * the thrown exception
	    */
				function tryCatchReject(f, x, thisArg, next) {
					try {
						next.become(getHandler(f.call(thisArg, x)));
					} catch (e) {
						next.become(new Rejected(e));
					}
				}
	
				/**
	    * Same as above, but includes the extra argument parameter.
	    */
				function tryCatchReject3(f, x, y, thisArg, next) {
					try {
						f.call(thisArg, x, y, next);
					} catch (e) {
						next.become(new Rejected(e));
					}
				}
	
				/**
	    * @deprecated
	    * Return f.call(thisArg, x), or if it throws, *return* the exception
	    */
				function tryCatchReturn(f, x, thisArg, next) {
					try {
						next.notify(f.call(thisArg, x));
					} catch (e) {
						next.notify(e);
					}
				}
	
				function inherit(Parent, Child) {
					Child.prototype = objectCreate(Parent.prototype);
					Child.prototype.constructor = Child;
				}
	
				function snd(x, y) {
					return y;
				}
	
				function noop() {}
	
				function initEmitRejection() {
					/*global process, self, CustomEvent*/
					if (typeof process !== 'undefined' && process !== null && typeof process.emit === 'function') {
						// Returning falsy here means to call the default
						// onPotentiallyUnhandledRejection API.  This is safe even in
						// browserify since process.emit always returns falsy in browserify:
						return function (type, rejection) {
							return type === 'unhandledRejection' ? process.emit(type, rejection.value, rejection) : process.emit(type, rejection);
						};
					} else if (typeof self !== 'undefined' && typeof CustomEvent === 'function') {
						return (function (noop, self, CustomEvent) {
							var hasCustomEvent = false;
							try {
								var ev = new CustomEvent('unhandledRejection');
								hasCustomEvent = ev instanceof CustomEvent;
							} catch (e) {}
	
							return !hasCustomEvent ? noop : function (type, rejection) {
								var ev = new CustomEvent(type, {
									detail: {
										reason: rejection.value,
										key: rejection
									},
									bubbles: false,
									cancelable: true
								});
	
								return !self.dispatchEvent(ev);
							};
						})(noop, self, CustomEvent);
					}
	
					return noop;
				}
	
				return Promise;
			};
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(7));
	/** @author John Hann */ // https://github.com/defunctzombie/node-process/blob/master/browser.js#L40-L46
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	'use strict';
	
	(function (define) {
		'use strict';
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	
			// Credit to Twisol (https://github.com/Twisol) for suggesting
			// this type of extensible queue + trampoline approach for next-tick conflation.
	
			/**
	   * Async task scheduler
	   * @param {function} async function to schedule a single async function
	   * @constructor
	   */
			function Scheduler(async) {
				this._async = async;
				this._running = false;
	
				this._queue = this;
				this._queueLen = 0;
				this._afterQueue = {};
				this._afterQueueLen = 0;
	
				var self = this;
				this.drain = function () {
					self._drain();
				};
			}
	
			/**
	   * Enqueue a task
	   * @param {{ run:function }} task
	   */
			Scheduler.prototype.enqueue = function (task) {
				this._queue[this._queueLen++] = task;
				this.run();
			};
	
			/**
	   * Enqueue a task to run after the main task queue
	   * @param {{ run:function }} task
	   */
			Scheduler.prototype.afterQueue = function (task) {
				this._afterQueue[this._afterQueueLen++] = task;
				this.run();
			};
	
			Scheduler.prototype.run = function () {
				if (!this._running) {
					this._running = true;
					this._async(this.drain);
				}
			};
	
			/**
	   * Drain the handler queue entirely, and then the after queue
	   */
			Scheduler.prototype._drain = function () {
				var i = 0;
				for (; i < this._queueLen; ++i) {
					this._queue[i].run();
					this._queue[i] = void 0;
				}
	
				this._queueLen = 0;
				this._running = false;
	
				for (i = 0; i < this._afterQueueLen; ++i) {
					this._afterQueue[i].run();
					this._afterQueue[i] = void 0;
				}
	
				this._afterQueueLen = 0;
			};
	
			return Scheduler;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(7));
	/** @author John Hann */

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var rest = __webpack_require__(24);
	var defaultRequest = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rest/interceptor/defaultRequest\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var mime = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rest/interceptor/mime\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var uriTemplateInterceptor = __webpack_require__(33);
	var errorCode = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rest/interceptor/errorCode\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var baseRegistry = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rest/mime/registry\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var registry = baseRegistry.child();
	
	registry.register('text/uri-list', __webpack_require__(34));
	registry.register('application/hal+json', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rest/mime/type/application/hal\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	
	module.exports = rest.wrap(mime, { registry: registry }).wrap(uriTemplateInterceptor).wrap(errorCode).wrap(defaultRequest, { headers: { 'Accept': 'application/hal+json' } });

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(25);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2014 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
	
	'use strict';
	
	(function (define) {
		'use strict';
	
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	
			var rest = __webpack_require__(26),
			    browser = __webpack_require__(28);
	
			rest.setPlatformDefaultClient(browser);
	
			return rest;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(7)
	// Boilerplate for AMD and Node
	);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2014 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
	
	'use strict';
	
	(function (define) {
		'use strict';
	
		var undef;
	
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	
			/**
	   * Plain JS Object containing properties that represent an HTTP request.
	   *
	   * Depending on the capabilities of the underlying client, a request
	   * may be cancelable. If a request may be canceled, the client will add
	   * a canceled flag and cancel function to the request object. Canceling
	   * the request will put the response into an error state.
	   *
	   * @field {string} [method='GET'] HTTP method, commonly GET, POST, PUT, DELETE or HEAD
	   * @field {string|UrlBuilder} [path=''] path template with optional path variables
	   * @field {Object} [params] parameters for the path template and query string
	   * @field {Object} [headers] custom HTTP headers to send, in addition to the clients default headers
	   * @field [entity] the HTTP entity, common for POST or PUT requests
	   * @field {boolean} [canceled] true if the request has been canceled, set by the client
	   * @field {Function} [cancel] cancels the request if invoked, provided by the client
	   * @field {Client} [originator] the client that first handled this request, provided by the interceptor
	   *
	   * @class Request
	   */
	
			/**
	   * Plain JS Object containing properties that represent an HTTP response
	   *
	   * @field {Object} [request] the request object as received by the root client
	   * @field {Object} [raw] the underlying request object, like XmlHttpRequest in a browser
	   * @field {number} [status.code] status code of the response (i.e. 200, 404)
	   * @field {string} [status.text] status phrase of the response
	   * @field {Object] [headers] response headers hash of normalized name, value pairs
	   * @field [entity] the response body
	   *
	   * @class Response
	   */
	
			/**
	   * HTTP client particularly suited for RESTful operations.
	   *
	   * @field {function} wrap wraps this client with a new interceptor returning the wrapped client
	   *
	   * @param {Request} the HTTP request
	   * @returns {ResponsePromise<Response>} a promise the resolves to the HTTP response
	   *
	   * @class Client
	   */
	
			/**
	   * Extended when.js Promises/A+ promise with HTTP specific helpers
	   *q
	   * @method entity promise for the HTTP entity
	   * @method status promise for the HTTP status code
	   * @method headers promise for the HTTP response headers
	   * @method header promise for a specific HTTP response header
	   *
	   * @class ResponsePromise
	   * @extends Promise
	   */
	
			var client, target, platformDefault;
	
			client = __webpack_require__(27);
	
			/**
	   * Make a request with the default client
	   * @param {Request} the HTTP request
	   * @returns {Promise<Response>} a promise the resolves to the HTTP response
	   */
			function defaultClient() {
				return target.apply(undef, arguments);
			}
	
			/**
	   * Change the default client
	   * @param {Client} client the new default client
	   */
			defaultClient.setDefaultClient = function setDefaultClient(client) {
				target = client;
			};
	
			/**
	   * Obtain a direct reference to the current default client
	   * @returns {Client} the default client
	   */
			defaultClient.getDefaultClient = function getDefaultClient() {
				return target;
			};
	
			/**
	   * Reset the default client to the platform default
	   */
			defaultClient.resetDefaultClient = function resetDefaultClient() {
				target = platformDefault;
			};
	
			/**
	   * @private
	   */
			defaultClient.setPlatformDefaultClient = function setPlatformDefaultClient(client) {
				if (platformDefault) {
					throw new Error('Unable to redefine platformDefaultClient');
				}
				target = platformDefault = client;
			};
	
			return client(defaultClient);
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(7)
	// Boilerplate for AMD and Node
	);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2014 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
	
	'use strict';
	
	(function (define) {
		'use strict';
	
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () /* require */{
	
			/**
	   * Add common helper methods to a client impl
	   *
	   * @param {function} impl the client implementation
	   * @param {Client} [target] target of this client, used when wrapping other clients
	   * @returns {Client} the client impl with additional methods
	   */
			return function client(impl, target) {
	
				if (target) {
	
					/**
	     * @returns {Client} the target client
	     */
					impl.skip = function skip() {
						return target;
					};
				}
	
				/**
	    * Allow a client to easily be wrapped by an interceptor
	    *
	    * @param {Interceptor} interceptor the interceptor to wrap this client with
	    * @param [config] configuration for the interceptor
	    * @returns {Client} the newly wrapped client
	    */
				impl.wrap = function wrap(interceptor, config) {
					return interceptor(impl, config);
				};
	
				/**
	    * @deprecated
	    */
				impl.chain = function chain() {
					if (typeof console !== 'undefined') {
						console.log('rest.js: client.chain() is deprecated, use client.wrap() instead');
					}
	
					return impl.wrap.apply(this, arguments);
				};
	
				return impl;
			};
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(7)
	// Boilerplate for AMD and Node
	);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2012-2014 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
	
	'use strict';
	
	(function (define, global) {
		'use strict';
	
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	
			var when, UrlBuilder, normalizeHeaderName, responsePromise, client, headerSplitRE;
	
			when = __webpack_require__(1);
			UrlBuilder = __webpack_require__(29);
			normalizeHeaderName = __webpack_require__(31);
			responsePromise = __webpack_require__(32);
			client = __webpack_require__(27);
	
			// according to the spec, the line break is '\r\n', but doesn't hold true in practice
			headerSplitRE = /[\r|\n]+/;
	
			function parseHeaders(raw) {
				// Note: Set-Cookie will be removed by the browser
				var headers = {};
	
				if (!raw) {
					return headers;
				}
	
				raw.trim().split(headerSplitRE).forEach(function (header) {
					var boundary, name, value;
					boundary = header.indexOf(':');
					name = normalizeHeaderName(header.substring(0, boundary).trim());
					value = header.substring(boundary + 1).trim();
					if (headers[name]) {
						if (Array.isArray(headers[name])) {
							// add to an existing array
							headers[name].push(value);
						} else {
							// convert single value to array
							headers[name] = [headers[name], value];
						}
					} else {
						// new, single value
						headers[name] = value;
					}
				});
	
				return headers;
			}
	
			function safeMixin(target, source) {
				Object.keys(source || {}).forEach(function (prop) {
					// make sure the property already exists as
					// IE 6 will blow up if we add a new prop
					if (source.hasOwnProperty(prop) && prop in target) {
						try {
							target[prop] = source[prop];
						} catch (e) {
							// ignore, expected for some properties at some points in the request lifecycle
						}
					}
				});
	
				return target;
			}
	
			return client(function xhr(request) {
				return responsePromise.promise(function (resolve, reject) {
					/*jshint maxcomplexity:20 */
	
					var client, method, url, headers, entity, headerName, response, XMLHttpRequest;
	
					request = typeof request === 'string' ? { path: request } : request || {};
					response = { request: request };
	
					if (request.canceled) {
						response.error = 'precanceled';
						reject(response);
						return;
					}
	
					XMLHttpRequest = request.engine || global.XMLHttpRequest;
					if (!XMLHttpRequest) {
						reject({ request: request, error: 'xhr-not-available' });
						return;
					}
	
					entity = request.entity;
					request.method = request.method || (entity ? 'POST' : 'GET');
					method = request.method;
					url = new UrlBuilder(request.path || '', request.params).build();
	
					try {
						client = response.raw = new XMLHttpRequest();
	
						// mixin extra request properties before and after opening the request as some properties require being set at different phases of the request
						safeMixin(client, request.mixin);
						client.open(method, url, true);
						safeMixin(client, request.mixin);
	
						headers = request.headers;
						for (headerName in headers) {
							/*jshint forin:false */
							if (headerName === 'Content-Type' && headers[headerName] === 'multipart/form-data') {
								// XMLHttpRequest generates its own Content-Type header with the
								// appropriate multipart boundary when sending multipart/form-data.
								continue;
							}
	
							client.setRequestHeader(headerName, headers[headerName]);
						}
	
						request.canceled = false;
						request.cancel = function cancel() {
							request.canceled = true;
							client.abort();
							reject(response);
						};
	
						client.onreadystatechange = function () /* e */{
							if (request.canceled) {
								return;
							}
							if (client.readyState === (XMLHttpRequest.DONE || 4)) {
								response.status = {
									code: client.status,
									text: client.statusText
								};
								response.headers = parseHeaders(client.getAllResponseHeaders());
								response.entity = client.responseText;
	
								if (response.status.code > 0) {
									// check status code as readystatechange fires before error event
									resolve(response);
								} else {
									// give the error callback a chance to fire before resolving
									// requests for file:// URLs do not have a status code
									setTimeout(function () {
										resolve(response);
									}, 0);
								}
							}
						};
	
						try {
							client.onerror = function () /* e */{
								response.error = 'loaderror';
								reject(response);
							};
						} catch (e) {
							// IE 6 will not support error handling
						}
	
						client.send(entity);
					} catch (e) {
						response.error = 'loaderror';
						reject(response);
					}
				});
			});
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(7), typeof window !== 'undefined' ? window : void 0
	// Boilerplate for AMD and Node
	);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2012-2013 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
	
	'use strict';
	
	(function (define, location) {
		'use strict';
	
		var undef;
	
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	
			var mixin, origin, urlRE, absoluteUrlRE, fullyQualifiedUrlRE;
	
			mixin = __webpack_require__(30);
	
			urlRE = /([a-z][a-z0-9\+\-\.]*:)\/\/([^@]+@)?(([^:\/]+)(:([0-9]+))?)?(\/[^?#]*)?(\?[^#]*)?(#\S*)?/i;
			absoluteUrlRE = /^([a-z][a-z0-9\-\+\.]*:\/\/|\/)/i;
			fullyQualifiedUrlRE = /([a-z][a-z0-9\+\-\.]*:)\/\/([^@]+@)?(([^:\/]+)(:([0-9]+))?)?\//i;
	
			/**
	   * Apply params to the template to create a URL.
	   *
	   * Parameters that are not applied directly to the template, are appended
	   * to the URL as query string parameters.
	   *
	   * @param {string} template the URI template
	   * @param {Object} params parameters to apply to the template
	   * @return {string} the resulting URL
	   */
			function buildUrl(template, params) {
				// internal builder to convert template with params.
				var url, name, queryStringParams, re;
	
				url = template;
				queryStringParams = {};
	
				if (params) {
					for (name in params) {
						/*jshint forin:false */
						re = new RegExp('\\{' + name + '\\}');
						if (re.test(url)) {
							url = url.replace(re, encodeURIComponent(params[name]), 'g');
						} else {
							queryStringParams[name] = params[name];
						}
					}
					for (name in queryStringParams) {
						url += url.indexOf('?') === -1 ? '?' : '&';
						url += encodeURIComponent(name);
						if (queryStringParams[name] !== null && queryStringParams[name] !== undefined) {
							url += '=';
							url += encodeURIComponent(queryStringParams[name]);
						}
					}
				}
				return url;
			}
	
			function startsWith(str, test) {
				return str.indexOf(test) === 0;
			}
	
			/**
	   * Create a new URL Builder
	   *
	   * @param {string|UrlBuilder} template the base template to build from, may be another UrlBuilder
	   * @param {Object} [params] base parameters
	   * @constructor
	   */
			function UrlBuilder(template, params) {
				if (!(this instanceof UrlBuilder)) {
					// invoke as a constructor
					return new UrlBuilder(template, params);
				}
	
				if (template instanceof UrlBuilder) {
					this._template = template.template;
					this._params = mixin({}, this._params, params);
				} else {
					this._template = (template || '').toString();
					this._params = params || {};
				}
			}
	
			UrlBuilder.prototype = {
	
				/**
	    * Create a new UrlBuilder instance that extends the current builder.
	    * The current builder is unmodified.
	    *
	    * @param {string} [template] URL template to append to the current template
	    * @param {Object} [params] params to combine with current params.  New params override existing params
	    * @return {UrlBuilder} the new builder
	    */
				append: function append(template, params) {
					// TODO consider query strings and fragments
					return new UrlBuilder(this._template + template, mixin({}, this._params, params));
				},
	
				/**
	    * Create a new UrlBuilder with a fully qualified URL based on the
	    * window's location or base href and the current templates relative URL.
	    *
	    * Path variables are preserved.
	    *
	    * *Browser only*
	    *
	    * @return {UrlBuilder} the fully qualified URL template
	    */
				fullyQualify: function fullyQualify() {
					if (!location) {
						return this;
					}
					if (this.isFullyQualified()) {
						return this;
					}
	
					var template = this._template;
	
					if (startsWith(template, '//')) {
						template = origin.protocol + template;
					} else if (startsWith(template, '/')) {
						template = origin.origin + template;
					} else if (!this.isAbsolute()) {
						template = origin.origin + origin.pathname.substring(0, origin.pathname.lastIndexOf('/') + 1);
					}
	
					if (template.indexOf('/', 8) === -1) {
						// default the pathname to '/'
						template = template + '/';
					}
	
					return new UrlBuilder(template, this._params);
				},
	
				/**
	    * True if the URL is absolute
	    *
	    * @return {boolean}
	    */
				isAbsolute: function isAbsolute() {
					return absoluteUrlRE.test(this.build());
				},
	
				/**
	    * True if the URL is fully qualified
	    *
	    * @return {boolean}
	    */
				isFullyQualified: function isFullyQualified() {
					return fullyQualifiedUrlRE.test(this.build());
				},
	
				/**
	    * True if the URL is cross origin. The protocol, host and port must not be
	    * the same in order to be cross origin,
	    *
	    * @return {boolean}
	    */
				isCrossOrigin: function isCrossOrigin() {
					if (!origin) {
						return true;
					}
					var url = this.parts();
					return url.protocol !== origin.protocol || url.hostname !== origin.hostname || url.port !== origin.port;
				},
	
				/**
	    * Split a URL into its consituent parts following the naming convention of
	    * 'window.location'. One difference is that the port will contain the
	    * protocol default if not specified.
	    *
	    * @see https://developer.mozilla.org/en-US/docs/DOM/window.location
	    *
	    * @returns {Object} a 'window.location'-like object
	    */
				parts: function parts() {
					/*jshint maxcomplexity:20 */
					var url, parts;
					url = this.fullyQualify().build().match(urlRE);
					parts = {
						href: url[0],
						protocol: url[1],
						host: url[3] || '',
						hostname: url[4] || '',
						port: url[6],
						pathname: url[7] || '',
						search: url[8] || '',
						hash: url[9] || ''
					};
					parts.origin = parts.protocol + '//' + parts.host;
					parts.port = parts.port || (parts.protocol === 'https:' ? '443' : parts.protocol === 'http:' ? '80' : '');
					return parts;
				},
	
				/**
	    * Expand the template replacing path variables with parameters
	    *
	    * @param {Object} [params] params to combine with current params.  New params override existing params
	    * @return {string} the expanded URL
	    */
				build: function build(params) {
					return buildUrl(this._template, mixin({}, this._params, params));
				},
	
				/**
	    * @see build
	    */
				toString: function toString() {
					return this.build();
				}
	
			};
	
			origin = location ? new UrlBuilder(location.href).parts() : undef;
	
			return UrlBuilder;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(7), typeof window !== 'undefined' ? window.location : void 0
	// Boilerplate for AMD and Node
	);

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2012-2013 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
	
	'use strict';
	
	(function (define) {
		'use strict';
	
		// derived from dojo.mixin
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () /* require */{
	
			var empty = {};
	
			/**
	   * Mix the properties from the source object into the destination object.
	   * When the same property occurs in more then one object, the right most
	   * value wins.
	   *
	   * @param {Object} dest the object to copy properties to
	   * @param {Object} sources the objects to copy properties from.  May be 1 to N arguments, but not an Array.
	   * @return {Object} the destination object
	   */
			function mixin(dest /*, sources... */) {
				var i, l, source, name;
	
				if (!dest) {
					dest = {};
				}
				for (i = 1, l = arguments.length; i < l; i += 1) {
					source = arguments[i];
					for (name in source) {
						if (!(name in dest) || dest[name] !== source[name] && (!(name in empty) || empty[name] !== source[name])) {
							dest[name] = source[name];
						}
					}
				}
	
				return dest; // Object
			}
	
			return mixin;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(7)
	// Boilerplate for AMD and Node
	);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2012 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
	
	'use strict';
	
	(function (define) {
		'use strict';
	
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () /* require */{
	
			/**
	   * Normalize HTTP header names using the pseudo camel case.
	   *
	   * For example:
	   *   content-type         -> Content-Type
	   *   accepts              -> Accepts
	   *   x-custom-header-name -> X-Custom-Header-Name
	   *
	   * @param {string} name the raw header name
	   * @return {string} the normalized header name
	   */
			function normalizeHeaderName(name) {
				return name.toLowerCase().split('-').map(function (chunk) {
					return chunk.charAt(0).toUpperCase() + chunk.slice(1);
				}).join('-');
			}
	
			return normalizeHeaderName;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(7)
	// Boilerplate for AMD and Node
	);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Copyright 2014-2015 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
	
	'use strict';
	
	(function (define) {
		'use strict';
	
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	
			var when = __webpack_require__(1),
			    normalizeHeaderName = __webpack_require__(31);
	
			function property(promise, name) {
				return promise.then(function (value) {
					return value && value[name];
				}, function (value) {
					return when.reject(value && value[name]);
				});
			}
	
			/**
	   * Obtain the response entity
	   *
	   * @returns {Promise} for the response entity
	   */
			function entity() {
				/*jshint validthis:true */
				return property(this, 'entity');
			}
	
			/**
	   * Obtain the response status
	   *
	   * @returns {Promise} for the response status
	   */
			function status() {
				/*jshint validthis:true */
				return property(property(this, 'status'), 'code');
			}
	
			/**
	   * Obtain the response headers map
	   *
	   * @returns {Promise} for the response headers map
	   */
			function headers() {
				/*jshint validthis:true */
				return property(this, 'headers');
			}
	
			/**
	   * Obtain a specific response header
	   *
	   * @param {String} headerName the header to retrieve
	   * @returns {Promise} for the response header's value
	   */
			function header(headerName) {
				/*jshint validthis:true */
				headerName = normalizeHeaderName(headerName);
				return property(this.headers(), headerName);
			}
	
			/**
	   * Follow a related resource
	   *
	   * The relationship to follow may be define as a plain string, an object
	   * with the rel and params, or an array containing one or more entries
	   * with the previous forms.
	   *
	   * Examples:
	   *   response.follow('next')
	   *
	   *   response.follow({ rel: 'next', params: { pageSize: 100 } })
	   *
	   *   response.follow([
	   *       { rel: 'items', params: { projection: 'noImages' } },
	   *       'search',
	   *       { rel: 'findByGalleryIsNull', params: { projection: 'noImages' } },
	   *       'items'
	   *   ])
	   *
	   * @param {String|Object|Array} rels one, or more, relationships to follow
	   * @returns ResponsePromise<Response> related resource
	   */
			function follow(rels) {
				/*jshint validthis:true */
				rels = [].concat(rels);
				return make(when.reduce(rels, function (response, rel) {
					if (typeof rel === 'string') {
						rel = { rel: rel };
					}
					if (typeof response.entity.clientFor !== 'function') {
						throw new Error('Hypermedia response expected');
					}
					var client = response.entity.clientFor(rel.rel);
					return client({ params: rel.params });
				}, this));
			}
	
			/**
	   * Wrap a Promise as an ResponsePromise
	   *
	   * @param {Promise<Response>} promise the promise for an HTTP Response
	   * @returns {ResponsePromise<Response>} wrapped promise for Response with additional helper methods
	   */
			function make(promise) {
				promise.status = status;
				promise.headers = headers;
				promise.header = header;
				promise.entity = entity;
				promise.follow = follow;
				return promise;
			}
	
			function responsePromise() {
				return make(when.apply(when, arguments));
			}
	
			responsePromise.make = make;
			responsePromise.reject = function (val) {
				return make(when.reject(val));
			};
			responsePromise.promise = function (func) {
				return make(when.promise(func));
			};
	
			return responsePromise;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(7)
	// Boilerplate for AMD and Node
	);

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
		'use strict';
	
		var interceptor = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rest/interceptor\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
		return interceptor({
			request: function request(_request /*, config, meta */) {
				/* If the URI is a URI Template per RFC 6570 (http://tools.ietf.org/html/rfc6570), trim out the template part */
				if (_request.path.indexOf('{') === -1) {
					return _request;
				} else {
					_request.path = _request.path.split('{')[0];
					return _request;
				}
			}
		});
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
		'use strict';
	
		/* Convert a single or array of resources into "URI1\nURI2\nURI3..." */
		return {
			read: function read(str /*, opts */) {
				return str.split('\n');
			},
			write: function write(obj /*, opts */) {
				// If this is an Array, extract the self URI and then join using a newline
				if (obj instanceof Array) {
					return obj.map(function (resource) {
						return resource._links.self.href;
					}).join('\n');
				} else {
					// otherwise, just return the self URI
					return obj._links.self.href;
				}
			}
		};
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map