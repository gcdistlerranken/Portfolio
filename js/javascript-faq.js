var $ = function (id) {
    return document.getElementById(id);
};

window.onload = function () {

    var faqs = $("faqs");
    var h2Elements = faqs.getElementsByTagName("h2");

    function showThisAndHideAll() {
        var h2;
        for (var i = 0; i < h2Elements.length; i++) {
            h2 = h2Elements[i];
            if (h2 == this) {
                if (!h2.hasAttribute("class")) {
                    hideThis(h2);
                } else {
                    showThis(h2);
                }
            } else {
                hideThis(h2);
            }
        }
    }

    function showThis(h2) {
        var div = h2.nextElementSibling;
        h2.removeAttribute("class")
        div.setAttribute("class", "open"); // set attribute these classes are in the css file
    }

    function hideThis(h2) {
        var div = h2.nextElementSibling;
        h2.setAttribute("class", "minus") // set attribute ie class and minus
        div.removeAttribute("class");
    }

    for (var i = 0; i < h2Elements.length; i++) {
        h2Elements[i].onclick = showThisAndHideAll;
        hideThis(h2Elements[i]);
    }

    h2Elements[0].firstChild.focus();
};
