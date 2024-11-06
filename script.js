//https://cynthiaugwu.com/
//https://github.com/sheryislive/cynthiaugwu/blob/main/style.css
var timeout;
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });



function firstpageanime(){
  var tl=gsap.timeline();
  tl.from("#nav",{
    y:'-10',
    opacity:0,
    duration:1.5,
    ease: Expo.easeInOut
  })
  .to(".boundelem",{
   y:0,
   ease: Expo.easeInOut,
   duration:2,
   delay:-1,
   stagger:.2
  })
  .from("#homefooter",{
    y:-10,
    opacity:0,
    duration:1.5,
    delay:-1,
    ease:Expo.easeInOut
  })
}
function circleChaptaKaro() {
  // define default scale value
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    ciclefollow(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
  });
}
circleChaptaKaro()

function ciclefollow(xscale,yscale){
  window.addEventListener("mousemove",function(dets){
    this.document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale}) `
  })
}
ciclefollow()
firstpageanime()



//img animation

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector(".img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector(".img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});

// Function to show the alert and then trigger the download
document.getElementById('downloadBtn').addEventListener('click', function () {
  // Show an alert box informing the user that the download will start
  const downloadMessage = "Mrigaank Resume will be Shown now.";
  
  // Show alert with the message
  alert(downloadMessage);

  // After the user clicks OK on the alert, start the download
  setTimeout(function () {
    // Path to the resume file (change this to your actual file path)
    const resumeUrl = 'https://github.com/MRIGAANKSh/PORTFOLIO/blob/8d9bfe47e1d22ccc58c2371b2090a323d6e4440b/Mrigaank%20Sharma.pdf';  // Change this to the correct path to your file

    // Create a temporary <a> element to trigger the download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Mrigaank_Sharma_Resume.pdf'; // The filename for the downloaded file
    link.click(); // Programmatically click the link to start the download
  }, 500); // Wait for the alert to be dismissed before triggering the download
});
