$(document).ready(() => {
  $(".js-reply").click(()=> {
    $(".reply__content").addClass("active");
    $(".js-replyGroup").addClass("d-none");
  });
  
  $(".js-cancel").click(()=> {
    $(".reply__content").removeClass("active");
    $(".js-replyGroup").removeClass("d-none");
  });

  $(".js-viewInfo__more").click(()=> {
    if ($(".js-viewInfo__more").text() === "expand_more") {
      $(".js-viewInfo__more").text('expand_less');
    } else {
      $(".js-viewInfo__more").text('expand_more');
    }
    console.log($(".js-viewInfo__more").text())
    $(".viewInfo").toggleClass("d-none");
    $(".viewInfo__btns").toggleClass("active");
  });
});
