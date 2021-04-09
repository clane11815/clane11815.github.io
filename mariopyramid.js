document.querySelector('#button').addEventListener("click", determineHeightAndThenDrawPyramid);

function determineHeightAndThenDrawPyramid() {
  let userheight = document.querySelector('#height').value;
  printPyramid(userheight);
}

function printPyramid(userheight) {
  var x;
  var y;
  var rowStr;
  let space = ".";
  let block = "#";
  //clears out the div
  let element = document.getElementById("pyramid");
  element.innerHTML = "";
  //building
  for (x = 1; x <= userheight; x++) {
    rowStr = space.repeat(userheight-x) + "#" + block.repeat(x);
    //building a row of the pyramid as a p element
    let para = document.createElement("p");
    let node = document.createTextNode(rowStr);
    para.appendChild(node);
    //adding the p element to the div
    let element = document.getElementById("pyramid");
    element.appendChild(para);
  }
}
