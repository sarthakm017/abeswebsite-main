$(document).ready(function () {
  $(".heading").click(function () {
    
    $(".padding").hide();
    // console.log(this)
    $(this).addClass("selected-section")
    $(".heading").not(this).removeClass("selected-section");
    var target = $(this).data("target");
    $("." + target).show();
    

  });
});
