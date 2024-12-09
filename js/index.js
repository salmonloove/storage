let links = gsap.utils.toArray('.main_nav li a')
links.forEach((link) => {
  let element = document.querySelector(link.getAttribute('href'))
  console.log(element)
  ScrollTrigger.create({
    trigger: element,
        start: 'top center',
        end: 'bottom center',
        //사용자가 스크롤할 때 특정 섹션이 화면 중앙에 위치하면 
        //해당 내비게이션 링크를 활성화(setActive(link))합니다.
        onToggle: (self) => setActive(link),
      })
      // ----------------------------------------------------
      link.addEventListener('click', (e) => {
        e.preventDefault()
        
        // 최신 애니메이션만이 실행되도록 하여 애니메이션 간의 충돌을 방지합니다.
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: element, // 대상 요소로 스크롤
            offsetY: 50, // 필요하면 약간의 상단 여백 추가
          },
          // overwrite: "auto" 동시에 여러 스크롤 애니메이션이 발생하는 경우,
          overwrite: 'auto',
        })
      })
      // ----------------------------------------------------
      
    })
    //버튼 활성화 비활성화----------------------------------------------------
    function setActive(link) {
      links.forEach((el) => el.classList.remove('on'))
      link.classList.add('on')
      
    }
    const lenis = new Lenis();
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    function openPop(){
      var popup = window.open('http://www.naver.com', '모바일 팝업', 'width=700px,height=800px,scrollbars=yes');
    }
    function openPop2(){
      var popup2 = window.open('./collection/★0820(바리스타룰스)/index.html', '모바일 팝업', 'width=700px,height=800px,scrollbars=yes');
    }
    function openPop3(){
      var popup2 = window.open('http://www.daum.net', '포스터 팝업', 'width=700px,height=800px,scrollbars=yes');
    }
    function openPop4(){
      var popup2 = window.open('http://www.naver.com', '이벤트 팝업', 'width=700px,height=800px,scrollbars=yes');
    }
    //모바일 버전 새창 열기







    //최적화 이전 코드
    // $(function(){
    //     $(document).on('click', 'a[href="#"]', function(e){
    //         e.preventDefault();})
    //         mainPg();
    // })
    
    // function mainPg(){
    //     scroll();
    //     headerLink();
    //     headerMenu();
    //     visual();
    //     mainApp();
    // }
    
    // function scroll(){
    //     let $gotoTop = $('#gotoTop a'); //Top이벤트 위한 gotoTop 변수 선언
    //     let $gnbLi = $('#gnb li');//자동 스크롤 이벤트 위한 gnbLi 변수 선언
    //     let $paging = $('.main_nav');//자동 스크롤 이벤트 위한 paging 변수 선언
    //     let $pagingLi = $('.main_nav li');
    //     let $aboutBox = $('#about-me'); 
    //     let $aboutBar = $('.main #about-me .memo-wrap .ability .ability-list li .skill-bar');
    //     let top = 0, idx;
    //     let posY = [];
    //     for(let i=0; i<9; i++){
    //         posY[i]=($('.con_box').eq(i).offset().top);
    //     }
    
    //     // $aboutBox.addClass('con-off');
    
    //     $pagingLi.on('click', function(){
    //         idx = $(this).index();
    //         $('html,body').animate({scrollTop:(posY[idx])});
    //     })
    //     $(window).on('scroll', function(){
    //         top = $(window).scrollTop();
    
    //         if(top < 900){
    //             $gnbLi.removeClass('on').eq(0).addClass('on');
    //             $gotoTop.removeClass('on');
    //             $paging.removeClass('on');
    //         }else if(top >= 900 && top < 9399){
    //             $gotoTop.addClass('on');
    //             $paging.addClass('on');
    //             $gnbLi.removeClass('on').eq(1).addClass('on');
    //         }else if(top >= 9400) {
    //             $gotoTop.addClass('on');
    //             $gnbLi.removeClass('on').eq(2).addClass('on');
    //             $paging.removeClass('on');
    //             $aboutBox.removeClass('con-off');
    //         }
    
    //         if(top >= 9500){
    //             $aboutBar.removeClass('reset');
    //         }else{
    //             $aboutBar.addClass('reset');
    //         }
            
    
    //         for(let i=0; i<9; i++){
    //             posY[i]=($('.con_box').eq(i).offset().top);
    //             if(top >= (posY[i] - 150)){
    //                 $pagingLi.removeClass('on');
    //                 $pagingLi.eq(i).addClass('on');
    //             }
    //         }
    //     })
    
    //     $gotoTop.on('click', function(){
    //         $('html, body').animate({scrollTop:0},200);
    //     })
    // }
    
      // function headerLink(){
      //     $('nav #gnb li').on('click', function(){
      //         $('nav #gnb li').removeClass('on');
      //         $(this).addClass('on');
      //     })
      // }
      // $gnbLi.on('click', function(){
      //     $('#gnb li').css({"transition":".2s"});
      // })
    //각 메뉴를 클릭하면 클릭된 메뉴 .on + font-weight bold 처리
    
    // // function headerMenu(){
    // //     $('#header .all-menu').on('click', function(){
    // //         $('#menu-wrap').addClass('on');
    // //     })
    // //     $('#menu-wrap i').on('click', function(){
    // //         $('#menu-wrap').removeClass('on');
    // //     })
    // // }
    // // 상세메뉴(햄버거 버튼 클릭하면 나타남)
    // function visual(){
    //   $('#visual').on('mousemove', function(e){
    //         let posX = e.pageX;
    //         let posY = e.pageY;
    //         $('#visual .visual-memo img:nth-child(1)').css({left:100 - (posX/20), opacity:1 - (posX/2000)});
    //         $('#visual .visual-memo img:nth-child(1)').css({bottom:200 - (posY/20)});
    //         $('#visual .visual-memo img:nth-child(2)').css({right:130 - (posX/20), opacity:1 - (posX/2000)});
    //         $('#visual .visual-memo img:nth-child(2)').css({bottom:480 - (posY/10)});
    //     })
        
    //   }
    //visual에서 마우스 움직이면 div도 같이 움직이는 효과

    // function mainApp(){
      //     let $viBtn = $('.main .app .left-box .btn-wrap .btn-top:nth-child(1) a');
      //     let $hrBtn = $('.main .app .left-box .btn-wrap .btn-top:nth-child(2) a');
      //     let $viImg = $('.main .app .right-img .img-wrap img:nth-child(1)');
      //     let $hrImg = $('.main .app .right-img .img-wrap img:nth-child(2)');
      
      //     $hrImg.hide();
      
      //     $hrBtn.on('mouseenter', function(){
        //         $viImg.hide();
        //         $hrImg.fadeIn();
        //     })
        //     $viBtn.on('mouseenter', function(){
    //         $hrImg.hide();
    //         $viImg.fadeIn();
    //     })

    // }
    //app design 해당
