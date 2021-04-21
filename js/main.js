
var colors = [];
function init(lastname) {
    var len = lastname.length * 2;
    var mainTag = document.getElementsByTagName("main")[0];
    for (var i = 0; i < len; i++) {
        mainTag.appendChild(creatElement(i));
    }
    mainTag.addEventListener("click", onElementClick);
}
function creatElement(id) {
    var element = document.createElement("div");

    colors.push("#" + Math.random().toString(16).slice(2, 8).toUpperCase())
    element.style.backgroundColor = colors[id];
    element.id = id;
    if (id === 0) {
        var plusSign = document.createElement("div");
        plusSign.id = 0;
        plusSign.className = "plus-sign";
        element.classList.add("plus");
        element.appendChild(plusSign);
    } else if ((id + 1) % 3 === 0) {
        var starSign = document.createElement("div");
        starSign.className = "star-sign";
        element.classList.add("star");
        element.appendChild(starSign);
    }
    return element;
}
function onElementClick(event) {
    console.log(event.target);
    if (event.target.id === "0") {
        var mainTag = document.getElementsByTagName("main")[0];
        mainTag.appendChild(creatElement(colors.length));
        return;
    }
    if (event.target.classList.contains("bg-img")) {
        event.target.style.backgroundColor = colors[event.target.id];
        event.target.classList.remove("bg-img");
        if((event.target.id+1)%3===0){
        var starSign = document.createElement("div");
        starSign.className = "star-sign";
        event.target.classList.add("star");
        event.target.appendChild(starSign);
        }
        return;
    }
    event.target.style.backgroundColor = "white";
    event.target.classList.add("bg-img");
    if (event.target.classList.contains("star")){
        event.target.classList.remove("star");
        event.target.innerHTML = "";
    }
}