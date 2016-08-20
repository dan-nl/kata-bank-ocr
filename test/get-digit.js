'use strict';

var expect = require( 'chai' ).expect;
var getDigit = require( '../src/get-digit' );

describe( 'getDigit( entry, col_offset )', function () {
  it( 'should return a number, which is derived from the string of patterns provided in the entry array', function () {
    var entry = [
      '    _  _     _  _  _  _  _ ',
      '  | _| _||_||_ |_   ||_||_|',
      '  ||_  _|  | _||_|  ||_| _|',
      '                           '
    ];

    expect( getDigit( entry, 0 ) ).to.equal( 1 );
    expect( getDigit( entry, 3 ) ).to.equal( 2 );
  } );
} );
