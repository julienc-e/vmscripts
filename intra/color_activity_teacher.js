// ==UserScript==
// @name        [Intranet] Activity Color if Teacher
// @namespace   Violentmonkey Scripts
// @match       https://intra.epitech.eu/planning/
// @grant       none
// @version     1.1
// @author      Julien Chassard ( julien1.chassard@epitech.eu )
// @updateURL   https://raw.githubusercontent.com/julienc-e/vmscripts/main/intra/color_activity_teacher.js
// @description 26/09/2022 10:59:59
// ==/UserScript==

// Select the node that will be observed for mutations
const targetNode = document.getElementById('content');

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationList, observer) {
    var appointments = document.getElementsByClassName("appoint");
    for (appointment of appointments) {
      if (appointment.attributes["class"].nodeValue.includes("present") || appointment.attributes["class"].nodeValue.includes("perso_registered")) {
            appointment.style["background-color"] = "#d32f2f"
            appointment.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].style["color"] = "#ffffff"
            appointment.style["color"] = "#ffffff"
            appointment.lastChild.style["background-color"] = "#9a0007"
            appointment.lastChild.style["color"] = "#ffffff"
      }
    }
    return;
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
