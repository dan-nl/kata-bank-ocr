'use strict';

var parseEntry = require( './parse-entry' );

/**
 * should return an array of strings
 * where each string contains a series of 9 numbers representing an account nr,
 *
 * @param {Array} patterns
 * @returns {Array}
 */
module.exports = function processPatterns( patterns ) {
  var account_nrs = [];

  patterns.reduce(
    function ( entry, value, index, array ) {
      if ( index === array.length - 1 ) {
        account_nrs.push( parseEntry( entry ) );
      }

      if ( entry.length === 4 ) {
        account_nrs.push( parseEntry( entry ) );
        entry = [];
      }

      entry.push( value );
      return entry;
    },
    []
  );

  return account_nrs;
};
