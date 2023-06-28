'use strict';

// KONSTANTEN / VARIABLEN
const elements = {};

// FUNKTIONEN
const domMapping = () => {
    elements.main = document.querySelector('main');
    elements.btnUpdate = document.querySelector('#btnUpdate');
    elements.btnUpdateDate = document.querySelector('#btnUpdateDate');
    elements.btnUpdateDay = document.querySelector('#btnUpdateDay');
}


const updateClock = (part = 'all') => {
    // fetch() ist die moderne Syntax für Ajax
    // Die Anfrage enthält den Parameter "part", der bestimmt, welcher Teil der Zeit zurückgegeben werden soll
    fetch(`/servertime?part=${part}`).then(
        res => res.text()
    ).then(
        res => elements.main.innerHTML = res
    ).catch(
        console.warn
    )
}

const appendEventListener = () => {
    elements.btnUpdate.addEventListener('click', () => updateClock('all'));
    elements.btnUpdateDate.addEventListener('click', () => updateClock('date'));
    elements.btnUpdateDay.addEventListener('click', () => updateClock('day'));
}

const init = () => {
    domMapping();
    appendEventListener();
    updateClock();
}

// INIT
init();