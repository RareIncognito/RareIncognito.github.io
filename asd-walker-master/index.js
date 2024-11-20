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
    positiony: 0,
    speedX: 0,
    speedY: 0,
  };

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()

    redrawGameItem()

  }

  /* 
  Called in response to events.
  */
  //Recognizes which key is being pressed. 
  function handleKeyDown(event) {
    if (event.which === KEY.ENTER) {
      console.log("enter pressed")
    }
    if (event.which === KEY.LEFT) {
      console.log("left pressed")
    }
    if (event.which === KEY.RIGHT) {
      console.log("right pressed")
    }
    if (event.which === KEY.UP) {
      console.log("up pressed")
    }
    if (event.which === KEY.DOWN) {
      console.log("down pressed")
    }
    console.log(event.key)
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionGameItem(){
    walker.positionX += walker.speedX

    walker.positionY += walker.speedY
  };

  function redrawGameItem(){
    $("#box").css("left", walker.positionX)
    $("#box").css("top", walker.positionY)
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

}
