"use strict";

$(document).ready(function () {
  $(".js-reply").click(function () {
    $(".reply__content").addClass("active");
    $(".js-replyGroup").addClass("d-none");
  });
  $(".js-cancel").click(function () {
    $(".reply__content").removeClass("active");
    $(".js-replyGroup").removeClass("d-none");
  });
  $(".js-viewInfo__more").click(function () {
    if ($(".js-viewInfo__more").text() === "expand_more") {
      $(".js-viewInfo__more").text('expand_less');
    } else {
      $(".js-viewInfo__more").text('expand_more');
    }

    $(".viewInfo").toggleClass("d-none");
    $(".viewInfo__btns").toggleClass("active");
  });
  var htmlTitle = $('title');

  switch (htmlTitle.text()) {
    case "Assignment":
      $('a[href="index.html"]').addClass('active');
      break;

    case "Admin":
      $('a[href="admin.html"]').addClass('active');
      break;
  }
});
//# sourceMappingURL=all.js.map
