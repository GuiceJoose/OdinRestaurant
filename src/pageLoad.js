
function pageLoad () {
    const body = document.querySelector('body');
    const content = document.querySelector('#content');
    
    const header = document.createElement('h1');
    header.textContent = 'Legendary Larry\'s Lunchroom'
    body.insertBefore(header, content);

    const navBar = document.createElement('div');
    navBar.classList.add('navBar');

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';

    navBar.append(homeButton, menuButton, contactButton);
    header.appendChild(navBar);
    
    const hours = document.createElement('div');
    hours.classList.add('hours');

    const hoursHeader = document.createElement('h4');
    hoursHeader.textContent = 'Hours';
    hours.appendChild(hoursHeader);

    const hoursText = document.createElement('div');
    hoursText.innerHTML = 'Monday-Friday: 11am - 2pm <br>Saturday-Sunday: Closed';
    hours.appendChild(hoursText);

    const location = document.createElement('div');
    location.classList.add('location');

    const locationHeader = document.createElement('h4');
    locationHeader.textContent = 'Location';
    location.appendChild(locationHeader);

    const locationText = document.createElement('div');
    locationText.textContent = 'In the woods behind the dump'
    location.appendChild(locationText);

    const footer = document.createElement('footer');
    footer.append(hours, location);
    body.appendChild(footer);

}


export { pageLoad };