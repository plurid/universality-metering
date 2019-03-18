function randomNum() {
    let val = Math.random() < .5 ? -1 : 1;
    return Math.ceil(Math.random() * 1000) * val
}
