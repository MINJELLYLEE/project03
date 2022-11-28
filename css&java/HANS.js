$(function () {
  $(".sec1_btn>button").click(function () {
    let btn_index1 = $(this).index();
    $(".sec1_btn>button, .sec1_slide>article").removeClass("on");
    $(this).addClass("on");
    $(".sec1_slide>article").eq(btn_index1).addClass("on");
  });
});
