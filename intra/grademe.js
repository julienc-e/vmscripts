// ==UserScript==
// @name        "Grade me!" Button
// @namespace   Grade Project
// @match       https://intra.epitech.eu/module/*/*/*/acti-*/project/
// @grant       none
// @version     1.0
// @author      -
// @description 05/05/2023 11:20:31
// ==/UserScript==

const targetNode = document.getElementsByClassName('title');
console.log(targetNode)

for (item of targetNode) {
  if (item.title != "") {
    console.log(item.title);
    let currURIParsed = document.URL.split("/");
    console.log(currURIParsed);
    let uri = currURIParsed[0] + "//" + currURIParsed[2] + "/"+ currURIParsed[3] + "/" + currURIParsed[4] + "/" + currURIParsed[5] + "/" + currURIParsed[6] + "/" + currURIParsed[7] + "/bareme/" + item.title;
    var zNode = document.createElement ('div');
    zNode.innerHTML = `<button id="myButton" type="button" onclick="window.open('${uri}')">` +
    'Grade me!' +
    '</button>';
    item.appendChild (zNode);
  }
}
