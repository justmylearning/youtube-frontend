var menuToggle = false;
function toggleMenu(){
    if(menuToggle){
        document.getElementsByTagName('body')[0].classList.remove('overleap');
        document.getElementsByClassName('container')[0].classList.remove('aside-opened');
        document.getElementsByTagName('aside')[0].classList.remove('opened');
    }
    else{
        document.getElementsByTagName('body')[0].classList.add('overleap');
        document.getElementsByClassName('container')[0].classList.add('aside-opened');
        document.getElementsByTagName('aside')[0].classList.add('opened');
    }
    menuToggle = !menuToggle;
}

document.getElementById('toggle-menu').addEventListener('click', (e) => {
    toggleMenu();
});

document.addEventListener( "click", (event) => {
    var element = event.target;
    if(element.tagName == 'BODY' && element.classList.contains("overleap")){
        toggleMenu();
    }
} );