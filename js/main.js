$(function(){
  $("a").click(function(e){
    e.preventDefault();  
  });
  
  $("header").hover(function () {
    $(".sub").stop().slideDown();
    $(".sub_bg").stop().slideDown();
  });
  $("header").mouseleave(function () {
    $(".sub").stop().slideUp();
    $(".sub_bg").stop().slideUp();
  });

  


// 스크롤시 bg넣기
const headerEl = document.querySelector('header');
window.addEventListener('scroll', function(){
  if (window.scrollY > 10){
    headerEl.classList.add('bg');
  } else {
    headerEl.classList.remove('bg'); 
  }  
});
// 스크롤시 로고 변경
const logoEl = document.querySelector('.header_logo');
window.addEventListener('scroll', function(){
  if (window.scrollY > 10){
    logoEl.classList.add('active');
  } else {
    logoEl.classList.remove('active'); 
  }  
});

// 스크롤시 애니메이션 발생
const about = document.querySelector('.middle_inner');

window.addEventListener('scroll' , function(){
  if(window.scrollY > 20){
  about.classList.add('active');
  } else{
  about.classList.remove('active');
  }
});

// 메인 슬라이드
var Swiper1 =new Swiper('.main .swiper', {
  // Optional parameters
  speed: 1200,
  slideActiveClass: "active",
  direction: 'horizontal', // 수직 슬라이드
  loop: true, // 반복 재생 여부
  autoplay: {
    delay: 4000
  },
  slidesPerView: 1,
  pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
});
// 2번째 슬라이드
var bullet = ['치즈', '버터', '크림/요거트','햄/살라미', '푸아그라', '캐비어','트러플', '파스타/소스/오일',
'잼/스프레드','IQF과일','냉동 베이커리','음료','커피','리빙웨어'];
var swiper2 = new Swiper(".proswiper", {
  
  loop:true,
  slidesPerView: 1.5,
  centeredSlides: true,
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '"></br><p class= "p_text">' + (bullet[index]) + '</p></div>';
    }
  },
});


// partners 슬라이드

function slidePlay(){
  var swiper3 = new Swiper('.par_swiper', {
    observer: true,
    observeParents: true,
    effect : 'fade',
    fadeEffect: {
      crossFade: true
    },
    loop: true, // 반복 재생 여부
    autoplay: {
      delay: 2000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    pagination: {
        el: '.par_swiper .swiper-pagination',
        clickable: true
    },
    navigation: {
      nextEl: '.par_swiper .swiper-button-next',
      prevEl: '.par_swiper .swiper-button-prev',
    },
  });
  }

//탭 슬라이드 
$(".slide_box > div").hide();
//첫번째 탭내용만 보임
$(".slide_box > div:first").show();

$(".news-tap > ul").hide();
$(".news-tap > ul:first").show();
var $tablink = $(".partab_title ul li").click(function(){
  var idx=$tablink.index(this);
  $(".partab_title ul li").removeClass("active")
  $(".partab_title ul li").eq(idx).addClass("active");
  $(".slide_box > div").hide();
  $(".slide_box > div").eq(idx).show();
  slidePlay();
});
slidePlay();






// 시간지나면 자동으로 움직이는 탭
var tabs = $('.step ul li');
    var timerId = 0;       
    timerId = setInterval(function() {
    var onTab = tabs.filter('.active');
    var nextTab = onTab.index() < tabs.length-1 ? onTab.next() : tabs.first();
    nextTab.click();
    }, 2000);      
  $(".step ul li").click(function () {
      $(".step ul li").removeClass("active");
      $(this).addClass("active");
  });
  $("#show").trigger("click");

});

const topEl = document.querySelector('.top');

window.addEventListener('scroll', function(){
  if (window.scrollY > 100){
    topEl.classList.add('active');
  } else {
    topEl.classList.remove('active'); 
  } 
  });

  $('.top').click(function(){
    $('html, body').animate({"scrollTop":0});
    
  
});