// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const newHeader = document.createElement('div');
    newHeader.classList.add('header');

    const newDate = document.createElement('span');
    newDate.classList.add('date');
    newDate.textContent = 'SMARCH 28, 2019';

    const newH1 = document.createElement('h1');
    newH1.textContent = 'Lambda Times';

    const newTemp = document.createElement('span');
    newTemp.classList.add('temp');
    newTemp.textContent = '98°';

    newHeader.appendChild(newDate);
    newHeader.appendChild(newH1);
    newHeader.appendChild(newTemp);

    return newHeader;
}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());