let randomnum = Math.floor(Math.random() * 4);
let randomgender, randomgender2, randomcolour;

if (randomnum == 0) {
    randomgender = "boy";
    randomgender2 = "boys";
    randomcolour = "#039dfc";
}
if (randomnum == 1) {
    randomgender = "girl";
    randomgender2 = "girls";
    randomcolour = "#ff5efc";
}
if (randomnum == 2) {
    randomgender = "agender person";
    randomgender2 = "agender people";
    randomcolour = "#000000";
}
if (randomnum == 3) {
    randomgender = "bigender person";
    randomgender2 = "bigender people";
    randomcolour = "#ff0000";
}

document.getElementById("changingtext").innerHTML = randomgender
document.getElementById("changingtext").style.color = randomcolour
document.getElementById("changingtext2").innerHTML = randomgender2
document.getElementById("changingtext2").style.color = randomcolour
