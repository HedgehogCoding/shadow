let randomnum = Math.floor(Math.random() * 4);
let randomgender, randomcolour;

if (randomnum == 0) {
    randomgender = "boy";
    randomcolour = "#039dfc";
}
if (randomnum == 1) {
    randomgender = "girl";
    randomcolour = "#ff5efc";
}
if (randomnum == 2) {
    randomgender = "agender person";
    randomcolour = "#000000";
}
if (randomnum == 3) {
    randomgender = "bigender person";
    randomcolour = "#ff0000";
}

document.getElementById("changingtext").innerHTML = randomgender
document.getElementById("changingtext").style.color = randomcolour
document.getElementById("changingtext2").innerHTML = randomgender + "s"
document.getElementById("changingtext2").style.color = randomcolour