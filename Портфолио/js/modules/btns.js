'use strict'
export function goByButtons() {
    const about = {
        section: document.querySelector('.about'),
        btn: document.querySelector('.info__about')
    }
    const portfolio = {
        section: document.querySelector('.portfolio'),
        btn: document.querySelector('.info__portfolio')
    }
    const parts = [about,portfolio];
    parts.forEach(i => {
        function goToSection() {
            i.section.scrollIntoView({block: "start", behavior: "smooth"});
        }
        i.btn.addEventListener('click', goToSection);
    });
}