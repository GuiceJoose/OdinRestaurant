import larrysnow from './images/larrysnow.png'
import larryfirewood from './images/larryfirewood.png'
import larrybullystick from './images/larrybullystick.png'
import larrytreebranch from './images/larrytreebranch.png'

function menuPage() {
    const menuTab = document.createElement('div');
    menuTab.classList.add('menuTab');

    const menuHeader = document.createElement('h2');
    menuHeader.textContent = 'Current Menu';

    const item1 = document.createElement('div');
    const item1header = document.createElement('h3');
    item1header.textContent = 'Snow'
    const item1image = document.createElement('img');
    item1image.src = larrysnow;
    const item1text = document.createElement('div');
    item1text.classList.add('item1');
    item1text.textContent = 'Fresh, fluffy snow served directly on the ground. Get it while it\'s cold!';

    item1.append(item1header, item1image, item1text);
    
    const item2 = document.createElement('div');
    const item2header = document.createElement('h3');
    item2header.textContent = 'Firewood'
    const item2image = document.createElement('img');
    item2image.src = larryfirewood;
    const item2text = document.createElement('div');
    item2text.classList.add('item2');
    item2text.textContent = 'Your choice of dry-aged maple, birch, or oak firewood.';

    item2.append(item2header, item2image, item2text);

    const item3 = document.createElement('div');
    const item3header = document.createElement('h3');
    item3header.textContent = 'Bully Stick'
    const item3image = document.createElement('img');
    item3image.src = larrybullystick;
    const item3text = document.createElement('div');
    item3text.classList.add('item3');
    item3text.textContent = 'Everyone\'s favorite to-go item, the portable, stinky, and chewy bully stick';

    item3.append(item3header, item3image, item3text);

    const item4 = document.createElement('div');
    const item4header = document.createElement('h3');
    item4header.textContent = 'Tree Branch Salad'
    const item4image = document.createElement('img');
    item4image.src = larrytreebranch;
    const item4text = document.createElement('div');
    item4text.classList.add('item4');
    item4text.textContent = 'On a diet? Try our low-calorie tree branch salad. Currently available in most coniferous varieties.';

    item4.append(item4header, item4image, item4text);

    menuTab.append(menuHeader, item1, item2, item3, item4);

    
    content.appendChild(menuTab);
}

export { menuPage };