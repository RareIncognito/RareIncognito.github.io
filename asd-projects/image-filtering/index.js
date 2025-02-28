// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(reddify);
  applyFilter(decreaseBlue);
  applyFilter(increaseGreenByBlue);
  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (i = 0; i < image.length; i++) {
    for (j = 0; j < image[i].length; j++) {
      var rgbString = image[i][j]
      var rgbNumbers = rgbStringToArray(rgbString)
      filterFunction(rgbNumbers)
      rgbString = rgbArrayToString(rgbNumbers)
      image[i][j] = rgbString

    }
  }
}

// TODO 7: Create the applyFilterNoBackground function


// TODO 5: Create the keepInBounds function
function keepInBounds(bound) {
  let max = (bound < 0) ? 0 : bound;
  let min = (bound > 255) ? 255 : bound;
}

// TODO 3: Create reddify function
function reddify(epic) {
  epic[RED] = 200
}

// TODO 6: Create more filter functions
// Reduces the amount BLUE in the RGB array
function decreaseBlue(blueArray){
  blueArray[BLUE] = keepInBounds(blueArray[BLUE] - 50)
}

//Increase the amount of GREEN in the RGB array in relation to the amount of BLUE in the array.
function increaseGreenByBlue(greenArray){
  greenArray[GREEN] = keepInBounds(greenArray[BLUE] + greenArray[GREEN])
}
// CHALLENGE code goes below here
