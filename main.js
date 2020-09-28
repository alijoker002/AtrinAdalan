


/* --------------------------------------------------------------------------------------*/
$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
});

$('.carousel').carousel({


})
/*--------------------------------------------------------------------------------------*/



/*--------------------------------------------------------------------------------------*/

function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  
  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }
/*--------------------------------------------------------------------------------------*/




/*--------------------------------------------------------------------------------------*/
 /* Demo purposes only */
 $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
/*--------------------------------------------------------------------------------------*/




/*-----------------------------------hover and auto play video---------------------------------------------------*/
$('#videoID').hoverPlay({
  callbacks: {
    play: function(el, video) {
      video.play();
      el.addClass('hoverPlay');
    },
    pause: function(el, video) {
      video.pause();
      el.removeClass('hoverPlay');
    },
    click: function(el, video, e) {
      e.preventDefault();
    }
  }
});
/*--------------------------------------------------------------------------------------*/