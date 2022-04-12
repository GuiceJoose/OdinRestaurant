import phone from './images/phone.svg';
import address from './images/address.svg';
import hours from './images/hours.svg';

function contactPage() {
    const contactTab = document.createElement('div');
    contactTab.classList.add('contactTab');

    const contactHeader = document.createElement('h2');
    contactHeader.textContent = 'Contact Us';

    const contactForm = document.createElement('form');
    const name = document.createElement('input')
    name.classList.add('textinput');
    name.type = 'text';
    name.placeholder = 'Name';
    name.id = 'nameinput';
    const email = document.createElement('input')
    email.classList.add('textinput');
    email.type = 'email';
    email.placeholder = 'Email';
    email.id = 'emailinput';
    const message = document.createElement('textarea');
    message.classList.add('message');
    message.placeholder = 'Write us a message!';

    const hoursIcon = document.createElement('img');
    hoursIcon.src = hours;
    hoursIcon.width = 20;

    const locationIcon = document.createElement('img');
    locationIcon.src = address;
    locationIcon.width = 20;

    const phoneIcon = document.createElement('img');
    phoneIcon.src = phone;
    phoneIcon.width = 20;

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contactInfo');

    const contactHours = document.createElement('div');
    contactHours.appendChild(hoursIcon);
    const contactHoursText = document.createElement('p');
    contactHoursText.innerHTML = 'Monday-Friday: 11am-2pm <br>Saturday-Sunday: Closed';
    contactHours.appendChild(contactHoursText);

    const contactAddress = document.createElement('div');
    contactAddress.appendChild(locationIcon);
    const contactAddressText = document.createElement('p');
    contactAddressText.textContent = 'In the woods behind the dump';
    contactAddress.appendChild(contactAddressText);

    const contactNumber = document.createElement('div');
    contactNumber.appendChild(phoneIcon);
    const contactNumberText = document.createElement('p');
    contactNumberText.textContent = '(555)-DOG-FOOD';
    contactNumber.appendChild(contactNumberText);


    

    contactInfo.append(contactHours, contactAddress, contactNumber);
    contactForm.append(name, email, message);
    contactTab.append(contactHeader, contactInfo, contactForm);
    content.appendChild(contactTab);
}

export { contactPage };