function setup() {
  createCanvas(windowWidth, windowHeight);
    frameRate(20);
//    loop();
}

function draw() {   
    
    if (keyIsDown(LEFT_ARROW)) {
        
        loopOne();
        
    }
     else if (keyIsDown(RIGHT_ARROW)) {
    loopTwo();}
    
    
    else if (keyIsDown(DOWN_ARROW)) {
    loopThree ();}
    
     
//var button = document.getElementById("generate"); 
//button.onclick = function generate () {   
//var randomNum = Math.floor(Math.random()*3) 
//var el =  document.getElementById("numberholder")  ;   
//
//el.innerHTML = randomNum;
//    
//    if (randomNum == 0){
//
//     background(55, 140, 140);
//    var ang1 = 100*sin(0.02*frameCount+10);
//    var tx =  60 * sin(0.03*frameCount+4);
//    var size1 = 200 * cos(0.01*frameCount+60);
//
//    var ang2 = PI * tan(0.01*frameCount+20);
//    var tx2 =  20 * sin(0.01*frameCount+20);
//    var size2 = 50 * tan(0.01*frameCount);
//
//    
//    translate(50, 200);
//        for(var i = 0; i<5; i++){
//            fill("#123456");
//            stroke(55, 100, 100);
//            push();
//            rotate(ang1 + PI *i+5 );
//            translate(tx, tx);
//            rect(0,0, size1/5, size1);            
//                for(var y = 0; y<10; y++){
//                    push();
//                    fill(255,255,255,100);
//                    translate (tx2, 0);
//                    rotate(ang2/TWO_PI * y/5);
//                    ellipse(tx2, 0, size2/2, size2);
//                    pop();
//                }
//            
//            pop();          
//        } 
//    
//     translate(width/4, height/8);
//        for(var i = 0; i<5; i++){
//            fill("#123456");
//            stroke(55, 100, 100);
//            push();
//            rotate(ang1 + PI *i+5 );
//            translate(tx, tx);
//            rect(0,0, size1/5, size1);            
//                for(var y = 0; y<10; y++){
//                    push();
//                    fill(255,255,255,100);
//                    translate (tx2, 0);
//                    rotate(ang2/TWO_PI * y/5);
//                    ellipse(tx2, 0, size2/2, size2);
//                    pop();
//                }
//            
//            pop();          
//        } 
//    
//     translate(width/6, height/6);
//        for(var i = 0; i<5; i++){
//            fill("#123456");
//            stroke(55, 100, 100);
//            push();
//            rotate(ang1 + PI *i+5 );
//            translate(tx, tx);
//            rect(0,0, size1/5, size1);            
//                for(var y = 0; y<10; y++){
//                    push();
//                    fill(255,255,255,100);
//                    translate (tx2, 0);
//                    rotate(ang2/TWO_PI * y/5);
//                    ellipse(tx2, 0, size2/2, size2);
//                    pop();
//                }
//            
//            pop();          
//        } 
//     
//     translate(width/8, height/8);
//        for(var i = 0; i<5; i++){
//            fill("#123456");
//            stroke(55, 100, 100);
//            push();
//            rotate(ang1 + PI *i+5 );
//            translate(tx, tx);
//            rect(0,0, size1/5, size1);            
//                for(var y = 0; y<10; y++){
//                    push();
//                    fill(255,255,255,100);
//                    translate (tx2, 0);
//                    rotate(ang2/TWO_PI * y/5);
//                    ellipse(tx2, 0, size2/2, size2);
//                    pop();
//                }
//            
//            pop();          
//        }   
//        
//        } else if (randomNum == 1 ){
//        
//       background(102, 72, 122);
//    var ang3 = 100*sin(0.02*frameCount+10);
//    var tx3 =  60 * sin(0.03*frameCount+4);
//    var size3 = 200 * cos(0.01*frameCount+60);
//
//    var ang4 = PI * tan(0.01*frameCount+20);
//    var tx4 =  20 * sin(0.01*frameCount+20);
//    var size4 = 50 * tan(0.01*frameCount);
//
//    
//    translate(width/2, height/2);
//        for(var i = 0; i<5; i++){
//            fill(91, 197, 209);
////            stroke(55, 20, 100);
//            push();
//            rotate(ang3 + TWO_PI *i+5 );
//            translate(tx3, tx3);
//            triangle(tx3*10,tx3/10, size3/4, size3/4,5,50);            
//                for(var y = 0; y<10; y++){
//                    push();
//                    fill(209, 96, 91,50);
//                    stroke(0,0,0,255);
//                    translate (tx4, 0);
//                    rotate(ang4/TWO_PI * y/5);
//                    quad(tx4, 0, size4/2, size4, 200, 200, tx4/2, tx4+100);
//                    pop();
//                }
//            
//            pop();          
//        } 
//            
//    } else  if (randomNum == 2) {
//
//      background(110, 127, 114);
//    var ang5 = 20*noise(0.02*frameCount+10);
//    var tx5=  20*noise(0.03*frameCount+4);
//    var size5 = 20*noise(0.01*frameCount+60);
//
//    var ang6 = PI * cos(0.01*frameCount+20);
//    var tx6 =  20 * sin(0.01*frameCount+20);
//    var size6 = 50 * cos(0.01*frameCount);
//
//    
//    translate(width/2, height/2);
//        for(var c = 0; c<5; c++){
//            fill(237, 233, 208);
//            noStroke();
//            push();
//            rotate(ang5 + TWO_PI *c+5 );
//            translate(tx5, tx5);
//            ellipse(tx5*10,tx5/10, size5*40, size5*40);            
//                for(var v= 0; v<10; v++){
//                    push();
//                    fill(209, 96, 91,100);
//                    stroke(0,0,0,255);
//                    translate (tx6, 0);
//                    rotate(ang6/QUARTER_PI * v*5);
//                    quad(tx6*100, 200, size6*2, size6/10, 400, 200, tx6/2, tx6+100);
//                    pop();
//                }
//            
//            pop();          
//        }         
//        
//        
//    }
//    
//
//}
    

    
}

//function keyTyped() {
//  if (key === '1') {
//    loopOne ();
//  } else if (key === '2') {
//    loopTwo();
//  } else if (key === '3') {
//    loopThree();
//  }
//}
function loopOne (){
        background(55, 140, 140);
    //sin - cos - tan - noise  
    //PI - circles  - PI   HALF_PI  QUARTER_PI

    var ang1 = 100*sin(0.02*frameCount+10);
    var tx =  60 * sin(0.03*frameCount+4);
    var size1 = 200 * cos(0.01*frameCount+60);

    var ang2 = PI * tan(0.01*frameCount+20);
    var tx2 =  20 * sin(0.01*frameCount+20);
    var size2 = 50 * tan(0.01*frameCount);

    
    translate(50, 200);
        for(var i = 0; i<5; i++){
            fill("#123456");
            stroke(55, 100, 100);
            push();
            rotate(ang1 + PI *i+5 );
            translate(tx, tx);
            rect(0,0, size1/5, size1);            
                for(var y = 0; y<10; y++){
                    push();
                    fill(255,255,255,100);
                    translate (tx2, 0);
                    rotate(ang2/TWO_PI * y/5);
                    ellipse(tx2, 0, size2/2, size2);
                    pop();
                }
            
            pop();          
        } 
    
     translate(width/4, height/8);
        for(var i = 0; i<5; i++){
            fill("#123456");
            stroke(55, 100, 100);
            push();
            rotate(ang1 + PI *i+5 );
            translate(tx, tx);
            rect(0,0, size1/5, size1);            
                for(var y = 0; y<10; y++){
                    push();
                    fill(255,255,255,100);
                    translate (tx2, 0);
                    rotate(ang2/TWO_PI * y/5);
                    ellipse(tx2, 0, size2/2, size2);
                    pop();
                }
            
            pop();          
        } 
    
     translate(width/6, height/6);
        for(var i = 0; i<5; i++){
            fill("#123456");
            stroke(55, 100, 100);
            push();
            rotate(ang1 + PI *i+5 );
            translate(tx, tx);
            rect(0,0, size1/5, size1);            
                for(var y = 0; y<10; y++){
                    push();
                    fill(255,255,255,100);
                    translate (tx2, 0);
                    rotate(ang2/TWO_PI * y/5);
                    ellipse(tx2, 0, size2/2, size2);
                    pop();
                }
            
            pop();          
        } 
     
     translate(width/8, height/8);
        for(var i = 0; i<5; i++){
            fill("#123456");
            stroke(55, 100, 100);
            push();
            rotate(ang1 + PI *i+5 );
            translate(tx, tx);
            rect(0,0, size1/5, size1);            
                for(var y = 0; y<10; y++){
                    push();
                    fill(255,255,255,100);
                    translate (tx2, 0);
                    rotate(ang2/TWO_PI * y/5);
                    ellipse(tx2, 0, size2/2, size2);
                    pop();
                }
            
            pop();          
        }   
}




function loopTwo () {
    
    background(102, 72, 122);
    var ang3 = 100*sin(0.02*frameCount+10);
    var tx3 =  60 * sin(0.03*frameCount+4);
    var size3 = 200 * cos(0.01*frameCount+60);

    var ang4 = PI * tan(0.01*frameCount+20);
    var tx4 =  20 * sin(0.01*frameCount+20);
    var size4 = 50 * tan(0.01*frameCount);

    
    translate(width/2, height/2);
        for(var i = 0; i<5; i++){
            fill(91, 197, 209);
//            stroke(55, 20, 100);
            push();
            rotate(ang3 + TWO_PI *i+5 );
            translate(tx3, tx3);
            triangle(tx3*10,tx3/10, size3/4, size3/4,5,50);            
                for(var y = 0; y<10; y++){
                    push();
                    fill(209, 96, 91,50);
                    stroke(0,0,0,255);
                    translate (tx4, 0);
                    rotate(ang4/TWO_PI * y/5);
                    quad(tx4, 0, size4/2, size4, 200, 200, tx4/2, tx4+100);
                    pop();
                }
            
            pop();          
        } 
}
    
    function loopThree(){
 background(110, 127, 114);
    var ang5 = 20*noise(0.02*frameCount+10);
    var tx5=  20*noise(0.03*frameCount+4);
    var size5 = 20*noise(0.01*frameCount+60);

    var ang6 = PI * cos(0.01*frameCount+20);
    var tx6 =  20 * sin(0.01*frameCount+20);
    var size6 = 50 * cos(0.01*frameCount);

    
    translate(width/2, height/2);
        for(var c = 0; c<5; c++){
            fill(237, 233, 208);
            noStroke();
            push();
            rotate(ang5 + TWO_PI *c+5 );
            translate(tx5, tx5);
            ellipse(tx5*10,tx5/10, size5*40, size5*40);            
                for(var v= 0; v<10; v++){
                    push();
                    fill(209, 96, 91,100);
                    stroke(0,0,0,255);
                    translate (tx6, 0);
                    rotate(ang6/QUARTER_PI * v*5);
                    quad(tx6*100, 200, size6*2, size6/10, 400, 200, tx6/2, tx6+100);
                    pop();
                }
            
            pop();          
        }         
        
        
        
    }
    
    
    
    
    
