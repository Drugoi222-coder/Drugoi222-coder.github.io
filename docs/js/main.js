'use strict'
import {navBar__offOn} from './modules/nav-bar.js'
import {setProgressBar} from './modules/bar.js'
import {goByButtons} from './modules/btns.js'
import {fetchRequest} from './modules/fetch.js'
document.addEventListener('DOMContentLoaded', () => {
    navBar__offOn();
    setProgressBar();
    goByButtons();
    fetchRequest();
})