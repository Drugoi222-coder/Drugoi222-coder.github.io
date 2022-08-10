'use strict';
export function setProgressBar() {
    const percentBar = document.querySelectorAll('.bar__percent'),
            progressBar = document.querySelectorAll('.bar__progress')
    for (let i = 0; i < progressBar.length; i++) {
        progressBar[i].style.width = percentBar[i].textContent;
    }
}