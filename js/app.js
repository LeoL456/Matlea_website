function version() {
    var tag = document.createElement("p");
    var text = document.createTextNode("Version 1.1");
    tag.appendChild(text);
    var element = document.getElementById("footer");
    element.appendChild(tag);
}

function load() {
    version();
}