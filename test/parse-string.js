'use strict';

var expect = require( 'chai' ).expect;
var parseString = require( '../src/parse-string' );

describe( 'parseString( str )', function () {
  it( 'should return an array of string patterns based on the str provided. each array element is based on splitting the provided str on each new line', function () {
    var str =
      ' _  _  _  _  _  _  _  _  _ \n' +
      '| || || || || || || || || |\n' +
      '|_||_||_||_||_||_||_||_||_|\n' +
      '                           \n' +
      '                           \n' +
      '  |  |  |  |  |  |  |  |  |\n' +
      '  |  |  |  |  |  |  |  |  |\n' +
      '                           ';

    var patterns =
      [ ' _  _  _  _  _  _  _  _  _ ',
        '| || || || || || || || || |',
        '|_||_||_||_||_||_||_||_||_|',
        '                           ',
        '                           ',
        '  |  |  |  |  |  |  |  |  |',
        '  |  |  |  |  |  |  |  |  |',
        '                           '
      ];

    expect( parseString( str ) ).to.deep.equal( patterns );
  } );
} );
