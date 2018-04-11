/**
 * Created by john on 10/03/2016.
 */
/*
var cat = document.querySelector("img");
var angle = 0, lastTime = null;
function animate(time) {
    if (lastTime != null)
        angle += (time - lastTime) * 0.001;
    lastTime = time;
    cat.style.top = (Math.sin(angle) * 20) + "px";
    cat.style.left = (Math.cos(angle) * 200) + "px";
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
*/

// Selecting the cat image
var cat = document.querySelector("img");
// Setting the timer as null
var lastTime = null;
// Setting the increase, initially 0
var yValue = 0 , xValue = 0;
// Flag for the image touching the edges
var touchedBottom = false, touchedRight = false;

// Animation function
function animate( time ){

   // Making sure the animation starts after the first frame
   if (lastTime != null){
      // If the image has touched the bottom
      if(touchedBottom){
         // Decrease the Y value
         yValue -= 5;
      // If the image touches the top
      } else {
         // Increase the Y value
         yValue += 5;
      }
      // If the image touches the right edge
      if(touchedRight){
         // Decrease the X value
         xValue -= 5;
      // If the image touches the left edge
      } else {
         // If the image touches the right edge
         xValue += 5;
      }
   }
   // Increasing the frames
   lastTime = time;

   // If the Y value is more than the screen height
   if(yValue+100 > screen.availHeight ){
      // Set the bottom flag as true
      touchedBottom = true;
   }
   // If the Y value is less than 0
   if( yValue < 0){
      // Set the bottom flag as false
      touchedBottom = false;
   }
   // If the X value is more than the screen width
   if( xValue+100 > screen.width){
      // Set the right flag as true
      touchedRight = true;
   }
   // If the X value is more than the screen width
   if( xValue < 0){
      // Set the right flag as false
      touchedRight = false;
   }

   // Increase the Y axis of the image position
   cat.style.top = yValue + "px";
   // Increase the X of the image position
   cat.style.left = xValue + "px";

   // Making the animation endlessly recursive
   cat.onclick = function(){
      cat.style.width = "200px";
      cat.style.height = "200px";
   }
   requestAnimationFrame(animate);
}
// Calling the function initially
requestAnimationFrame(animate);
