
gsap.registerPlugin(ScrollTrigger);

// put everything in one function
function init(){

  //Group One
  //add height based on responsive logo dimentions
  function resize() {
    let xImg = document.getElementById('logo'); 
    let imgHeight = xImg.clientHeight;
    console.log(imgHeight);
    gsap.to('.logo-container', { css:{height: imgHeight}});
    gsap.to('.header-background', {css:{height: imgHeight}});
  }
  //header dimentions change with screen size.
  ScrollTrigger.addEventListener("refreshInit", resize);
  resize();


  //Group Two - scroll gallery
  // const images = gsap.utils.toArray('img');
  // document.body.style.overflow = 'auto';

  //text scrolls on mobile and desktop
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
    
  //images only works on above 768px
  if (window.innerWidth > 768) {     
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



      //Group three, logo animations
      //doesnt have to be timeline...
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
      
      
  }////media query bracket
}/////init bracket
// FINAL - dont start everything until loaded
window.addEventListener("load", function(event){
  init();
});


