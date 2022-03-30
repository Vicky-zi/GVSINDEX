$(document).ready(function () {

      $('.footer-icon').click(function(event) {
        /* Act on the event */
        $('.footer-row').toggleClass('run');
      });


  //     $('.item-1').hover(function() {
  //       $('.chage-img').css("background-image", "url(https://cdn.pixabay.com/photo/2021/08/12/10/38/mountains-6540497_960_720.jpg)");
  //     })
  //     $('.item-2').hover(function() {
  //       $('.chage-img').css("background-image", "url(https://cdn.pixabay.com/photo/2021/07/29/13/42/cat-6507259_960_720.jpg)");
  //     })
  //     $('.item-3').hover(function() {
  //       $('.chage-img').css("background-image", "url('../img/喬治形象照_210817_23.jpg')");
  //     })
  //     $('.item-4').hover(function() {
  //       $('.chage-img').css("background-image", "url(https://cdn.pixabay.com/photo/2021/08/06/09/00/magpie-6525684_960_720.jpg)");
  //     })


  var myCarousel = document.querySelector('#myCarousel')
  var carousel = new bootstrap.Carousel(myCarousel)
});
