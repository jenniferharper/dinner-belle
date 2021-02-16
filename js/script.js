
(function($) {

gsap.registerPlugin(ScrollTrigger);

function resize() {
  let ximg = document.getElementById('logo'); 
  let imgHeight = ximg.clientHeight;
  console.log(imgHeight);
  gsap.to('.logo-container', { css:{height: imgHeight}});
  gsap.to('.header-background', {css:{height: imgHeight}});
}
ScrollTrigger.addEventListener("refreshInit", resize);
resize();



let tl = gsap.timeline({
  scrollTrigger: {
    markers: true,
    trigger: ".scrollTriggerLogo",
    pin: true,
    start: "top top",
    end: "bottom top",
    endTrigger:'.logo-container',    
    scrub: 1,        
    toggleActions: "play pause resume reset",  
    pinSpacing: false, 
    onEnterBack: ({progress, direction, isActive}) => {
      console.log(progress, direction, isActive);
    },
    
    onLeave: ({progress, direction, isActive}) => {
      console.log(progress, direction, isActive);
    },        
    invalidateOnRefresh: true,    
  }
});

tl.to("#logo",6,{scale: 0.2 });







const images = gsap.utils.toArray('img');
document.body.style.overflow = 'auto';

gsap.utils.toArray('.scroller-text').forEach((section, index) => {
    const w = section.querySelector('.wrapper');
    const [x, xEnd] = index % 2 ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
    
    gsap.fromTo(w, { x }, {
      x: xEnd,
      scrollTrigger: {
        trigger: section,
        // markers:true,
        scrub: 0.5 } 
      });
  });




if (window.innerWidth > 768) {
  gsap.registerPlugin(ScrollTrigger);
  const images = gsap.utils.toArray('img');
    document.body.style.overflow = 'auto';
    
    gsap.utils.toArray('.scroller').forEach((section, index) => {
      const w = section.querySelector('.wrapper');
      const [x, xEnd] = index % 2 ? ['120%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
      
      gsap.fromTo(w, { x }, {
        x: xEnd,
        scrollTrigger: {
          trigger: section,
          // markers:true,
          scrub: 0.5 } 
        });
    });
 }

})(jQuery);