const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',  
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'icecream',
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
cardArray.sort(() => 0,5 - Math.random())

const gridDisplay = document.querySelector('#grid')
 
function createBoard() {
    for (let i = 0; i < 10; 1++) {
      const card = document.createElement('img')
      card.setAttribute('src', '/imags/blank.png')
      card.setAttribute('data-id', i)
      gridDisplay.append(card)
    }
}

createBoard()

