

/*  Cerca nel documento un tag html che abbia id = #resize 
    Applica oppure toglie la classe .active a tale elemento    
*/

function toggleMenu() {
    var menu = document.querySelector('#resize');
    menu.classList.toggle('active');
}
