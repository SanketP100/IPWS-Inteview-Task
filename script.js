
// ScrollTrigger.defaults({
//     toggleActions:"restart pause resume pause",
//     scroller:"body",
// })

// gsap.to("#page2", {
//     scrollTrigger:{
//         trigger:"#page2",
//         scroller:"body",
//         toggleActions:"restart pause reverse pause",
//     },
//     duration:5,
//  })

//  gsap.to("#page3", {
//     scrollTrigger:{
//         trigger:"#page3",
//         scroller:"main",
//         toggleActions:"restart pause reverse pause",
//     },
//     duration:0,
//  })

gsap.to("#page3-part2", {
    x:"-100%",
    duration:2,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        // markers:true,
        start : "top 0%",
        end:"bottom -70%",
        pin:true,
        scrub:1,
    }
})

