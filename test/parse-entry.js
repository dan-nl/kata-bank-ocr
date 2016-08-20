'use strict';

var expect = require( 'chai' ).expect;
var parseEntry = require( '../src/parse-entry' );

describe( 'parseEntry( entry )', function () {
  it( 'should return a string of 9 numbers representing an account nr, extracted from an array of string patterns, which represent a single account nr entry', function () {
    var entry =
      [ ' _  _  _  _  _  _  _  _  _ ',
        '| || || || || || || || || |',
        '|_||_||_||_||_||_||_||_||_|',
        '                           ' ];

    expect( parseEntry( entry ) ).to.equal( '000000000' );
  } );
} );
