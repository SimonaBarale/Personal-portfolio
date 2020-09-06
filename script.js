var loaded = false;
var i = 0;

var img1;
var img2;

function changeBackground(img1, img2) {

    this.img1 = img1;
    this.img2 = img2;

    /*var classe1 = document.createElement('style');
    classe1.innerHTML =
        ".frame.img1 {" +
        "background:url('" + img1 + "') no-repeat center / auto 100%;" +
        "}";

    var classe2 = document.createElement('style');
    classe2.innerHTML =
        ".frame.img2 {" +
        "background:url('" + img2 + "') no-repeat center / auto 100%;" +
        "}";

    var ref = document.querySelector('script');

    ref.parentNode.insertBefore(classe1, ref);
    ref.parentNode.insertBefore(classe2, ref);
*/

    var div = document.querySelector('.frame-mobile');
    div.style.background = "url('" + img1 + "') no-repeat center / auto 100%";

    i = 1;
    setInterval(displayNextImage, 2000);

    div = document.querySelector('.frame');
    div.style.background = "url('" + img1 + "') no-repeat center / auto 100%";
    //images.classList.toggle('img1');

    function displayNextImage() {
        var div = document.querySelector('.frame');
        if (i == 1)
            div.style.background = "url('" + img2 + "') no-repeat center / auto 100%";
        else if (i == 0)
            div.style.background = "url('" + img1 + "') no-repeat center / auto 100%";
        i = i == 1 ? 0 : 1;
    }
}

