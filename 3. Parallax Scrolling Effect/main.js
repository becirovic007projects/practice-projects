// -> while scrolling returnig offset from the top in the console... Task: Build Game: Try to find 1000vh?
$(window).scroll(function () {
  var scrollTop = $(this).scrollTop();
  console.log(scrollTop);
  $(".header-bg").css("top", -(scrollTop * 0.1) + "px");
});
