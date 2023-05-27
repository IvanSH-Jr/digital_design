const themeSwitchers = document.querySelectorAll('.change-theme')
let activeTheme = localStorage.getItem('theme')

themeSwitchers.forEach(switcher => {
    switcher.addEventListener('click', function(){
        applyTheme(this.dataset.theme)
        localStorage.setItem('theme', this.dataset.theme)
    })
})
if(activeTheme === null){
    applyTheme('light')
}else{
    applyTheme(activeTheme)
}
function applyTheme(themeName){
    let themeUrl = `../style/theme_mode_${themeName}.css`
    document.querySelector('[title = "theme"]').setAttribute('href', themeUrl)
}

