import { dateInfo } from './dateParser.js'
import {CATEGORY_1, CATEGORY_2, CATEGORY_3, CATEGORY_4} from './mockData.js'



CATEGORY_1.forEach(({id, img, cardName, date}) => {

})

const category = document.querySelectorAll('.nav__link')

category.forEach(link => {
    link.addEventListener('click', function(event){
        let currentLink = link
        let categoryId = currentLink.getAttribute('data-cat')
        console.log(categoryId)
        let currentCat = document.querySelector(categoryId)
        console.log(currentCat)
        category.forEach(link => {link.classList.remove('active')})
        currentCat.classList.add('active')
    })
})