import { pageLoad } from './pageLoad.js';
import { homePage } from './home.js';
import { menuPage } from './menu.js';
import { contactPage } from './contact.js';
import css from './style.css';

pageLoad();
homePage();
const homeButton = document.querySelector('button');
homeButton.classList.add('clicked');


const navButtons = document.querySelectorAll('button');
navButtons.forEach(button => button.addEventListener('click', navigateClick))

function navigateClick(e) {
    
    content.innerHTML = '';
    navButtons.forEach(button => button.classList.remove('clicked'));
    switch (e.target.textContent) {
        case 'Home':
            homePage();
            e.target.classList.add('clicked');
            break;
        case 'Menu':
            menuPage();
            e.target.classList.add('clicked');
            break;
        case 'Contact':
            contactPage();
            e.target.classList.add('clicked');
            break;
    }
    
    
}


