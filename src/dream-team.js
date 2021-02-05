const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if (!Array.isArray(members)) return false;
	else return members.filter(member => typeof member === "string")
		.map(initial => initial.trim().charAt(0).toUpperCase())
		.sort()
		.join("");
};

