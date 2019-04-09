// ========== FUNCTIONS ========================================================

function handleLength() {
  // establish how long the handles to the drawers should be
  $('.handle').outerWidth(
    // measure height of Public Layer and height of its nav
    $('#publayer').innerHeight() - $('#publayer nav').outerHeight()
  ); // apply measurement to width of handles
}
function moveSettings() { // switch applied classes
  // case 1: move settings bar to the bottom (below Public Layer)
  $('#settings .barBot').click(function(){
    $('#settings, #publayer, #dresserLft, #dresserRgt')
      .toggleClass('togSettingsRad1 togSettingsRad2');
  })
  // case 2: move settings bar back to the top (above Public Layer) 
  $('#settings .barTop').click(function(){
    $('#settings, #publayer, #dresserLft, #dresserRgt')
      .toggleClass('togSettingsRad1 togSettingsRad2');
  })
}

// ========== WINDOW RESIZE EVENT ==============================================

$(window).resize(function() {
  // for resizes that are not resource-intensive
  handleLength(); // stretch drawer handle width to Public Layer height
})

/*
// for resizes that are somewhat resource-intensive
var resizeTimer;
$(window).resize(function() {
  console.log(resizeTimer);
  if (resizeTimer) { // null check
    clearTimeout(resizeTimer);
  }
  resizeTimer = setTimeout(onWindowResize, 500);
  // 500 (half a second) is arbitrary, can change
  // (i.e. optimization opportunity)
});
// alternatives to consider: debouncing, throttling
// especially when there are graphs to redraw
function onWindowResize(){
  // save for later
}
*/

// ========== DOCUMENT READY ===================================================

$(function(){ // $(function) same as $(document).ready(function)
  handleLength(); // stretch drawer handle width to Public Layer height
  moveSettings(); // move settings bar below or above Public Layer
})