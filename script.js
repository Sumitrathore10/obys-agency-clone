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
tl.from("nav",{
    opacity:0
})
tl.from("#villan1 h1,#villan2 h1,#villan3 .h1,#villan4 h1",{
    y:120,
    stagger:0.2,
    opacity:0
})
}
function cursoranimation(){
    var crsr = document.querySelector(".cursor")
    var cnt = document.querySelector(".container")

    cnt.addEventListener("mousemove", function(event){
        var scrollX = window.scrollX;
        var scrollY = window.scrollY;
        gsap.to(crsr, {
            x: event.clientX + scrollX,
            y: event.clientY + scrollY,
        })
    })
    Shery.makeMagnet(".nav-part-2 h2",{});
}

function vediocursoraniamtion(){
    var crsr = document.querySelector(".vedio-cursor")
    var vedio = document.querySelector(".video")
    var crsr2 = document.querySelector(".cursor")

    vedio.addEventListener("mouseover",function(){
        crsr2.style.height = 0;
        crsr2.style.width = 0; 
    })
    vedio.addEventListener("mouseleave",function(){
        crsr2.style.height = "3vw";
        crsr2.style.width = "3vw"; 
    })
}


loadinganimation();
cursoranimation();
vediocursoraniamtion();


