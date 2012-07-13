define(["marionette"], function(Marionette){

  var app = new Marionette.Application();

  app.addInitializer(function(options){
    
    app.addRegions({
      menuRegion: "#menu",
      contentRegion: "#content"
    });

    console.log("Initialize");
  });

  return app;

});