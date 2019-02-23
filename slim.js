// ---------- FUNCTIONS --------------------------------------------------------

function handleLength() {
  // listen for changes in height of public layer
  // apply measurement to width of .handle
  $(".handle").width($("#publayer").height());
}
function moveSettings() {
  // switch applied classes
  // case 1
  $(".bottom").click(function(){
    $("#settings, #publayer, #beacon, #itts, #pois, #wallet")
      .toggleClass("rad1 rad2");
  })
  // case 2
  $(".top").click(function(){
    $("#settings, #publayer, #beacon, #itts, #pois, #wallet")
      .toggleClass("rad1 rad2");
  })
}

// ---------- WINDOW RESIZE EVENT ----------------------------------------------

$(window).resize(function() {
  // for resizes that are not resource-intensive
  handleLength();
})

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

// ---------- DOCUMENT READY ---------------------------------------------------

$(function(){
  // $(function) same as $(document).ready(function)
  handleLength();
  moveSettings();
})