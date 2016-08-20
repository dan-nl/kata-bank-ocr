'use strict';

var fs = require( 'fs' );

module.exports = function readFile( filename_path, callback ) {
  fs.readFile(
    filename_path,
    function ( err, data ) {
      if ( err ) {
        throw err;
      }

      if ( callback instanceof Function ) {
        callback( data );
      }
    }
  );
};
