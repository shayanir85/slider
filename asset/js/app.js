const arr = [
    "asset/img/pic1.jpg",
    "asset/img/pic2.jpg",
    "asset/img/pic3.jpg"
];
let pic = document.querySelector('.Img')
let label = document.querySelector('label')
let Bullets = document.querySelector('.Bullet')
let i = 0;
label.innerHTML = `${i + 1}/3`
function next() {
    console.log(i)
    if (i >= arr.length - 1) {
        i = 0;
        pic.src = arr[i];
        label.innerHTML = `${i + 1}/3`
    } else {
        i++;
        pic.src = arr[i];
        label.innerHTML = `${i + 1}/3`
    }
}
function perivous() {
    console.log(i)
    if (i <= 0) {
        i = 2
        pic.src = arr[i];
        label.innerHTML = `${i + 1}/3`
    } else {
        i--;
        pic.src = arr[i];
        label.innerHTML = `${i + 1}/3`
    }
}
Bullets.forEach((index) => {
        Bullets[i].className = Bullets[i].className.replace(" active", "");
})
arr.forEach((element, index) => {
    console.log(element, index);

});