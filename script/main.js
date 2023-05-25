import { dateInfo } from './dateParser.js'

let date = dateInfo()
console.log(date)
const categories = document.querySelectorAll('.nav__link')
console.log(categories)
console.log(categories.values)
categories.forEach( category => {
    category.addEventListener('click', createCard)
})
function createCard (event){
    /*console.log(event.target.dataset.number)
    console.log(event.target.textContent)*/
    let cardSet = event.target.dataset.number
    for(let item = 0; item < cardSet; item++){
        const div = document.createElement('div')
        div.classList.add('content__item')
        const content = document.querySelector('.content')
        content.appendChild(div)
        const cardItem = `
            <div class="content__item">
                <img class="item__img" alt="img">
                <h3>Подпись ${item}</h3>
                <h3>${dateInfo()}</h3>
                <button>Купить</button>
            </div>
        `
        //content.innerHTML = cardItem
        content.insertAdjacentHTML('afterbegin', cardItem)
        const img = document.querySelector('.item__img')
        img.src = 'https://placebear.com/200/200'
        //console.log(item)
    }
}



