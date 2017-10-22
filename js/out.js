/******/ (function(modules) { // webpackBootstrap
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


$(function () {

    // --- Load more button ---

    var button = $('button');
    var gallery2 = $('.gallery2');

    button.on('click', function () {
        if (gallery2.hasClass('display-none')) {
            gallery2.toggleClass('display-none');
            button.text('Hide');
        } else {
            gallery2.toggleClass('display-none');
            button.text('Load more');
        }
    });

    // --- Astronomy Picture of the day ---

    var apodUrl = 'https://api.nasa.gov/planetary/apod?api_key=XNBvklQQlg62IV2QXvch6CD0QDB3p9UP0ut9Gt4J';
    var header = $('.header');
    var title = header.find('h3');
    var date = header.find('h4');

    $.ajax({
        method: 'GET',
        url: apodUrl
    }).done(function (apod) {
        console.log('Dane zostały wczytane');
        header.css({
            background: 'url(\'' + apod.hdurl + '\')',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        });
        title.text('' + apod.title);
        date.text('' + apod.date);
    }).fail(function (error) {
        console.log('Dane nie zostały wczytane!');
    });

    // --- Mars rover photos ---

    var marsUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=XNBvklQQlg62IV2QXvch6CD0QDB3p9UP0ut9Gt4J';

    var pictures = $('.picture');

    $.ajax({
        method: 'GET',
        url: marsUrl
    }).done(function (mars) {
        console.log('Dane zostały wczytane');
        for (var i = 0; i < pictures.length; i++) {
            pictures.eq(i).attr('src', '' + mars.photos[i].img_src);
        };
    }).fail(function (error) {
        console.log('Dane nie zostały wczytane!');
    });
});

/***/ })
/******/ ]);