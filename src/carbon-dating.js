const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {

  if (typeof sampleActivity != 'string' || isNaN(parseFloat(sampleActivity)) ) return false;
	
	let sample = parseFloat(sampleActivity), carbonTime = 0;
	if ( sample > 15 || sample <= 0 ) return false;

	carbonTime = Math.log2( sample / MODERN_ACTIVITY ) * HALF_LIFE_PERIOD * (-1);

	return Math.ceil( carbonTime );
};
