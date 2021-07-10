
// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.reveal-image'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('visible-image');
      } else {
        element.classList.remove('visible-image');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}








//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









// Detect request animation frame
var scroll2 = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow2 = document.querySelectorAll('.reveal-heading'); 

function loop2() {

    Array.prototype.forEach.call(elementsToShow2, function(element){
      if (isElementInViewport2(element)) {
        element.classList.add('visible-heading');
      } else {
        element.classList.remove('visible-heading');
      }
    });

    scroll2(loop2);
}

// Call the loop for the first time
loop2();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport2(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









// Detect request animation frame
var scroll3 = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow3 = document.querySelectorAll('.reveal-occupation'); 

function loop3() {

    Array.prototype.forEach.call(elementsToShow3, function(element){
      if (isElementInViewport3(element)) {
        element.classList.add('visible-occupation');
      } else {
        element.classList.remove('visible-occupation');
      }
    });

    scroll3(loop3);
}

// Call the loop for the first time
loop3();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport3(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









// Detect request animation frame
var scroll4 = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow4 = document.querySelectorAll('.reveal-text'); 

function loop4() {

    Array.prototype.forEach.call(elementsToShow4, function(element){
      if (isElementInViewport4(element)) {
        element.classList.add('visible-text');
      } else {
        element.classList.remove('visible-text');
      }
    });

    scroll4(loop4);
}

// Call the loop for the first time
loop4();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport4(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






// Detect request animation frame
var scroll5 = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow5 = document.querySelectorAll('.reveal-image-hover'); 

function loop5() {

    Array.prototype.forEach.call(elementsToShow5, function(element){
      if (isElementInViewport5(element)) {
        element.classList.add('visible-image-hover');
      } else {
        element.classList.remove('visible-image-hover');
      }
    });

    scroll5(loop5);
}

// Call the loop for the first time
loop5();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport5(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





