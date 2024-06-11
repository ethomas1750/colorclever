/******************
 * YOUR CODE HERE *
 ******************/
function colorDeconstructor(color1) {
  if (color1 === "purple") {
    return "red and blue"
  } else if ( color1 === "green") {
    return "blue and yellow"
  } else if (color1 === "orange") {
    return "red and yellow"
  } else {
    return "error"
  }
}


// Our setup code here. Don't touch!
if(typeof colorDeconstructor === 'undefined') {
  colorDeconstructor = undefined;
}


module.exports = colorDeconstructor;
