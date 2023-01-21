
var originalText = $("#paragraphId").text();
var newText=originalText.substring(0,495) + "...";
$("#paragraphId").text(newText);
$("#readMore").on("click", function() {
  if ($("#paragraphId").text() === originalText) {
    $("#paragraphId").text(newText);
  } else {
    $("#paragraphId").text(originalText);
  }
  if($(this).text()==="Read Less <--"){
    $(this).text("Read More -->");
  }
  else{
    $(this).text("Read Less <--");
  }
});


var videoUrl = "https://www.youtube.com/embed/fo3KjQEPCMQ";
$("#play-btn").on("click", function() {
  $("#overlay").show();
  $("#video").attr("src", videoUrl);
});
$("#close-btn").on("click", function() {
  $("#overlay").hide();
  $("#video").attr("src", "about:blank");
});
$(document).on('keydown', function(event) {
    if (event.key == "Escape") {
        $("#overlay").hide();
        $("#video").attr("src", "about:blank");
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  });

  $(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
  });

