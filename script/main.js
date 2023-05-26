
import {renderContent} from './mock.js'
let getCategoryData = ''
let catName = ''
const categories = document.querySelectorAll('.nav__link')
categories.forEach(category => {
    category.addEventListener('click', event => {
        event.preventDefault()
        getCategoryData = category.getAttribute('data-tab')
        catName = category.textContent
        if(event.target.tagName === 'A') route(event)
    })
})

const route = (event) => {
    window.history.pushState({}, '', event.target.href)
    handleLocation()
}

const routers = {
    '/':          '../categories/main.html',
    '/category1': '../categories/categories.html',
    '/category2': '../categories/categories.html',
    '/category3': '../categories/categories.html',
    '/category4': '../categories/categories.html'
}

const handleLocation = async () => {
    const path = window.location.pathname
   
    const html = await fetch(routers[path]).then((data) => data.text())
    
    document.querySelector('.content').innerHTML = html
    if(path != '/'){
        const contentCat = renderContent(getCategoryData)
        document.querySelector('.content').insertAdjacentHTML('afterbegin',contentCat) 
    }

}

window.onpopstate = handleLocation
window.route = route
handleLocation()

