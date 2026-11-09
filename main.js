'use strict';

// to activate or deactivate the extentions
var switchContainer = document.getElementById('toggle-switch');
switchContainer.addEventListener('click', () => {
    switchContainer.classList.toggle('active-switch');
})