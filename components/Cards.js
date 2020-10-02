import axios from 'axios'
// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const cardsContainer = document.querySelector('.cards-container')

function cardMaker (object){
    //creating the elements
    const mainCard = document.createElement('div')
    const cardHeadline = document.createElement('div')
    const cardAuthor = document.createElement('div')
    const imageContainer = document.createElement('div')
    const authorImage = document.createElement('img')
    const authorsName = document.createElement('span')
    //setting class names, attributes and text
    mainCard.classList.add('card')
    cardHeadline.classList.add('headline')
    cardAuthor.classList.add('author')
    imageContainer.classList.add('img-container')
    cardHeadline.textContent = object.headline
    authorImage.src = object.authorPhoto
    authorsName.textContent = object.authorName
    //appending elements to the DOM
    mainCard.append(cardHeadline)
    mainCard.append(cardAuthor)
    cardAuthor.append(imageContainer)
    cardAuthor.append(authorsName)
    imageContainer.append(authorImage)
    return mainCard
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response=>{
    const lambdaArticles = Object.entries(response.data.articles)
    console.log(lambdaArticles)
    lambdaArticles.forEach(article=>{
        article[1].forEach(item=>{
            const freshCard = cardMaker(item)
            cardsContainer.append(freshCard)
        })
    })
})
.catch(error=>{
    console.log(error)
})