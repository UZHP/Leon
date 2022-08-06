var list = document.querySelector(".headerList");
var icon = document.querySelector(".icon");

icon.onclick = function () {
    if (list.className == "headerList transition") {
        list.classList.add("show");
    } else {
        list.classList.remove("show")
    }
    if (icon.className == "icon") {
        icon.classList.add("clicked");
    } else {
        icon.classList.remove("clicked")
    }
    // if (icon.className == "icon") {
    //     icon.classList.add("cancel");
    //     icon.classList.remove("icon")
    // } else {
    //     icon.classList.remove("cancel")
    //     icon.classList.add("icon")
    // }
};

var loader = document.querySelector(".loader");

window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disappear")
};