import { dateInfo } from './dateParser.js'
import {CATEGORY_1, CATEGORY_2, CATEGORY_3, CATEGORY_4} from './mockData.js'
CATEGORY_1.forEach(({id, img, cardName, date}) => {

})

const category = document.querySelectorAll('.nav__link')
const inactive_cat = document.querySelectorAll('.card__item')
category.forEach(link => {
    link.addEventListener('click', function(event){
        let currentLink = link
        let categoryId = currentLink.getAttribute('data-tab')
        console.log(categoryId)
        let currentCat = document.querySelector(categoryId)
        
        //console.log(currentCat)
        
        category.forEach(link => {link.classList.remove('active')})
        inactive_cat.forEach(catContent => {catContent.classList.add('inactive-cat')})

        currentLink.classList.add('active')
        currentCat.classList.remove('inactive-cat')
    })
})



