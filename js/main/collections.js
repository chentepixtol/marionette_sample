define(["backbone", "main/models"], function(Backbone, Models){

  var Module = {
    loaded: false,
    load: function(){
      if( this.loaded ) return;
      Models.load();
      
      var Items = new Backbone.Collection.extend({
        model: Models.Item
      });

      Module = _.extend(this, {
        "loaded": true,
        "Items": Items
      });

      console.log("load collections for MainModule");

    }
  }

  return Module;

});