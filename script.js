
//  --- parallex effect by uisng javascript DOM ---

// window.addEventListener("scroll", function () {
//     let bgimg = document.querySelector(".main-image");
//     let bgtitle= document.querySelector(".title");
//     // Dynamically adjust background size
//     let size = 100 + window.scrollY * 0.1; // Increases gradually
//     bgimg.style.backgroundSize = `${size}%`
    
//     let scale = 1 - scrollY * 0.001; 
//   let opacity = 1 - scrollY * 0.002;

//   bgtitle.style.transform = `scale(${scale})`; 
// bgtitle.style.opacity = (opacity); 

//   });
  

// --- parallex effect and Animations by using GSAP ,javascript library ---

//  hero section

gsap.to(".main-image",{
    
    scale:2.2,
     scrollTrigger:{
         scroller:"body",
         scrub:true
     }
 })
 
gsap.to(".title",{
    scale:0,
    opacity:-1.5,
    y:100,
    scrollTrigger:{
        scroller:"body",
        scrub:true
    }

})
 
var tl = gsap.timeline()

tl.from(".images", {
    opacity: 0,
    y:100,
    duration: 0.8,
    delay: 0.5,

})
tl.to(".images ", {
    opacity: 1,

    duration: 1.2,
    delay: 0.2,
    stagger: 0.2
})


tl.from('.title', {
    opacity: 0,
    x: -200,
    duration:1,
    delay:0.3,
    stagger: 0.5
},0.5)
  
tl.from(".navbar,li", {
    opacity: 0,
    y: -30,
    duration: 1,
    delay: 0.5,
    stagger: 0.3,
},0.6)


// --- feature section ---

gsap.from(".features-title",{
    opacity:0,
    scale:0,
    duration:0.6,
    delay:0.3,
    scrollTrigger:{
        trigger:".features-title ",
        scroller:"body",
        //  markers:true,
        scrub:true,
        start:"top 120%",
        end:"bottom 30% ",
      
    }
})

tl.from(".feature",{
    y:500,
    opacity:0,
   scale:0,
  duration:0.6,
  delay:0.5,
 stagger:0.5,
scrollTrigger:{
    trigger:".feature ",
    scroller:"body",
    //  markers:true,
    
     start:"top 130%",
     end:" 20% ",
     scrub:true,
}

})

tl.to(".feature",{
    y:0,
    opacity:1,
   scale:1,
  duration:0.6,
  delay:0.5,
 stagger:0.5,
scrollTrigger:{
    trigger:".feature ",
    scroller:"body",
    //  markers:true,
  
  start:"top 130%",
 end:"7% ",
  scrub:true,

}

})



gsap.from(".parallex-title",{
   
    scale:0,
    opacity:1,
    duration:1,
  
    scrollTrigger:{
        trigger:".parallex-title",
        scroller:"body",
       start:"top 100%",
    //    markers:true,
    scrub:true,
    start:"top 130%",
    end:"bottom 35% ",
    } 

})

gsap.from(".figure img",{
    
   scale:0,
    opacity:0,
  duration:1,
  delay:0.5,
scrollTrigger:{
    trigger:".figure img",
    scroller:"body",
   scrub:0.5,
   end:"bottom 25% ",
//    markers:true,
}

})
gsap.from(".statistics-list .card",{
    scale:0,
    x:500,
    opacity:0,
    duration:0.7,
    delay:0.5,
    stagger:0.5,
scrollTrigger:{
    trigger:".statistics-list .card",
    scroller:"body",
    scrub:0.5,
 end:"bottom 25% ",
    // markers:true,
   
}
})