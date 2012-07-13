require.config( {
  paths:{
    underscore: 'vendor/underscore',
    backbone: 'vendor/backbone',
    marionette: 'vendor/backbone.marionette'
  }
} );

require([ "jquery", "underscore", "backbone", "marionette", "vendor/twig", "app", "modules/main/module"], 
  function ( $, _, Backbone, Marionette, Twig, App, MainModule) {
    $( function () {
      console.log("load scripts");
      App.start();

      App.menuRegion.show(new MainModule.Views.MenuView());
      App.contentRegion.show(new MainModule.Views.ContentView());

    });
});