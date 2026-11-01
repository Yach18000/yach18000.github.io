gsap.registerPlugin(
  ScrollTrigger
);

const btn =
document.getElementById(
  "enterBtn"
);

const overlay =
document.getElementById(
  "overlay"
);

const bgm =
document.getElementById(
  "bgm"
);

btn.addEventListener(
  "click",
  async () => {

    try{
      bgm.volume = 0.25;
      await bgm.play();
    }catch(e){
      console.log(e);
    }

    gsap.to(
      overlay,
      {
        opacity:0,
        duration:1.2,
        onComplete(){
          overlay.remove();
        }
      }
    );

    gsap.from(
      ".glass-card",
      {
        y:80,
        opacity:0,
        duration:1.4
      }
    );
  }
);

/* Scroll animation */

gsap.utils.toArray(
  ".reveal"
).forEach(section=>{

  gsap.from(
    section,
    {
      y:100,
      opacity:0,
      duration:1.2,

      scrollTrigger:{
        trigger:section,
        start:"top 80%"
      }
    }
  );

});
