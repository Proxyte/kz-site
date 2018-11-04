$(document).ready(function(){

  var array = document.getElementsByClassName('card');
  $('.your-class').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });

  $('.cards').slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows:false,
    slidesToShow: 1,
    initialSlide:2,
    centerMode: true,
    variableWidth: true
  });

  $('.left').click(function(){
    $('.cards').slick('slickPrev');
  })

  $('.right').click(function(){
    $('.cards').slick('slickNext');
  });

  $('.slick-dots').appendTo(".line");

  var array = document.getElementsByClassName('card')
  array.forEach(i=>{
    console.log(i);
  })
});
