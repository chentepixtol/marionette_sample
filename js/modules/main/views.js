define(["marionette"], function(Marionette){

  MenuView = Marionette.ItemView.extend({
    template: "#menu-template"
  });

  ContentView = Marionette.ItemView.extend({
    template: "#content-template"
  });

  return {
    "MenuView": MenuView,
    "ContentView": ContentView
  };

});