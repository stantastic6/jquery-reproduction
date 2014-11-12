var jQuery = function(selector) {
 
  if (this instanceof jQuery) { //'this' represents the window
     this.elements = document.querySelectorAll(selector); 
  }else{
    return new jQuery(selector);
  }
};

jQuery.prototype.css = function(){
  
  if (arguments.length == 0) {
    return null;
  }else if (arguments.length == 1) {
    if (typeof arguments === "object") {
      for(property in arguments[0]){
        
        for (var i = 0; i < this.elements.length; i++) {
          this.elements[i].style[property] = arguments[0][property];
        }
      }
    }
  }else if (arguments.length == 2) {
    var property = arguments[0];
    var value = arguments[1];

    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].style[property] = value;
    }
  }
  
  return this;
};

jQuery.prototype.html = function(){

  if (arguments.length == 0){
    return this.elements[0].innerHTML;
  }else{
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].innerHTML = arguments[0];
    }
  }

  return this;
}

jQuery.prototype.attr = function(){
  
  if (arguments.length == 0) {
    return null;
  }else if (arguments.length == 1) {
    return this.elements[0].getAttribute(arguments[0]);
  }else if (arguments.length == 2) {
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].setAttribute(arguments[0], arguments[1])
    }
  }
  
  return this;
}

jQuery.each = function(obj, operation){
  
  if(obj.constructor === Array){

      for (var i = 0; i < obj.length; i++) {
        operation(i, obj[i]);
   
    }
  }else if (obj.constructor === Object) {
    
      for(var property in obj){
        
        if(obj.hasOwnProperty(property)){
          operation(property, obj[property]);
        }
      }
  }
}    

window.$ = jQuery;