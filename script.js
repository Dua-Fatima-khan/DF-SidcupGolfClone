let crsr = document.querySelector(".cursor");
let crsrblr = document.querySelector(".cursorblur");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  crsrblr.style.left = dets.x - "150" + "px";
  crsrblr.style.top = dets.y - "150" + "px";
});

gsap.to("nav", {
  backgroundColor: "#000",
  height: "12vh",
  duration: 0.5,
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to(".main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});
let navh4 = document.querySelectorAll("nav h4,button");

navh4.forEach(function (val) {
  val.addEventListener("mouseenter", function () {
    (crsr.style.scale = 2),
      (crsr.style.backgroundColor = "transparent"),
      (crsr.style.border = "1px solid white");
  });

  val.addEventListener("mouseleave", function () {
    (crsr.style.scale = 1),
      (crsr.style.backgroundColor = "##95c11e"),
      (crsr.style.border = "none");
  });
});

gsap.from(".page2-TXT img ,.about-us", {
  y: 50,
  opacity: 0,
  duration: 4,
  scrollTrigger: {
    trigger: ".page2-TXT",
    scroller: "body",
    start: "top 90%",
    end: "top 40%",
    scrub: 5,
  },
});

gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 80%",
    end: "top 75%",
    scrub: 2,
  },
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 47%",
    scrub: 2,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon2",
    scroller: "body",
    start: "top 80%",
    end: "top 45%",
    scrub: 2,
  },
});

gsap.from("page3 p", {
  y: 70,
  x: 10,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    start: "top 80%",
    end: "top 47%",
    scrub: 2,
  },
});

gsap.from(".page4 h1", {
  y: 50,
  opacity: 0,
  duration: 4,
  scrollTrigger: {
    trigger: ".page4",
    scroller: "body",
    start: "top 85%",
    end: "top 80%",
    scrub: 2,
  },
});


