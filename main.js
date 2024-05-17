const html = document.querySelector('html')
const toggle = document.querySelector('#flexSwitchCheckDefault')
const dkmode = (e) => {
    if(html.hasAttribute("data-bs-theme") == true){
        html.removeAttribute("data-bs-theme")
    } else {
        html.setAttribute("data-bs-theme", "dark")
    }    
}

toggle.addEventListener('click', dkmode)
