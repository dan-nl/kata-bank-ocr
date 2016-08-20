'use strict';

var digits = {
  ' _ | ||_|': 0,
  '     |  |': 1,
  ' _  _||_ ': 2,
  ' _  _| _|': 3,
  '   |_|  |': 4,
  ' _ |_  _|': 5,
  ' _ |_ |_|': 6,
  ' _   |  |': 7,
  ' _ |_||_|': 8,
  ' _ |_| _|': 9
};

/**
 * return a number, which is derived from the string of patterns provided in the entry array
 *
 * @param {Array} entry
 * @param {number} col_offset
 * @returns {number}
 */
module.exports = function getDigitPattern( entry, col_offset ) {
  var i;
  var pattern = '';

  // cycle over the rows
  // each digit column is made up of the first 3 array elements, rows, of the entry
  // each entry should contain 4 array elements
  for ( i = 0; i < 3; i++ ) {
    // each digit uses 3 characters of each row
    pattern += entry[ i ].substr( col_offset, 3 );
  }

  return digits[ pattern ];
};
