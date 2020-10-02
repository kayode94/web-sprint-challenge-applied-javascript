// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerContainer = document.querySelector('.header-container')
// console.log(headerContainer)
function Header() {
    //creating the elements
    const articleHeader = document.createElement('div')
    const articleDate = document.createElement('span')
    const paperTitle = document.createElement('h1')
    const temperature = document.createElement('span')
    //setting class names, attributes and text
    articleHeader.classList.add('header')
    articleDate.classList.add('date')
    articleDate.textContent = 'MARCH 28, 2020'
    temperature.classList.add('temp')
    temperature.textContent = '98°'
    paperTitle.textContent = 'Lambda Times'
    //appending elements to the dom
    articleHeader.appendChild(articleDate)
    articleHeader.appendChild(paperTitle)
    articleHeader.appendChild(temperature)

    return articleHeader
}

headerContainer.appendChild(Header())