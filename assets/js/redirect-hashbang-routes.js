// The following code runs exactly once when the page initially loads.
//
// If the requested route is a hash-bang route
//   (e.g. `#!documentation/reference` or `#/!documentation/reference`)
//
// redirect it to the conventional angular hash URL
//   (e.g. #/documentation/reference)
if (window.location.hash && window.location.hash.match(/^#\!/)) {
  window.location.hash = window.location.hash.replace(/^#\!/, '#');
}
if (window.location.hash && window.location.hash.match(/^#\/\!/)) {
  window.location.hash = window.location.hash.replace(/^#\/\!/, '#/');
}
