'use strict';

var lable = document.getElementById('lable');
var submit = document.getElementById('submit');
var emptyArray = [];
var reset = document.getElementById('reset');
var todoItems = document.getElementById('todoItems');
todoItems = emptyArray;

var logList = function() {
	console.log(lable.value);
}

submit.addEventListener('click', logList);

var pushToArray = function() {
	emptyArray.push(lable.value);
	console.log(emptyArray);
}

submit.addEventListener('click', pushToArray);

var render = function() {
	emptyArray = [];
	todoItems = [];
	console.log(todoItems);
	lable.value = '';
}

reset.addEventListener('click', render);
