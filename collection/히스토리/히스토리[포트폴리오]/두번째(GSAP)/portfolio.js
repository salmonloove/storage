const intro = gsap.timeline();
//이전 애니메이션 만들기
intro.from('.ltText', { x: -1000, opacity: 0, duration: .35 })
intro.from(".rtText", { x: 1000, opacity: 0, duration: .35 });
//현재에서 어떻게 변경시킬지를 지정
intro.to(".ltText", { y: -100, opacity: 1, duration: .35 });
intro.to(".rtText", { y: 100, opacity: 1, duration: .35 });

intro.from(".my", { opacity: 0, duration: .5, scale: 0 });
intro.to(".my", { opacity: 1, duration: .5, scale: 1 });
// -------------------------------------------------------------------------
const introzoom = gsap.timeline()
introzoom.to('#intro h2', { scale: 60, opacity: 0, duration: 2 })
ScrollTrigger.create({
    animation: introzoom,
    trigger: '#intro',
    start: "top top",
    end: "+=1000",
    anticipatePin: 1,//스크롤 속도를 제어하기 위해 사용
    pin: true,//스크롤에 때문에 객체가 움직이지 않게 [fixed]하기위한 처리
    scrub: true,//스크롤이 발생하면 미리 대상 객체를 부드럽게 처리하기 준비해라

})

// -------------------------------------------------------------------------
const project = gsap.timeline();
project.from("#project h2", {
    scale: 5,
    duration: 1,
    y: 1000
})
project.fromTo(".proj1", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 })
    .fromTo(".proj2", { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 1 })
    .fromTo(".proj3", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 })
    .fromTo(".proj4", { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 1 })
    .fromTo(".proj5", { opacity: 0, y: 200 }, { opacity: 1, y: 0, duration: 1 });
    // .fromTo(".proj6", { opacity: 0, y: -200 }, { opacity: 1, y: 0, duration: 1 });
    // .fromTo(".proj7", { opacity: 0, y: 200 }, { opacity: 1, y: 0, duration: 1 });
    // .fromTo(".proj8", { opacity: 0, y: -200 }, { opacity: 1, y: 0, duration: 1 });
    // .fromTo(".proj9", { opacity: 0, y: 300 }, { opacity: 1, y: 0, duration: 1 });
    // .fromTo(".proj10", { opacity: 0, y: -300 }, { opacity: 1, y: 0, duration: 1 });


ScrollTrigger.create({
    animation: project,
    trigger: "#project",
    start: "top top",
    end: "+=3000",
    scrub: true,
    pin: true,
    anticipatePin: 1,

});        
// -------------------------------------------------------------------------
const work = gsap.timeline();
work.from('#work .t1', { opacity: 0, duration: 1, y: 50 }, "+=1")
  .from('#work .t2', { opacity: 0, duration: 1, y: 50 }, "+=1")
  .from('#work .t3', { opacity: 0, duration: 1, y: 50 }, "+=1")
  .from('#work .t4', { opacity: 0, duration: 1, y: 50 }, "+=1")
  .from('#work .t5', { opacity: 0, duration: 1, y: 50 }, "+=1")
 

 
ScrollTrigger.create({
  animation: work,
  trigger: "#work",
  start: "top top",
  end: "+=6000",  
  scrub: true,
  pin: true,
  anticipatePin: 1,
  markers: true
});
