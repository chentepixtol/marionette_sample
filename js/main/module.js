define(["main/views", "main/models", "main/collections"], function(Views, Models, Collections){
 
  var Module = {
    loaded: false,
    init: function(){

      if( this.loaded ) return;
      Views.init();
      Models.init();
      Collections.init();
      
      Module.Views = Views;	
      Module.Models = Models;	
      Module.Collections = Collections;	
      Module.loaded = true;	

      console.log("load MainModule");
    }
  };

  return Module;

});
