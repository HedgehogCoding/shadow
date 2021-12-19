$(function () {
    var messages = [],
        index = 0;

    messages.push('boy');
    messages.push('girl');
    messages.push('anyone else');

    var messages2 = [],
        index = 0;

    messages2.push('boys');
    messages2.push('girls');
    messages2.push('anyone else');

function cycle() {
    document.getElementById("changingtext").innerHTML = messages[index];
    document.getElementById("changingtext2").innerHTML = messages2[index];
    index++;

    if (index === messages.length) {
        index = 0;
    }

    setTimeout(cycle, 1000);
}

cycle();
});
