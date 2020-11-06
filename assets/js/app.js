
$('.stream__left-footer-scrollable').slick({
  speed: 9000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: false,
  infinite: true
});

$('.stream__left-help-box a').on('click', function(event){
  event.preventDefault();
  $('.stream , .modal').addClass('modal_active');
  $('body').css('overflow', 'hidden')
})
$('.modal__close .close_icon').on('click', function(){
  $('.stream , .modal').removeClass('modal_active');
  $('body').css('overflow', 'auto');
})


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4kKCcuc3RyZWFtX19sZWZ0LWZvb3Rlci1zY3JvbGxhYmxlJykuc2xpY2soe1xyXG4gIHNwZWVkOiA5MDAwLFxyXG4gIGF1dG9wbGF5OiB0cnVlLFxyXG4gIGF1dG9wbGF5U3BlZWQ6IDAsXHJcbiAgY3NzRWFzZTogJ2xpbmVhcicsXHJcbiAgc2xpZGVzVG9TaG93OiAxLFxyXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gIHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcbiAgYXJyb3dzOiBmYWxzZSxcclxuICBpbmZpbml0ZTogdHJ1ZVxyXG59KTtcclxuXHJcbiQoJy5zdHJlYW1fX2xlZnQtaGVscC1ib3ggYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICQoJy5zdHJlYW0gLCAubW9kYWwnKS5hZGRDbGFzcygnbW9kYWxfYWN0aXZlJyk7XHJcbiAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJylcclxufSlcclxuJCgnLm1vZGFsX19jbG9zZSAuY2xvc2VfaWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgJCgnLnN0cmVhbSAsIC5tb2RhbCcpLnJlbW92ZUNsYXNzKCdtb2RhbF9hY3RpdmUnKTtcclxuICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdhdXRvJyk7XHJcbn0pXHJcblxyXG4iXX0=
