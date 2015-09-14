(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var lable = document.getElementById('lable');
var submit = document.getElementById('submit');
var emptyArray = [];
var reset = document.getElementById('reset');
var todoItems = document.getElementById('todoItems');
todoItems = emptyArray;

var logList = function logList() {
	console.log(lable.value);
};

submit.addEventListener('click', logList);

var pushToArray = function pushToArray() {
	emptyArray.push(lable.value);
	console.log(emptyArray);
};

submit.addEventListener('click', pushToArray);

var render = function render() {
	emptyArray = [];
	todoItems = [];
	console.log(todoItems);
	lable.value = '';
};

reset.addEventListener('click', render);

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map