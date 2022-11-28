$(function () {
  $(".sec1_btn>button").click(function () {
    let btn_index1 = $(this).index();
    $(".sec1_btn>button, .sec1_slide>article").removeClass("on");
    $(this).addClass("on");
    $(".sec1_slide>article").eq(btn_index1).addClass("on");
  });
});

$(function () {
  $(".sec2_btn>button").click(function () {
    let btn_index2 = $(this).index();
    $(".sec2_btn>button, .sec2_slide>article").removeClass("on");
    $(this).addClass("on");
    $(".sec2_slide>article").eq(btn_index2).addClass("on");
  });
});

$(function () {
  $(".sec3_btn>button").click(function () {
    let btn_index3 = $(this).index();
    $(".sec3_btn>button, .sec3_slide>article").removeClass("on");
    $(this).addClass("on");
    $(".sec3_slide>article").eq(btn_index3).addClass("on");
  });
});
