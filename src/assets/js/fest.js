// Find all elements with the attribute "text"
var elements = document.querySelectorAll('[text]');

// Loop through each element and update its content
elements.forEach(function(element) {
  var customText = element.getAttribute("text");
  element.innerText = customText;
});

$(document).ready(function() {
  $('.dropdown-toggle').click(function() {
    $(this).toggleClass('active');
  });
});
