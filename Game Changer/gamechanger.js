// for circle and images moving with cursor

function cir() {
  window.addEventListener("mousemove", function (a) {
    var cursor = document.querySelector(".minicir");

    var x = a.clientX;
    var y = a.clientY; // clientX, clientY tells about the position of the cursor
   
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  });
}
cir();

// function trans(){
//     var t=gsap.timeline();

//     t.from(".navlink",{
//         y:-10,
//         opacity:0,
//         duration: 2,
//         ease:Expo.easeInOut
//     })
//     // t.to(".up",{
//     //     y:0,
//     //     ease:Expo.easeInOut,
//     //     duration:2,
//     //     stagger:0.2

//     })

function bani() {
  var img = document.querySelectorAll(".images");
  var secElement = document.querySelector(".sec");
  var aa = secElement.getBoundingClientRect().top;

  window.addEventListener("mousemove", function (imga) {
    var x = imga.clientX;
    var y = imga.clientY;

    var diff = y -aa;

    img.forEach(function (im) {
      im.style.left = x - 280 + "px";
      im.style.top = diff + "px";
    });
  });
}
bani();

