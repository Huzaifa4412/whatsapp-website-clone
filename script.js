// ******************************** Menu Bar ******************************** //

function heroTextAnimation() {
  let tl1 = gsap.timeline();
  tl1
    .from(".content-container img:nth-child(1)", {
      opacity: 0,
      duration: 1,
      y: 25,
    })
    .from(
      ".content-container img:nth-child(2)",
      {
        opacity: 0,
        ease: "bounce",
      },
      "-=0.5"
    )
    .from(".content-container img:nth-child(3)", {
      opacity: 0,
      y: 25,
    })
    .from(".content-container img:nth-child(4)", {
      opacity: 0,
      y: 25,
    })
    .from(
      ".content-container img:nth-child(5)",
      {
        opacity: 0,
        y: 25,
      },
      "-=0.2"
    )
    .from(
      ".content-container img:nth-child(6)",
      {
        opacity: 0,
        y: 25,
        ease: "bounce",
      },
      "-=0.2"
    )
    .from(".content-container img:nth-child(7)", {
      opacity: 0,
      y: 25,
    });
    addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        tl1.reverse();
      } else {
        tl1.play();
      }
    });
}
heroTextAnimation();

function onScroll() {
  gsap.to("nav", {
    backgroundColor: "rgba(252, 245, 235, 0.5)",
    backdropFilter: "blur(5px)",
    scrollTrigger: {
      trigger: "nav",
      scroller: "body",
      start: "50% 0%",
      end: "100% 10%",
      scrub: true,
    },
  });
}
onScroll();

function page2() {
  gsap.from(".part1", {
    opacity: 0,
    y: 50,
    scrollTrigger: {
      trigger: "#page2",
      start: "top center",
      ease: "power4.inOut",
    },
  });
  gsap.from(".part2", {
    opacity: 0,
    y: 50,
    scrollTrigger: {
      trigger: "#page2",
      start: "center center",
      end: "center center",
      ease: "power4.inOut",
      scrub: 2,
    },
  });
  gsap.from(".page2text", {
    opacity: "0",
    y: 100,
    scrollTrigger: {
      trigger: "#page2",
      start: "20% center",
      end: "30% center",
      ease: "power4.inOut",
      delay: 0.5,
      // markers: true,
      scrub: 2,
    },
  });
}
page2();

function page3() {
  gsap.from("#page3 .left-part .content", {
    y: 150,
    duration: 0.7,
    opacity: 0,
    scrollTrigger: {
      trigger: "#page3",
      start: "top 50%",
      end: "10% center",
      ease: "power4.inOut",
      // scrub: true,
    },
  });
  gsap.from("#page3 .right-part img ", {
    opacity: 0,
    x: 150,
    scrollTrigger: {
      trigger: "#page3",
      start: "top 50%",
      end: "10% center",
      ease: "power4.inOut",
      scrub: 2,
      // scrub: true,
    },
  });
}
page3();

function page4() {
  gsap.from("#page4 .left-part img", {
    opacity: 0,
    x: -150,
    scrollTrigger: {
      trigger: "#page4",
      start: "top 50%",
      end: "10% center",
      ease: "power4.inOut",
      scrub: 2,
      // scrub: true,
    },
  });
  gsap.from("#page4 .right-part .content", {
    opacity: 0,
    x: 150,
    scrollTrigger: {
      trigger: "#page4",
      start: "top 50%",
      end: "10% center",
      ease: "power4.inOut",
      scrub: 2,
      // scrub: true,
    },
  });
}
page4();

function page5() {
  gsap.from(".part1 .content", {
    opacity: 0,
    x: -150,
    scrollTrigger: {
      trigger: "#page5",
      start: "10% 50%",
      end: "20% center",
      ease: "power4.inOut",
      // markers: true,
      scrub: 2,
      // scrub: true,
    },
  });
  gsap.from(".part2 .image-wrapper", {
    opacity: 0,
    x: 150,
    scrollTrigger: {
      trigger: "#page5",
      start: "20% 50%",
      end: "30% center",
      // ease: "power4.inOut",
      scrub: 2,
    },
  });
}
page5();
