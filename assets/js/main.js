// window.onload = function(){
//   loadTl.play();
// };

const lenis = new Lenis({

})

lenis.on('scroll', (e) => {
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 500)
})

gsap.ticker.lagSmoothing(0)




gsap.defaults({
  ease:"none"
})


let lastScroll = 0;
$(window).scroll(function () {
  curr = $(this).scrollTop(); //스크롤바의시작위치

  if (curr > lastScroll) {
    $('#header .inner').addClass('hide');
  } else {
    $('#header .inner').removeClass('hide');
  }

  lastScroll = curr;

})

$('.btn-menu').click(function () {
  $('.menu-con').toggleClass('active');


  if ($('.menu-con').hasClass('active')) {

    $('.btn-menu').attr('aria-expanded', 'flase');
    $(this).find('.text').text('MENU');
    lenis.start()
    
  } else {
    $('.btn-menu').attr('aria-expanded', 'true');
    $(this).find('.text').text('CLOSE');
    lenis.stop()
  }
});


lenis.stop()
const loadTl = gsap.timeline({
  // paused:true,
})
loadTl.to('.sc-main-visual .loading-area .bar',{
  delay:2.8,
  height:0,
  stagger:0.1,
 

  onComplete:function(){
    lenis.start();
    $('.sc-main-visual .main-area').addClass('active');
    $('#header .inner').css('z-index', '100');
  }
})




  introTextArr = [
    "boutique",
    "COCO MADEMOISELLE",
    "LE BLANC",
    "SUBLIMAGE LUMIERE",
    "Timeless Codes",
  ];

  introCount = ["3", "2", "1"];

  function countText() {
    for (let i = 0; i < introCount.length; i++) {
      setTimeout(() => {
        $('.sc-main-visual .info-area .item').text(introCount[i]);
      }, 1000 * i);
    }
    setTimeout(rollText, 1000 * introCount.length);
  }
  countText();


  setInterval(() => {
    for (let i = 0; i < introTextArr.length; i++) {
      rollText();
    }
  }, 1000*introTextArr.length);

  // rollText();
  function rollText(){
    for (let i = 0; i < introTextArr.length; i++) {
      setTimeout(() => {
        $('.sc-main-visual .info-area .item').text(introTextArr[i])
      }, 1000*i);
    }
  }

const visualScrollTl = gsap.to('.sc-main-visual .video-area',{
  scrollTrigger: {
    trigger: ".sc-main-visual",
    start: "0% 0%",
    end: "100% 0%",
    scrub: 0,
    // markers:true,
    onEnter: function() {

      gsap.set('.sc-main-visual .main-area .svg-wrap .text-box svg', { y:0});
      gsap.set('.sc-main-visual .main-area .svg-wrap .logo-box svg', { y:0});
    }
  },
  opacity:0,
  yPercent:-30,
})


// $(document).mousemove(function(e){
//   gsap.to('.cursor',{
//     x:e.pageX,
//     y:e.pageY
//   })
// })





const projectTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hori-inner",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
    // markers:true,
  }
})
projectTl.to('.hori-inner .img-area.left img', 1,{ yPercent: -30, xPercent: 0 }, 'a');
projectTl.to('.hori-inner .img-area.right img', 1,{ yPercent: 30, xPercent: 0 }, 'a');
projectTl.to('.hori-inner .inner', 1,{ scaleX: 1, scaleY: 1 ,})
projectTl.to('.sc-projects', 5,{ xPercent:-100})

const projectSlide = new Swiper('.project-slide',{
  loop: true,

  autoplay: {
    delay: 2000,
    disableOnInteraction: true
  },
  effect: 'fade',


   pagination:{
     el:".fraction",
     type:"custom",
     renderCustom:function(swiper, current, total){
       return `<span>00</span>-<span class="curr">${current}</span>`
     }
   },
 })
 


const workSticky = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-work .group-work-top",
    start: "0% 100%",
    end: "100% 0%",
    scrub: 0,
    // markers:true,
  }
})
workSticky.fromTo('.sc-work .img-area',{
  yPercent:-20,
},{
  yPercent:20,
})



gsap.to('.sc-mission .bg-area',{

  scrollTrigger: {
    trigger: ".sc-mission",
    start: "0% 100%",
    end: "100% 0%",
    scrub: 0,
    // markers:true,
  },
  transform: 'translateY(20%)',
  opacity:0
})

const footerSticky = gsap.timeline({
  scrollTrigger: {
    trigger: "#footer .content-bottom",
    start: "0% 100%",
    end: "100% 0%",
    scrub: 0,
    // markers:true,
  }
})
footerSticky.fromTo('#footer .content-bottom .video-area',{
  yPercent:-20,
},{
  yPercent:20
})