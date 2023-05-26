import { dateInfo } from './dateParser.js'
import {CATEGORY_1, CATEGORY_2, CATEGORY_3, CATEGORY_4} from './mockData.js'
/*const categories = document.querySelectorAll('.nav__link')

categories.forEach(category => {
    category.addEventListener('click', function(event){

        let categoryId = category.getAttribute('data-tab')
        switch(categoryId) {
            case '#cat1': contentGenerator(CATEGORY_1, category.textContent);
            break;

            case '#cat2': contentGenerator(CATEGORY_2, category.textContent);
            break;

            case '#cat3': contentGenerator(CATEGORY_3, category.textContent);
            break;

            case '#cat4': contentGenerator(CATEGORY_4, category.textContent);
            break;

            default:
                alert('Нет такой категории!')
        }
    })
})

function contentGenerator (mockCategory, categoryName){
    const blockContent = document.querySelector('.content')
    const blockName = document.createElement('h1')
    blockName.classList.add('content__name')
    blockName.textContent = categoryName
    blockContent.insertAdjacentElement('beforebegin', blockName)
    mockCategory.forEach(({img, title, date}) => {
        const itemBlock = `
        <div class = "content__item">
            <img class = "item-img" src="${img}">
            <span>${title}</span>
            <span>${date}</span>
        </div>
    `
    blockContent.insertAdjacentHTML('beforeend', itemBlock)
    })
    

}
*/
 function renderContent (dataCat) {
    let itemBlock = []
    const mockData = sendMockData(dataCat)
    mockData.forEach(({img, title, date}) => {
       const mockItem = `
        <div class = "content__item">
            <img class = "item-img" src="${img}">
            <span>${title}</span>
            <span>${date}</span>
            <button class = item__btn>Купить</button>
        </div>
    `
    itemBlock.push(mockItem)
    })
    
    return itemBlock
}

function sendMockData(dataCat){
    switch(dataCat) {
        case '#cat1': return CATEGORY_1;
    
        case '#cat2': return CATEGORY_2;

        case '#cat3': return CATEGORY_3;

        case '#cat4': return CATEGORY_4;

        default:
            alert('Нет такой категории!')
    }
}
export {renderContent}