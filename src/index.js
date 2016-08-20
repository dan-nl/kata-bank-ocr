'use strict';

var path = require( 'path' );
var readFile = require( './read-file' );
var parsePatterns = require( './parse-string' );
var processPatterns = require( './process-patterns' );

readFile( path.join( __dirname, '../data/use-case-01.txt' ), function ( data ) {
  console.log( processPatterns( parsePatterns( data.toString() ) ) );
} );
