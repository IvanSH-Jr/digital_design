function formListener(){
    const formAction = document.querySelectorAll('.buy__btn')
    const formOpen = document.querySelector('.form-wrapper')
    const form = document.querySelector('.my-form')
    const closeForm = document.querySelector('.form-close__img')
    const buyBtn = document.querySelector('.form-buy__btn')
    formAction.forEach(btn => {
        btn.addEventListener('click', function(e){
           e.preventDefault()
            formOpen.classList.add('open')
            form.classList.add('open')
            closeForm.addEventListener('click', () => {
                formOpen.classList.remove('open')
                form.classList.remove('open')
            })
        })
    })

    document.addEventListener('click', (e) => {
        if(e.target === formOpen){
            formOpen.classList.remove('open')
            form.classList.remove('open')
        }
    })

    buyBtn.addEventListener('click', () =>{
        
        alert('Магия! Вы купили это!!!')
    })
}

export {formListener}