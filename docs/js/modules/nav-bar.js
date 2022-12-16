'use strict';
export function navBar__offOn() {
    const hamburger = document.querySelector('.info__hamburger'),
        navBar = document.querySelector('.nav-bar'),
        navPanel = document.querySelector('.nav-bar__panel'),
        backgroundColor = document.querySelector('.nav-bar__background'),
        listItems = document.querySelectorAll('.nav-bar__item'),
        nameItems = Array.from(document.querySelectorAll('.info__name')).slice(1);
    function navBarClassListToggle() {
        navPanel.classList.toggle('nav-bar__panel_on');
        backgroundColor.classList.toggle('nav-bar__background_on');
    }
    function navBar__turnOff () {
        document.body.style.overflowY = 'visible';
        navBarClassListToggle();
    }
    function navBar__turnOn () {
        navBarClassListToggle();
        document.body.style.overflowY = 'hidden';
        document.addEventListener('keydown', function escape(e) {
            if (e.key == 'Tab') {
                e.preventDefault();
            }
            if (e.key == 'Escape'){
                document.removeEventListener('keydown', escape);
                navBar__turnOff();
            }
        })
    }
    hamburger.addEventListener('click', navBar__turnOn);
    navBar.addEventListener('click', (e) => {
        if (e.target.parentElement.classList[0] == 'nav-bar__close' || e.target.classList[0] == 'nav-bar__background') {
            navBar__turnOff()
        }
    })
    listItems.forEach( (item,i) => {
        item.addEventListener('click', (e) => {
            navBar__turnOff();
            nameItems[i].scrollIntoView({block: "start", behavior: "smooth"});
        })
    });
}