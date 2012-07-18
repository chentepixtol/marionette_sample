define(["backbone"], function(Backbone){

  var Module = {
    loaded: false,
    load: function(){
      if( this.loaded ) return;
      
      var Item = new Backbone.Model.extend({

      });

      Module = _.extend(this, {
        "loaded": true,
        "Item": Item
      });

      console.log("load models for MainModule");

    }
  }

  return Module;

});