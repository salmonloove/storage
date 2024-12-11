// 메뉴를 클릭하면  애니메이되면서 해당 section으로 움직이기
const listElems = document.querySelectorAll('nav ul li')
const sections = document.querySelectorAll('section')
sections[0].classList.add('on')

listElems.forEach((li) => {
    const link = li.querySelector('a[href^="#sect"]')

    link.addEventListener('click', function (e) {
        e.preventDefault()
        const href = this.getAttribute('href')
        const secTop = document.querySelector(href)

        window.scrollTo({
            top: secTop.offsetTop,
            behavior: 'smooth'
        })

    })

})

sections.forEach((sect, i) => {
    sect.addEventListener('wheel', function (e) {
        e.preventDefault()

        let delta = e.deltaY
        console.log(delta)
        // wheel의 방향이 UP 이고 section의 위치가 첫번째 이면
        if (delta < 0 && i === 0) {
            return
            // wheel의 방향이 down 이고 section의 위치가 마지막 이면
        } 
        if (delta > 0 && i === sections.length - 1) {
            return
        }

        let secTop = delta < 0 ? sect.previousElementSibling : sect.nextElementSibling

        if (secTop) {
            let targetSecTop = secTop.offsetTop
            window.scrollTo({ top: targetSecTop, behavior: 'smooth' })
        }
    })
})

window.addEventListener('scroll', function () {
    let scrollTop = document.documentElement.scrollTop
    sections.forEach((section,i)=>{
        let sectionTop=section.offsetTop
        console.log(sectionTop,i);
        // 조건값이 참인 section의 index를 찾아라
        if(scrollTop>=sectionTop-100){

            for(const li of listElems){li.classList.remove('on')}
            for(const sec of sections){sec.classList.remove('on')}


            listElems[i].classList.add('on')
            sections[i].classList.add('on')
        }
    })
    
})
