/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    ENTER: 13,
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40,
  };

  // Game Item Objects
  var walker = {
    positionX: 0,
    positionY: 0,
    speedX: 0,
    speedY: 0,
  };

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
 //Creates each new frame
  function newFrame() {
    repositionGameItem()
    wallCollision()
    redrawGameItem()

  }

  /* 
  Called in response to events.
  */
  //Recognizes which key is being pressed and moves accordingly.
  function handleKeyDown(event) {
    if (event.which === KEY.ENTER) {
    }
    if (event.which === KEY.LEFT) {
      walker.speedX = -5;
    }
    if (event.which === KEY.RIGHT) {
      walker.speedX = 5;
    }
    if (event.which === KEY.UP) {
      walker.speedY = -5;
    }
    if (event.which === KEY.DOWN) {
      walker.speedY = 5;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  ///Adds wall collision
  function wallCollision(){
    if(walker.positionX >= $("#board").width()-45){
      walker.positionX = walker.positionX - walker.speedX
    }else if (walker.positionX <= -5){
      walker.positionX = walker.positionX - walker.speedX
    }

    if(walker.positionY >= $("#board").height()-45){
      walker.positionY = walker.positionY - walker.speedY
    }else if(walker.positionY <= -5){
      walker.positionY = walker.positionY - walker.speedY
    }
  }
  ///Stops the gamepiece from moving after the key is released
  function handleKeyUp(event){
    if (event.which === KEY.LEFT) {
      walker.speedX = 0;
    }
    if (event.which === KEY.RIGHT) {
      walker.speedX = 0;
    }
    if (event.which === KEY.UP) {
      walker.speedY = 0;
    }
    if (event.which === KEY.DOWN) {
      walker.speedY = 0;
    }
  }

  ///Causes the game piece to chnage its x and y positions
  function repositionGameItem() {
    walker.positionX += walker.speedX;

    walker.positionY += walker.speedY;
  };

  ///Redraws the gamepiece at the new x and y positions
  function redrawGameItem() {
    $("#walker").css("left", walker.positionX);
  
    $("#walker").css("top", walker.positionY);
  }

  ///Ends the game
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

}
