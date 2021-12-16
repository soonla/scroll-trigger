gsap.to(".red", {
  x: 1000,
  rotation: 180,
  duration: 3,
  scrollTrigger: {
    markers: true,
    trigger: ".red",
    start: "top-=0 center", //옵션을 두개 쓸 수 있는데 1번째가 trigger의 top좌표, 2번째가 화면의 bottom지점
    end: "bottom+=0 top+=300", // 첫번째가 trigger의 bottom 좌표, 두번째가 화면의 top 좌표
    //scrub: 1,
    //pin: true,
    toggleActions: "play pause reverse reset", //처음 2개는 내려갈 때 뒤에 2개는 내려갈 때
  },
});
gsap.to(".green", {
  x: 1000,
  rotation: 360,
  duration: 3,
  scrollTrigger: {
    markers: true,
    trigger: ".green",
    start: "top-=0 center", //옵션을 두개 쓸 수 있는데 1번째가 trigger의 top좌표, 2번째가 화면의 bottom지점
    end: "bottom+=0 top+=300", // 첫번째가 trigger의 bottom 좌표, 두번째가 화면의 top 좌표
    scrub: 1,
    //pin: true,
    toggleActions: "", //처음 2개는 내려갈 때 뒤에 2개는 올라갈 때
  },
});
gsap.to(".blue", {
  x: 1000,
  rotation: 180,
  duration: 3,
  scrollTrigger: ".blue",
});
