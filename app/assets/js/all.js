$(document).ready(() => {
  $(".js-reply").click(()=> {
    $(".reply__content").addClass("active");
    $(".js-replyGroup").addClass("d-none");
  });
  
  $(".js-cancel").click(()=> {
    $(".reply__content").removeClass("active");
    $(".js-replyGroup").removeClass("d-none");
  });
});
