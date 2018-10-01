//connect click or buttons - get refrence to html button

var button = document.getElementById("generate"); 

//run funtion on button click - return

button.onclick = function generate () {
    
    
// create var to hold random number
    
var randomNum = Math.floor(Math.random()*3) 

//random number htmp element

var el =  document.getElementById("numberholder")  ;   

    el.innerHTML = randomNum;
    
    if (randomNum == 0){
        
        console.log("sketch 1");
        
        } else if (randomNum == 1 ){
        
        console.log("sketch 2");
            
    } else {
        
      console.log("sketch 3");  
        
    }
    

}