require.config( {
  paths:{
    underscore:'vendor/underscore',
    backbone:'vendor/backbone',
    marionette:'vendor/backbone.marionette'
  }
} );

require([ "jquery", "underscore", "backbone", "marionette" ], 
  function ( $, _, Backbone, Marionette ) {
    $( function () {
      console.log("load scripts");
    });
});