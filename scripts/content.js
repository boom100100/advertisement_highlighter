console.log("i ran");

// const allDivs = document.getElementsByTagName('div');
// const allIframes = document.getElementsByTagName('iframe');
// const elements = [];

// const setElementBorders = e => {
//   if (
//     e.className.match(/(-|_| ?)ad/gm)
//     || e.id.match(/(-|_| ?)ad/gm)
//   ) {
//     // elements.push(e);
//     e.style.border = "20px solid red";
//   }
// };

// allDivs.forEach(setElementBorders);
// allIframes.forEach(setElementBorders);


const attributes = ["class", "id"];
const elementToAttr = {
  div: attributes,
  iframe: attributes,
};
for (const [element, attrs] of Object.entries(elementToAttr)) {
  
  attrs.forEach(attr => {
    const selected = document.querySelectorAll(`${element}[${attr}*="ad"]`);
    if (selected.length === 0) {
      return;
    }
    selected[0].style.border = "20px solid red";
  });
}

// sanity check
document.getElementsByTagName("body")[0].style = "color: green;";
