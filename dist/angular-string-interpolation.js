(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("angular-string-interpolation", [], factory);
	else if(typeof exports === 'object')
		exports["angular-string-interpolation"] = factory();
	else
		root["angular-string-interpolation"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
	
	var _interpolation = __webpack_require__(1);
	
	var _interpolation2 = __webpack_require__(2);
	
	var _interpolation3 = __webpack_require__(3);
	
	angular.module('bc.AngularStringInterpolation', []).directive('bcInterpolate', _interpolation2.InterpolationDirective).controller('InterpolationController', _interpolation3.InterpolationController).service('bcInterpolationService', _interpolation.InterpolationService);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var InterpolationService = exports.InterpolationService = function () {
	    function InterpolationService() {
	        'ngInject';
	
	        _classCallCheck(this, InterpolationService);
	    }
	
	    /**
	     * Interpolate text with items from an array
	     *
	     * @param {String} text Text that contains placeholders
	     * @return {String} text Interpolated text
	     */
	
	
	    _createClass(InterpolationService, [{
	        key: 'interpolate',
	        value: function interpolate(text, array) {
	            // Define a regex to look for our custom tag `${}`
	            var regex = /\${(.*?)}/g;
	            // Cache the array length
	            var length = array.length;
	
	            // Loop through the array of replacement items
	            for (var i = 0; i < length; i += 1) {
	                // Replace each matched item
	                text = text.replace(regex, convert);
	            }
	
	            // Custom conversion function
	            function convert(str, p1) {
	                // Grab the content of the match (should be an index number)
	                // Return the array item with the found index
	                return array[p1];
	            }
	
	            return text;
	        }
	    }]);
	
	    return InterpolationService;
	}();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.InterpolationDirective = InterpolationDirective;
	
	var _interpolation = __webpack_require__(3);
	
	function InterpolationDirective() {
	    'ngInject';
	
	    var directive = {
	        restrict: 'EA',
	        replace: true,
	        scope: {},
	        bindToController: {
	            bcString: '@',
	            bcArray: '='
	        },
	        template: '<span data-ng-bind="vm.string"></span>',
	        controller: _interpolation.InterpolationController,
	        controllerAs: 'vm'
	    };
	
	    return directive;
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var InterpolationController = exports.InterpolationController = function () {
	    InterpolationController.$inject = ["$scope", "bcInterpolationService"];
	    function InterpolationController($scope, bcInterpolationService) {
	        'ngInject';
	
	        _classCallCheck(this, InterpolationController);
	
	        this.$scope = $scope;
	        this.bcInterpolationService = bcInterpolationService;
	
	        this._activate();
	    }
	
	    _createClass(InterpolationController, [{
	        key: '_activate',
	        value: function _activate() {
	            var _this = this;
	
	            // Interpolated the string and expose to the DOM
	            this.string = this.bcInterpolationService.interpolate(this.bcString, this.bcArray);
	
	            // This watch is needed since the items being passed in may not exist yet (async data).
	            // This also allows us to dynamically re-interpolate if any of the array items change.
	            this.$scope.$watch('vm.bcArray', function (newValue) {
	                _this.string = _this.bcInterpolationService.interpolate(_this.bcString, _this.bcArray);
	            });
	        }
	    }]);
	
	    return InterpolationController;
	}();

/***/ }
/******/ ])
});
;
//# sourceMappingURL=angular-string-interpolation.js.map