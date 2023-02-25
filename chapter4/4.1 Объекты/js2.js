"use strict"

function isEmpty(obj) {
	for(let key in obj){
		return true;
	}
	return false;
}

let entity = {};

alert(isEmpty(entity));

entity["8:30"] = "get up";

alert(isEmpty(entity));