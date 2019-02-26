document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 332) {
        $(".cart").addClass("cart--fixed");
    } else {
        $(".cart").removeClass("cart--fixed");
    }
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 332) {
        $(".category-picker").addClass("category-picker--fixed");
    } else {
        $(".category-picker").removeClass("category-picker--fixed");
    }
});

$(document).ready(function() {
  $('.payment-choice--cc').click( function() {
      $(".add-card").toggleClass("show");
  } );
});

$(document).ready(function() {
  $('.menu-item--menu').click( function() {
      $(".modal").toggleClass("fade-in");
  } );
});

$(document).ready(function() {
  $('.modal-close').click( function() {
      $(".modal").removeClass("fade-in");
  } );
});

$(document).ready(function() {
    var offsetHeight = 100
    $('a').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - offsetHeight
                }, 300);
                return false;
            }
        }
    });
});

$(document).ready(function() {
    $('.cat-anchor').click( function(){
        $('.cat-anchor').removeClass('active-li');
        $(this).addClass('active-li');
    });
});

$(document).ready(function(){
  $(".nav-placeholder").load("nav.html");
});