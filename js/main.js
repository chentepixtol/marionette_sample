require.config( {
  paths:{
    underscore: 'vendor/underscore',
    backbone: 'vendor/backbone',
    marionette: 'vendor/backbone.marionette'
  }
} );

require([ "jquery", "underscore", "backbone", "marionette", "app", "modules/main/module"], 
  function ( $, _, Backbone, Marionette, App, MainModule) {
    $( function () {
      console.log("load scripts");
      App.start();

      App.menuRegion.show(new MainModule.Views.MenuView());
      App.contentRegion.show(new MainModule.Views.ContentView());

    });
});