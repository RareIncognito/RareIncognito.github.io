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
  applyFilter(reddify)
  applyFilter(decreaseBlue)
  applyFilter(increaseGreenByBlue)
  
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
function applyFilterNoBackground() {
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
function decreaseBlue(amount) {
  amount[BLUE] = keepInBounds(amount[BLUE] - 50)
}

function increaseGreenByBlue(diffArray) {
  diffArray[GREEN] = keepInBounds(diffArray[GREEN] + diffArray[BLUE])
}
// CHALLENGE code goes below here
