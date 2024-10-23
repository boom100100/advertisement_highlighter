const removeAllChildren = (element) => {
  // removes false positives; later check will therefore exclude text in descendents
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

const pattern = /[^A-z]((AdChoices|adchoices|ADCHOICES|Adchoices|Advertisement|Advertisement|ADVERTISEMENT|advertisement)|[A|a][D|d]v?|(Sponsor|sponsor|SPONSOR|Sponsored|SPONSORED|sponsored))\b/gm;

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


document.querySelectorAll("body *").forEach(e => {
  const isIndicatingAd = (
    hasMatchingAttr(e)
  );
  if (!isIndicatingAd) {
    // TODO: is there a way to check that text is part of article and not an ad? (For isChildOfArticle.)
    // Being a descendent of an element with tag "article" is not enough, so probably not.
    return;
  }

  e.style.border = "20px solid #39ff14";
  // TODO: add functionality for hiding ads instead of highlighting.
  // Currently, changing the display to hidden changes nothing.
  // (Expected behavior: the space remains occupied, but the ad is gone.)
  // e.style.display = "hidden";
});
