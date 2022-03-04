/* ÄNDRA BAKGRUNDSFÄRG EASTEEGG */
function clickEvent(e) {
    var targ;
    if (!e) {
      var e = window.event;
    }

    if (e.target) {
      targ = e.target;
    } 
    else if (e.srcElement) {
      targ = e.srcElement;
    }

    var tname;
    tname = targ.tagName;
    console.log(tname);

    if (tname == "H1") {
      document.body.style.background = "grey"
    }
}

/* 1337 EASTEREGG. */
function elite() {     

  document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    let buffer = [];
    let lastKeyTime = Date.now();

    document.addEventListener("keydown", (event) => {
        const charList = "0123456789";
        const key = event.key.toLowerCase();

        if (charList.indexOf(key) === -1) return;

        const currentTime = Date.now();

        if(currentTime - lastKeyTime > 1000) {
            buffer = [];
        }

        buffer.push(key);
        lastKeyTime = currentTime;
        if(buffer[0] === "1" && buffer[1] === "3" && buffer[2] === "3" && buffer[3] === "7") {
            alert("VÄLKOMMEN TILL ELITEN!");
        }
        console.log(buffer);
    });
});
}