// gsap.to(".box", { 
//     rotation: 360,
//     x: '10vw',
//     xPercent: -100,
//     // special properties
//     duration: 2, // how long the animation lasts
//     repeat: -1, // the number of repeats - this will play 3 times
//     yoyo: true, // this will alternate back and forth on each repeat. Like a yoyo
//   });

gsap.from(".box", {
  duration: 2,
  scale: 0.5, 
  opacity: 0, 
  delay: 0.5, 
  stagger: 0.2,
  ease: "elastic", 
  force3D: true
});

document.querySelectorAll(".box").forEach(function(box) {
  box.addEventListener("click", function() {
    gsap.to(".box", {
      duration: 0.5, 
      opacity: 0, 
      y: -100, 
      stagger: 0.1,
      ease: "back.in",
    });
  });
});