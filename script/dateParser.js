function dateInfo(){
    const monthName = ['Января','Февраля','Марта',
                        'Апреля','Мая','Июня',
                        'Июля','Августа','Сентября',
                        'Октября','Ноября','Декабря']
    const weekDays = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота',]
    const numweek = ['1', '2', '3', '4', '5'];
    let date = randomDate(new Date(2020, 0, 1), new Date())
    return  weekDays[date.getDay()] + ', '
            + numweek[Math.floor(date.getDate() / 7)] 
            + ' неделя ' + monthName[date.getMonth()] + ' ' + date.getFullYear() + ' года'
}

function randomDate(from, to){
    return new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime()))
}

export {dateInfo}
