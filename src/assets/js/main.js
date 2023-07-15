// Find all elements with the attribute "text"
var elements = document.querySelectorAll('[text]');

// Loop through each element and update its content
elements.forEach(function(element) {
  var customText = element.getAttribute("text");
  element.innerText = customText;
});

// Find all elements with the attribute "hide"
var hideElements = document.querySelectorAll('[hide]');

// Remove each element
hideElements.forEach(function(element) {
  element.parentNode.removeChild(element);
});

// Find all elements with the attribute "link"
var linkElements = document.querySelectorAll('[link]');

// Loop through each element and update its link URL
linkElements.forEach(function(element) {
  var customLink = element.getAttribute("link");
  element.href = customLink;
});

$(document).ready(function() {
  $('.dropdown-toggle').click(function() {
    $(this).toggleClass('active');
  });
});

console.log('Fest JavaScript Loaded');
