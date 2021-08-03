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
    $(".viewInfo").toggleClass("d-none");
    $(".viewInfo__btns").toggleClass("active");
  });

  let htmlTitle = $('title');
  switch(htmlTitle.text()){
    case "Assignment":
      $('a[href="index.html"]').addClass('active');
      break;
    case "Admin": 
      $('a[href="admin.html"]').addClass('active');
      break;
  }
});
