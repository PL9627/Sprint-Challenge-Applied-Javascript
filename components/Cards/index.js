// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(cardInfo => {
        const cardData = Object.values(cardInfo.data.articles);
        console.log(cardData);

        cardData.map(item => {
            item.map(item2 => {
                cardsContainer.appendChild(createArticles(item2))
            });
        });
    });

function createArticles(cardInfo) {
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    const newHeadline = document.createElement('div');
    newHeadline.classList.add('headline');
    newHeadline.textContent = cardInfo.headline;

    const newAuthor = document.createElement('div');
    newAuthor.classList.add('author');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const newImg = document.createElement('img');
    newImg.src = cardInfo.authorPhoto;

    const authorsName = document.createElement('span');
    authorsName.textContent = `By: ${cardInfo.authorName}`;

    newCard.appendChild(newHeadline);
    newCard.appendChild(newAuthor);
    newAuthor.appendChild(imgContainer);
    imgContainer.appendChild(newImg);
    newAuthor.appendChild(authorsName);

    return newCard;
}