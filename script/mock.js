import {CATEGORY_1, CATEGORY_2, CATEGORY_3, CATEGORY_4} from './mockData.js'

 function renderContent (dataCat) {
    let itemBlock = []
    const mockData = sendMockData(dataCat)
    mockData.forEach(({img, title, date}) => {
       const mockItem = `
        <div class = "content__item">
            <img class = "item-img" src="${img}">
            <span>${title}</span>
            <span>${date}</span>
            <button class = "item__btn buy__btn">Купить</button>
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