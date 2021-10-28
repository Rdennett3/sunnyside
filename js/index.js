// gsap.defaults({ease: "power3"});
// gsap.set(".leadershipItem", {y: 100, opacity:0, scale:.95,});

// ScrollTrigger.batch(".leadershipItem", {
//   //interval: 0.1, // time window (in seconds) for batching to occur.
//   //batchMax: 3,   // maximum batch size (targets)
//   onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, delay:.15, stagger: {each: 0.25,}, overwrite: true, scale:1,}),
// });

// gsap.defaults({ease: "power3"});
// gsap.set(".employeeItem", {y: 100, opacity:0, scale:.95,});

// ScrollTrigger.batch(".employeeItem", {
//   //interval: 0.1, // time window (in seconds) for batching to occur.
//   //batchMax: 3,   // maximum batch size (targets)
//   onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, delay:.15, stagger: {each: 0.25,}, overwrite: true, scale:1,}),
// });

// gsap.defaults({ease: "power3"});
// gsap.set(".aboutmobileitem", {y: 100, opacity:0, scale:.95,});

// ScrollTrigger.batch(".aboutmobileitem", {
//   //interval: 0.1, // time window (in seconds) for batching to occur.
//   //batchMax: 3,   // maximum batch size (targets)
//   onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, delay:.15, stagger: {each: 0.25,}, overwrite: true, scale:1,}),
// });

// const swiper = new Swiper('.swiper-container', {
//         centeredSlides: true,
//         loop:true,
//         speed:1000,
//         // effect:'coverflow',
//
//         pagination: {
//           el: ".swiper-pagination",
//           clickable:true,
//         },
//         autoplay: {
//           enabled:true,
//           delay: 9000,
//         },
//         });
//
//         swiper.on("slideChangeTransitionStart", function() {
//           gsap.fromTo(".swiper-container .swiper-slide.swiper-slide-active .sliderBG", {
//               x: 200,
//               autoAlpha:.5,
//           }, {
//               duration: 6,
//               ease: "power4.out",
//               x: 0,
//               autoAlpha:1,
//           });
//       });
//       swiper.on("slideChangeTransitionStart", function() {
//         gsap.fromTo(".swiper-container .swiper-slide.swiper-slide-active .sliderFG", {
//             x: -200,
//             rotate:-20
//         }, {
//             duration: 6,
//             ease: "power4.out",
//             x: 0,
//             rotate:0,
//         });
//     });
    //   swiper.on("slideChangeTransitionStart", function() {
    //     gsap.fromTo(".swiper-container .swiper-slide .sliderBG", {
    //         x: 200,
    //         autoAlpha:.5
    //     }, {
    //         duration: 5,
    //         ease: "power4.out",
    //         x: 0,
    //         autoAlpha:1,
    //     });
    // });


// gsap.registerPlugin(ScrollTrigger);
//
// gsap.from("#slide1 #spicesBG", {x:200, duration:4.5, ease: "power4.out",});
//
// gsap.from("#slide1 #bottleFG", {x:-200, duration:4.5, rotate:-20, ease: "power4.out",});
//
//
// // "BROOKS BOTTLING" ANIMATIONS
// // ScrollTrigger.saveStyles("#brooksHeadline");
// ScrollTrigger.matchMedia({
//   "(min-width:900px)": function() {
//     const tl = gsap.timeline({
//       scrollTrigger:{
//         trigger:".intro",
//         start:"top 60%",
//         end:"top 30%",
//         // scrub:true,
//         // markers:true,
//       }
//     });
//     tl.from("#brooksHeadline", {x:-50, stagger:.25, autoAlpha:0})
//     .to("#brooksHeadline", {autoAlpha:1});
//   },
//   "(max-width:899px)": function(){
//     const tl = gsap.timeline({
//       scrollTrigger:{
//         trigger:".intro",
//         start:"top 50%",
//         end:"top 10%",
//         // scrub:true,
//         // markers:true,
//       }
//     });
//     tl.from("#brooksHeadline", {autoAlpha:0, y:50}).to("#brooksHeadline", {autoAlpha:1})
//   },
// });
