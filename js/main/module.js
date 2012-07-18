define(["main/views", "main/models", "main/collections"], function(Views, Models, Collections){
 
  var Module = {
    loaded: false,
    load: function(){

      if( this.loaded ) return;
      Views.load();
      Models.load();
      Collections.load();
      
      Module.Views = Views;	
      Module.Models = Models;	
      Module.Collections = Collections;	
      Module.loaded = true;	

      console.log("load MainModule");
    }
  };

  return Module;

});