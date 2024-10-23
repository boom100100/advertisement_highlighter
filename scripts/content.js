// sanity check
console.log("i ran");

const regex = /[^A-z]ad/gm;
const setElementBorder = e => {
  if (
    !(e.className.match(regex)
    || e.id.match(regex))
  ) {
    return;
  }
  e.style.border = "50px solid #39ff14";
  // TODO: add functionality for hiding instead of highlighting.
  // Currently, changing the display to hidden changes nothing.
  // (Expected behavior: the space remains occupied, but the ad is gone.)
  // e.style.display = "hidden";

};

const setElementBorders = (elementArray) => {
  for (let i = 0; i < elementArray.length; i++)
  {
    setElementBorder(elementArray[i]);
  }
};

const allDivs = document.getElementsByTagName('div');
const allIframes = document.getElementsByTagName('iframe');

setElementBorders(allDivs);
setElementBorders(allIframes);


// sanity check
// document.getElementsByTagName("body")[0].style = "color: green;";
console.log("i finished");
