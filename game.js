const cardArray = [
    {
        name: 'fries',
        img: 'images/fries(1).png',  
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger(1).png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog(1).png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'milkshake.png',
    },
    {
       name: 'pizza',
       img: 'image/pizza.png' 
    },
    {
        name: 'fries',
        img: 'images/fries.png',  
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'icecream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'milkshake.png'
    },
    {
       name: 'pizza',
       img: 'image/pizza.png' 
    }
]
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
 
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', '/images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard())
      gridDisplay.appendChild(card)
    }
}

createBoard()

function flipCard() {
    const cardId = this.getAttribute('data-id')
    console.log('clicked', cardId);
}

