define(["marionette", "text!modules/main/templates.twig.html"], function(Marionette, text){

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

  return {
    "MenuView": MenuView,
    "ContentView": ContentView
  };

});