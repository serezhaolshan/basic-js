const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

	let counter = 0;
	for (let subArray of matrix) {
		for (let item of subArray) {
			if (item === "^^") counter++;
		}
	}

	return counter;
};
