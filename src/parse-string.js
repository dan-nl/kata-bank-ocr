'use strict';

/**
 * return an array of string patterns based on the str provided.
 * each array element is based on splitting the provided str on each new line
 *
 * @param {string} str
 * @returns {Array}
 */
module.exports = function parseString( str ) {
  return str.split( /\n/ );
};
