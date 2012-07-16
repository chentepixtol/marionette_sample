define(["marionette"], function(Marionette){

  var app = new Marionette.Application();

  app.addInitializer(function(options){

    var templates = {};
    Marionette.TemplateCache.get = function(templateElem){

      var templateId = templateElem.selector;
      if( !_.has(templates, templateId) ){
        var template = function(data){
          return twig({
            data: templateElem.html()
          }).render(data);
        };
        templates[templateId] = template;
      }

      return templates[templateId];
    };
    
    app.addRegions({
      menuRegion: "#menu",
      contentRegion: "#content"
    });

    console.log("Initialize");
  });

  return app;

});