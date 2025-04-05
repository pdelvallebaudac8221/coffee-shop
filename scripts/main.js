$(document).ready(function(){
  $('.slick-carousel').slick({
    autoplay: true,
    arrows: false,
    easing: 'ease-out',
    autoplaySpeed: 2500,
    pauseOnHover: false,
  });

  const cart = localStorage.getItem('cart');
  console.log(window.location.href.includes('/menu'));

});