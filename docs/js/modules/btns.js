'use strict'
export function goByButtons() {
    class Section {
        constructor(pos,btn){
            this.pos = document.querySelector(pos);
            this.btn = document.querySelector(btn);
            this.goToSection();
        }
        goToSection() {
            this.btn.addEventListener('click', () => {
                this.pos.scrollIntoView({block: "start", behavior: "smooth"});
            });
        }
    }
    const about = new Section('.about','.info__about');
    const portfolio = new Section('.portfolio','.info__portfolio');
}