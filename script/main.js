
import {renderContent} from './mock.js'
let getCategoryData = ''
let catName = ''
const categories = document.querySelectorAll('.nav__link')
navListener(categories)
const menuNav = document.querySelectorAll('.menu-categories')
navListener(menuNav)
const route = (event) => {
    window.history.pushState({}, '', event.target.href)
    pseudoRouter()
}

const routers = {
    '/':          '../categories/main.html',
    '/category1': '../categories/categories.html',
    '/category2': '../categories/categories.html',
    '/category3': '../categories/categories.html',
    '/category4': '../categories/categories.html'
}

const pseudoRouter = async () => {
    const path = window.location.pathname
    const html = await fetch(routers[path]).then((data) => data.text())
    const blockName = document.querySelector('.content__name')
    document.querySelector('.content').innerHTML = html
    if(path != '/'){
        const contentCat = renderContent(getCategoryData, catName)
        blockName.textContent = catName
        document.querySelector('.content').insertAdjacentHTML('afterbegin',contentCat) 
    }else{
        blockName.textContent = ''
    }
    
}

window.onpopstate = pseudoRouter
window.route = route
pseudoRouter()


function navListener(categories){
    categories.forEach(category => {
        category.addEventListener('click', event => {
            event.preventDefault()
            getCategoryData = category.getAttribute('data-tab')
            catName = category.textContent
            if(event.target.tagName === 'A') route(event)
        })
    })
}
