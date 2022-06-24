window.onload = function () {
    document.querySelector('#menu').addEventListener('click', () => {
        document.querySelector('nav ul').classList.toggle('showmenu')
    })
}