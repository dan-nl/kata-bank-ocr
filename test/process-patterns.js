'use strict';

var expect = require( 'chai' ).expect;
var processPatterns = require( '../src/process-patterns' );

describe( 'processPatterns( patterns )', function () {
  it( 'should return an array of strings where each string contains a series of 9 numbers representing an account nr,', function () {
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

    expect( processPatterns( patterns ) ).to.deep.equal( [ '000000000', '111111111' ] );
  } );
} );