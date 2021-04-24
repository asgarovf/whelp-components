$(document).ready(function () {
  $(this).scrollTop(0);
});

$(function () {
  var $bars = $(".bars");
  var $navigationSmall = $(".navigation-small");
  var $navToggle = $("#navToggle");

  $bars.click(() => {
    if ($navigationSmall.hasClass("collapsed")) {
      $navigationSmall.removeClass("collapsed");
      $navigationSmall.slideUp();
      $navToggle.addClass("fa-bars").removeClass("fa-times");
    } else {
      $navigationSmall.addClass("collapsed");
      $navigationSmall.slideDown();
      $navToggle.addClass("fa-times").removeClass("fa-bars");
      $("#nav-rem").addClass("active");
    }
  });

  $("#navClose").click(() => {
    $navigationSmall.removeClass("collapsed");
    $navigationSmall.slideUp();
    $navToggle.addClass("fa-bars").removeClass("fa-times");
    $("#nav-rem").removeClass("active");
  });

  $("#nav-rem").click(() => {
    $navigationSmall.removeClass("collapsed");
    $navigationSmall.slideUp();
    $navToggle.addClass("fa-bars").removeClass("fa-times");
    $("#nav-rem").removeClass("active");
  });
});

$(function () {
  $("#home-small").click(() => {
    if ($("#home-small-menu").hasClass("drop")) {
      $("#home-small-menu").slideUp();
      $("#home-small-menu").removeClass("drop");
    } else {
      $("#home-small-menu").slideDown();
      $("#home-small-menu").addClass("drop");
    }
  });
  $("#services-small").click(() => {
    if ($("#services-small-menu").hasClass("drop")) {
      $("#services-small-menu").slideUp();
      $("#services-small-menu").removeClass("drop");
    } else {
      $("#services-small-menu").slideDown();
      $("#services-small-menu").addClass("drop");
    }
  });

  $("#features-small").click(() => {
    if ($("#features-small-menu").hasClass("drop")) {
      $("#features-small-menu").slideUp();
      $("#features-small-menu").removeClass("drop");
    } else {
      $("#features-small-menu").slideDown();
      $("#features-small-menu").addClass("drop");
    }
  });

  $("#learn-small").click(() => {
    if ($("#learn-small-menu").hasClass("drop")) {
      $("#learn-small-menu").slideUp();
      $("#learn-small-menu").removeClass("drop");
    } else {
      $("#learn-small-menu").slideDown();
      $("#learn-small-menu").addClass("drop");
    }
  });

  $("#plan-small").click(() => {
    if ($("#plan-small-menu").hasClass("drop")) {
      $("#plan-small-menu").slideUp();
      $("#plan-small-menu").removeClass("drop");
    } else {
      $("#plan-small-menu").slideDown();
      $("#plan-small-menu").addClass("drop");
    }
  });
});

$(function () {
  $("#services").mouseover(() => {
    $("#features-menu").addClass("d-none");
    $("#services-menu").removeClass("d-none");
    $("#services-menu").addClass("services-menu-animation");
  });
  $("#services-menu").mouseover(() => {
    $("#services-menu").removeClass("d-none");
    $("#services-menu").addClass("services-menu-animation");
  });
  $("#services-menu").mouseout(() => {
    $("#services-menu").addClass("d-none");
  });

  $("#features").mouseover(() => {
    $("#services-menu").addClass("d-none");
    $("#features-menu").removeClass("d-none");
    $("#features-menu").addClass("services-menu-animation");
  });
  $("#features-menu").mouseover(() => {
    $("#features-menu").removeClass("d-none");
    $("#features-menu").addClass("services-menu-animation");
  });
  $("#features-menu").mouseout(() => {
    $("#features-menu").addClass("d-none");
  });

  $("#navbar-brand, #services-banner, #services-features").mouseover(() => {
    $("#home-menu").addClass("d-none");
    $("#services-menu").addClass("d-none");
    $("#features-menu").addClass("d-none");
  });
});

$(function () {
  $("#services").mouseover(() => {
    $("#home-menu").addClass("d-none");
    $("#services-menu").removeClass("d-none");
    $("#services-menu").addClass("services-menu-animation");
  });
  $("#services-menu").mouseover(() => {
    $("#services-menu").removeClass("d-none");
    $("#services-menu").addClass("services-menu-animation");
  });
  $("#services-menu").mouseout(() => {
    $("#services-menu").addClass("d-none");
  });

  $("#navbar-brand,#main,#learn,#plans,.navbar-buttons-wrapper").mouseover(
    () => {
      $("#services-menu").addClass("d-none");
      $("#features-menu").addClass("d-none");
    }
  );

  $("#learn, #plans, #home").mouseover(() => {
    $("#services-menu").addClass("d-none");
    $("#features-menu").addClass("d-none");
  });
});

(function () {
  document.onmousemove = handleMouseMove;
  function handleMouseMove(event) {
    var eventDoc, doc, body;

    event = event || window.event; // IE-ism

    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)
    if (event.pageX == null && event.clientX != null) {
      eventDoc = (event.target && event.target.ownerDocument) || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;

      event.pageX =
        event.clientX +
        ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
        ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
      event.pageY =
        event.clientY +
        ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
        ((doc && doc.clientTop) || (body && body.clientTop) || 0);
    }

    // Use event.pageX / event.pageY here

    var y = event.pageY - window.scrollY;

    if (y < 20) {
      $("#home-menu").addClass("d-none");
      $("#services-menu").addClass("d-none");
    }
  }
})();

$(function () {
  $("#r-1").click(() => {
    $("#row-1").removeClass("d-none");
    $("#row-2").addClass("d-none");
    $("#row-3").addClass("d-none");
    $("#row-4").addClass("d-none");
    $("#r-1").addClass("active");
    $("#r-2").removeClass("active");
    $("#r-3").removeClass("active");
    $("#r-4").removeClass("active");
  });
  $("#r-2").click(() => {
    $("#row-1").addClass("d-none");
    $("#row-2").removeClass("d-none");
    $("#row-3").addClass("d-none");
    $("#row-4").addClass("d-none");
    $("#r-2").addClass("active");
    $("#r-1").removeClass("active");
    $("#r-3").removeClass("active");
    $("#r-4").removeClass("active");
  });
  $("#r-3").click(() => {
    $("#row-1").addClass("d-none");
    $("#row-2").addClass("d-none");
    $("#row-3").removeClass("d-none");
    $("#row-4").addClass("d-none");
    $("#r-3").addClass("active");
    $("#r-1").removeClass("active");
    $("#r-2").removeClass("active");
    $("#r-4").removeClass("active");
  });
  $("#r-4").click(() => {
    $("#row-1").addClass("d-none");
    $("#row-2").addClass("d-none");
    $("#row-3").addClass("d-none");
    $("#row-4").removeClass("d-none");
    $("#r-4").addClass("active");
    $("#r-1").removeClass("active");
    $("#r-2").removeClass("active");
    $("#r-3").removeClass("active");
  });

  $("#r-5").click(() => {
    $("#row-5").removeClass("d-none");
    $("#row-6").addClass("d-none");
    $("#row-7").addClass("d-none");
    $("#row-8").addClass("d-none");
    $("#r-5").addClass("active");
    $("#r-6").removeClass("active");
    $("#r-7").removeClass("active");
    $("#r-8").removeClass("active");
  });
  $("#r-6").click(() => {
    $("#row-5").addClass("d-none");
    $("#row-6").removeClass("d-none");
    $("#row-7").addClass("d-none");
    $("#row-8").addClass("d-none");
    $("#r-6").addClass("active");
    $("#r-5").removeClass("active");
    $("#r-7").removeClass("active");
    $("#r-8").removeClass("active");
  });
  $("#r-7").click(() => {
    $("#row-5").addClass("d-none");
    $("#row-6").addClass("d-none");
    $("#row-7").removeClass("d-none");
    $("#row-8").addClass("d-none");
    $("#r-7").addClass("active");
    $("#r-5").removeClass("active");
    $("#r-6").removeClass("active");
    $("#r-8").removeClass("active");
  });
  $("#r-8").click(() => {
    $("#row-5").addClass("d-none");
    $("#row-6").addClass("d-none");
    $("#row-7").addClass("d-none");
    $("#row-8").removeClass("d-none");
    $("#r-8").addClass("active");
    $("#r-5").removeClass("active");
    $("#r-6").removeClass("active");
    $("#r-7").removeClass("active");
  });
});
