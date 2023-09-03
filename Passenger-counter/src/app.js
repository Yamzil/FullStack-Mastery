
let counter = 0;
let countStr = counter + " - "

function increament() {
    let count = document.getElementById("count");
    counter += 1;
    count.innerText = counter;
    countStr = counter + " - ";
}

function save() {
    var save = document.getElementById("save-logs")
    save.innerText += " " + countStr
    count.innerText = 0;
    counter = 0;
}