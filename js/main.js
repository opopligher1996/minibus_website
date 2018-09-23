
function main() {

(function () {
   'use strict';

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });


    // Show Menu on Book
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 500;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({
        target: '.navbar-default',
        offset: 80
    });

	// Hide nav on click
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });

  $('#askus').click(function(evt){
    $('#askus').prop( "disabled", true );
    $('#askus').html('正在送出訊息...');
    evt.preventDefault();
    var email = $('#email').val();
    var name = $('#name').val();
    var message = $('#message').val();
    var templateParams = {
      from_name: name,
      from_email: email,
      message_html: message
    };

    if(!email || !message) {
      alert('請填寫電郵及訊息');
      $('#askus').prop( "disabled", false );
      $('#askus').html('送出訊息');
      return;
    }

    emailjs.send('zoho', 'template_Ho1CodxE', templateParams)
        .then(function(response) {
           alert('感謝，訊息已送出，我們會盡快回覆你的查詢。');
           $('#email').val('');
           $('#name').val('');
           $('#message').val('');
           $('#askus').prop( "disabled", false );
           $('#askus').html('送出訊息');
        }, function(error) {
           alert('無法送出訊息，請稍後再試或透過其他方式聯絡我們');
           $('#askus').prop( "disabled", false );
           $('#askus').html('送出訊息');
        });
  });


}());


}
main();
