var NEWS = new newsClass()
function newsClass(){

  this.initialize  = function(){
    debugger
    alert('initialize newsClass')

  }

  this.changeLanguage = function(language){
    LANGUAGE.changeLanguage(language)
    this.locker(data);
  }

  this.locker = function(){

  }
  this.updateContent = function(){
    this.changeLanguage()
    CONFIG.locations.locations.forEach(element => {
        document.getElementById('carouselExampleControls').innerHTML += element.address;
        
    });
    
  }

  this.highlightSelectedLanguage = function(){
    
  }
  this.initialize()
}