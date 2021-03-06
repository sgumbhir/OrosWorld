const navButton = document.querySelector('.nav-button');
const navOpen = document.querySelector('.nav-open');

const tl = new TimelineLite({paused:true, reversed:true});

tl.to(".cover", 1,{
    width: "60%",
    ease: Power2.easeOut
}).to("nav", 1, {
    height: "100%",
    ease: Power2.easeOut
}, "-=0.2")
.fromTo('.nav-open', 0.5,{
    opacity: 0,
    x: -50,
    ease: Power2.easeOut,
},{
    opacity: 1,
    x:  0,
    onComplete: function(){
        navOpen.style.pointerEvents ='auto';
    }
});

var timeline = anime({
    targets: '.line',
    scaleX: [0,1],
    opacity: [0.5,1],
    duration: 1800,
    easing: "easeOutExpo",
    delay: 1200,
    autoplay: false,
});

timeline.reverse();

navButton.addEventListener("click", ()=>{
    toggleTween(tl);
    timeline.play();
    timeline.reverse();
});

function toggleTween(tween){
    tween.reversed() ? tween.play() : tween.reverse();
}

var counter = 1

setInterval(function(){
    document.getElementById('radio'+counter).checked = true;
    counter++;
    if(counter>5){
        counter=1;
    }
}, 4000);

