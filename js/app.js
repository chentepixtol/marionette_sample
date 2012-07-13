define(["marionette"], function(Marionette){

  var app = new Marionette.Application();

  app.addInitializer(function(options){

    Marionette.TemplateCache.get = function(templateId){
      return function(data){
        return twig({
          data: $(templateId).text()
        }).render(data);
      };
    };
    
    app.addRegions({
      menuRegion: "#menu",
      contentRegion: "#content"
    });

    console.log("Initialize");
  });

  return app;

});