function delay() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(delay, 1000);
