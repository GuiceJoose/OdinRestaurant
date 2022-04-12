

function homePage() {
    const homeTab = document.createElement('div');
    homeTab.classList.add('homeTab');

    const description = document.createElement('div');
    description.classList.add('description');
    const descriptionHeader = document.createElement('h2');
    descriptionHeader.textContent = 'Welcome!';
    const descriptionText = document.createElement('div')
    descriptionText.textContent = 'Come down to Legendary Larry\'s Lunchroom and try some of our lovely lunch options. Founded in 2022, Legendary Larry\'s Lunchroom is proud to serve all-natural, locally-sourced, seasonal lunch options. Our stinky atmosphere and secluded location will make you feel at home and keep your lunchtime activities secret from your pesky humans\. Whether you\'re a wolfhound, lab, or chi-wow-wow, we\'re sure to have something for you!';
    description.append(descriptionHeader, descriptionText);
    

    homeTab.appendChild(description);

    content.appendChild(homeTab);

}

export { homePage };