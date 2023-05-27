window.addEventListener('scroll', function(){
    const scroll = document.querySelector('.upward')
    scroll.classList.toggle('active', this.window.scrollY > 500)
})

const pushTopBtn = document.querySelector('.upward')
pushTopBtn.addEventListener('click', function(){
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
