define(["marionette", 
        "main/models", 
        "main/collections", 
        "text!main/templates.twig.html"
      ], function(Marionette, Models, Collections, text){

  var Module = {
    loaded: false,
    load: function(){
      if( this.loaded ) return;
      Collections.load();
      Models.load();

      
      var templates = $(text);

      var MenuView = Marionette.ItemView.extend({
        template: templates.filter("#menu-template"),
        serializeData: function(){
          return {
            myVar: "Math.Pi"  
          }
        }
      });

      var ContentView = Marionette.ItemView.extend({
        template: templates.filter("#content-template"),
        serializeData: function(){
          return {
            myVar: "3.1416"   
          }
        }
      });

      Module = _.extend(this, {
        "loaded": true,
        "MenuView": MenuView,
        "ContentView": ContentView
      });

      console.log("load views for MainModule");

    }
  }

  return Module;

});