'use strict';

var getDigit = require( './get-digit' );

/**
 * return a string of 9 numbers representing an account nr,
 * extracted from an array of string patterns, which represent a single account nr entry
 *
 * @param {Array} entry
 * @returns {string}
 */
module.exports = function parseEntry( entry ) {
  var account_nr = '';
  var i;

  for ( i = 0; i < entry[ 0 ].length; i += 3 ) {
    account_nr += getDigit( entry, i );
  }

  return account_nr;
};
