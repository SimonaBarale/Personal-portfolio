function changeBackground(img1, img2) {

    var div = document.querySelector('.frame-mobile');
    div.style.background = "url('" + img1 + "') no-repeat center / auto 100%";

    var i = 1;
    setInterval(displayNextImage, 2000);

    div = document.querySelector('.frame');
    div.style.background = "url('" + img1 + "') no-repeat center / auto 100%";

    function displayNextImage() {
        var div = document.querySelector('.frame');
        if (i == 1)
            div.style.background = "url('" + img2 + "') no-repeat center / auto 100%";
        else if (i == 0)
            div.style.background = "url('" + img1 + "') no-repeat center / auto 100%";
        i = i == 1 ? 0 : 1;
    }

}

