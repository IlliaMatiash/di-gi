// $(function(){

// });
const nextIcon = '<img src="./images/next.svg">';
const prevIcon = '<img src="./images/prev.svg">';

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    animateOut: "fadeOut",
    animateIn: "flipInX",
    items: 1,
    smartSpeed: 450,
    nav: true,
    navText: [prevIcon, nextIcon],
    autoplay: true,
    rewind: true,
  });
});
