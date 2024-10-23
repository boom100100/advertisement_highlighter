// sanity check
console.log("i started");

const removeAllChildren = (element) => {
  // removes false positives; later check will exclude text in descendents
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

const pattern = /[^A-z]((Advertisement|Advertisement|ADVERTISEMENT|advertisement)|[A|a][D|d]v?|[S|s]ponsor)\b/gm;

const hasMatchingAttr = (e) => {
  const eWithoutChildrenText = e.cloneNode();
  removeAllChildren(eWithoutChildrenText);
  // textContent is better than innerText for this check
  if (eWithoutChildrenText.textContent?.match(pattern) !== null) {
    return true;
  }

  for (const attr of e.attributes) {
    if (
      attr.value.match(pattern)
    ) {
      return true;
    }
  }
  return false;
};

const articleParent = document.querySelector("article");

document.querySelectorAll("body *").forEach(e => {
  const isChildOfArticle = (
    false
    // TODO: is there a way to check that text is part of article? Probably not.
    // articleParent !== null
    // && articleParent.contains(e)
  );
  const isIndicatingAd = (
    hasMatchingAttr(e)
  );
  if (isChildOfArticle || !isIndicatingAd) {
    return;
  }
  e.style.border = "50px solid #39ff14";
  // TODO: add functionality for hiding ads instead of highlighting.
  // Currently, changing the display to hidden changes nothing.
  // (Expected behavior: the space remains occupied, but the ad is gone.)
  // e.style.display = "hidden";
});


// sanity check
// document.getElementsByTagName("body")[0].style = "color: green;";
console.log("i finished");
