var $ = function (id) {
    return document.getElementById(id);
}
window.onload = function () {
    var listNode = $("image_list");
    var captionNode = $("caption");
    var imageNode = $("main_image");

    var imageLinks = listNode.getElementsByTagName("a");

    var i, image, link;
    for (i = 0; i < imageLinks.length; i++) {
        image = new Image();
        image.src = imageLinks[i].getAttribute("href");

        imageLinks[i].onclick = function (evt) {
            link = this;

            imageNode.src = link.getAttribute("href");
            captionNode.firstChild.nodeValue = link.getAttribute("title");

            if (!evt) {
                evt = window.evt;
            }
            if (evt.preventDefault) {
                evt.preventDefault();
            } else {
                evt.returnFalse = false;
            }
        };
    }

    imageLinks[0].focus();
};
