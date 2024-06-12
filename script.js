function loadinganimation(){
    var tl = gsap.timeline();

tl.from(".loader .line h1", {
    duration: 0.6,
    delay: 0.5,
    y: "150%",
    stagger: 0.25,
});

tl.from(".loader .line .number h6, h5", {
    opacity: 0,
    onStart: function() {
        var h6text = document.querySelector(".loader .line .number h6");
        var count = 0;
        var interval = setInterval(function() {
            if (count < 100) {
                h6text.innerHTML = count;
                count++;
            } else {
                h6text.innerHTML = count;
                clearInterval(interval);
            }
        }, 30);
    }
});

tl.from(".loader .line3 h2",{
   animationName:"anime",
   opacity:0
})
tl.to(".line", {
    duration: 0.5,
    delay: 3.4,
    opacity: 0,
});

tl.to(".loader",{
    y:"-100%",
    duration:0.5,
    delay:0.2,
})
tl.from(".page1",{
    y:"1200",
    delay:0,
    duration:0.3,
    opacity:0,
})
tl.to(".loader",{
    dispaly:"none"
})
tl.from("#villan1 h1,#villan2 h1,#villan3 h2,#villan4 h1",{
    y:120,
    stagger:0.2,
    opacity:0
})
}
function cursoranimation(){
    var crsr = document.querySelector(".cursor")

    document.addEventListener("mousemove",function(dets){
        gsap.to(crsr,{
            x:dets.x,
            y:dets.y
        })
    })

    Shery.makeMagnet(".nav-part-2 h2",{});

}



loadinganimation();
cursoranimation();


