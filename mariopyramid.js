
printPyramid(10);
// TODO #2
// Take in user input for the height


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    // console.log("Uh oh... the pyramid is under construction.");
    // console.log("Check back soon, our developers are hard at work as we speak!");

    // TODO #1
    // print that pyramid!
  
  var x;
  var y;
  let space = "...........";
  let block = "#";
  for (x = 1; x <= height; x++) {
    block = block + "#";
    space = space.substring(1);
    var rowStr = (space + block);
    console.log(rowStr);
  }

    

}
