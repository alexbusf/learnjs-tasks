"use strict"

alert( null || 2 && 3 || 4 );; // 3
/*
	приоритет у && поэтому он выполнится в самом начале
	3 так как в операторе 2 && 3 когда все значения верны выводится последнее
*/