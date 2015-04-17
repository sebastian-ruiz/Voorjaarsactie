$( document ).ready(function() {
  console.log( "ready!" );
  var state = 0;
  var imgDir = "img/";
  var images = [imgDir + "Voorjaarsactie_rs.jpg", 
                imgDir + "voorjaarsactie_schuimfeest.jpg", 
                imgDir + "Voorjaarsactie_valk.jpg",
                imgDir + "sub1.png",
                imgDir + "sub2.png",
                imgDir + "sub3.png"];

  var closedLeftNum = 0;
  var openedLeftNum = 0;
  $('#accordionLeft').on('hide.bs.collapse', function () {
    closedLeftNum++;
    if(closedLeftNum  == openedLeftNum) {
      triggerCenter();
    }
  });
  $('#accordionLeft').on('show.bs.collapse', function (e) {
    openedLeftNum++;
    triggerLeft();
    if ($(e.target).hasClass("one")) {
      $('#col1').css("background-image", "url("+images[0]+")");
    } else if ($(e.target).hasClass("two")) {
      $('#col1').css("background-image", "url("+images[1]+")");
    } else if ($(e.target).hasClass("three")) {
      $('#col1').css("background-image", "url("+images[2]+")");
    }
  });

  var closedRightNum = 0;
  var openedRightNum = 0;

  $('#accordionRight').on('hide.bs.collapse', function () {
    closedRightNum++;
    if(closedRightNum  == openedRightNum) {
      triggerCenter();
    }
  });
  $('#accordionRight').on('show.bs.collapse', function (e) {
    openedRightNum++;
    triggerRight();

    if ($(e.target).hasClass("one")) {
      $('#col2').css("background-image", "url("+images[0]+")");
    } else if ($(e.target).hasClass("two")) {
      $('#col2').css("background-image", "url("+images[2]+")");
    } else if ($(e.target).hasClass("three")) {
      $('#col2').css("background-image", "url("+images[1]+")");
    }
  });

  $("#col1").click(function() {
    console.log("col1 clicked");
    if (state == 2) {
      triggerCenter();
    }
  });
  $("#col2").click(function() {
    if (state == 1) {
      triggerCenter();
    }
  });

  function triggerLeft() {
    state = 1;
    $('#col2').removeClass('col-md-6 col-md-11');
    $('#col1').removeClass('col-md-6 col-md-1');
    
    $('#col2').addClass('col-md-1');
    $('#col1').addClass('col-md-11');
  }

  function triggerRight() {
    state = 2;
    $('#col2').removeClass('col-md-6 col-md-1');
    $('#col1').removeClass('col-md-6 col-md-11');
    
    $('#col2').addClass('col-md-11');
    $('#col1').addClass('col-md-1');
  }
  function triggerCenter() {
    state = 0;
    $('#col2').removeClass('col-md-11 col-md-1');
    $('#col1').removeClass('col-md-11 col-md-1');

    $('#col2').addClass('col-md-6');
    $('#col1').addClass('col-md-6');
  }

});

