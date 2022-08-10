'use strict'
import {navBar__offOn} from './modules/nav-bar.js'
import {setProgressBar} from './modules/bar.js'
import {goByButtons} from './modules/btns.js'
document.addEventListener('DOMContentLoaded', () => {
    navBar__offOn();
    setProgressBar();
    goByButtons();
})