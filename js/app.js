define(["marionette", "vendor/twig"], function(Marionette, twig){

  var app = new Marionette.Application();

  app.addInitializer(function(options){

    console.log(twig);

    Marionette.TemplateCache.get = function(templateId){
      return twig({
        data: $(templateId).text()
      });
    };
    
    app.addRegions({
      menuRegion: "#menu",
      contentRegion: "#content"
    });

    console.log("Initialize");
  });

  return app;

});