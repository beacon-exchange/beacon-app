// $(function) same as $(document).ready(function)

$(function(){
  $(".bottom").click(function(){
    $("#settings, #publayer, #beacon, #itts, #pois, #wallet")
      .toggleClass("rad1 rad2");
  })
  $(".top").click(function(){
    $("#settings, #publayer, #beacon, #itts, #pois, #wallet")
      .toggleClass("rad1 rad2");
  })
})