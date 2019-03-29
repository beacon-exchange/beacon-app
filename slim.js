// ========== FUNCTIONS ========================================================

function handleLength() {
  // establish how long the handles to the drawers should be
  $('.handle').outerWidth(
    // measure height of public layer and height of its nav
    $('#publayer').innerHeight() - $('#publayer nav').outerHeight()
  ); // apply measurement to width of .handle
  // $('.handle label').outerWidth($('.handle').outerWidth());
  // console.log($('.handle label').innerHeight());
  // console.log($('.handle').innerHeight());
  // $('.handle label').innerHeight($('.handle').innerHeight());
}
function moveSettings() {
  // switch applied classes
  // case 1
  $('#settings .bottom').click(function(){
    $('#settings, #publayer, #beacon, #itts, #pois, #wallet')
      .toggleClass('togSettingsRad1 togSettingsRad2');
  })
  // case 2
  $('#settings .top').click(function(){
    $('#settings, #publayer, #beacon, #itts, #pois, #wallet')
      .toggleClass('togSettingsRad1 togSettingsRad2');
  })
}

function panelWidthPOIs() {
  // switch applied classes
  // case 1
  $('#pois .close').click(function(){
    $('#pois .panel')
      .toggleClass('togPOIsRad1 togPOIsRad2');
  })
  // case 2
  $('#pois .open').click(function(){
    $('#pois .panel')
      .toggleClass('togPOIsRad1 togPOIsRad2');
  })
}

function panelWidthWallet() {
  // switch applied classes
  // case 1
  $('#wallet .close').click(function(){
    $('#wallet .panel')
      .toggleClass('togWalletRad1 togWalletRad2');
  })
  // case 2
  $('#wallet .open').click(function(){
    $('#wallet .panel')
      .toggleClass('togWalletRad1 togWalletRad2');
  })
}

// ========== WINDOW RESIZE EVENT ==============================================

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

// ========== DOCUMENT READY ===================================================

$(function(){
  // $(function) same as $(document).ready(function)
  handleLength();
  moveSettings();
  panelWidthPOIs();
  // panelWidthWallet();
})