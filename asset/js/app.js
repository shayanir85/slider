const arr = [
    "asset/img/pic1.jpg",
    "asset/img/pic2.jpg",
    "asset/img/pic3.jpg",
    "asset/img/pic4.jpg"
];
let pic = document.querySelector('.Img')
let label = document.querySelector('label')
let Bullets = document.querySelectorAll('.Bullet')
console.log(Bullets);

let i = 0;
label.innerHTML = `${i + 1}/${arr.length}`
function next() {
    console.log(i)
    if (i >= arr.length - 1) {
        i = 0;
        pic.src = arr[i];
        label.innerHTML = `${i + 1}/${arr.length}`
        UpdateBullet()
    } else {
        i++;
        pic.src = arr[i];
        label.innerHTML = `${i + 1}/${arr.length}`
        UpdateBullet()
    }
}
function perivous() {
    console.log(i)
    if (i <= 0) {
        i = arr.length - 1
        pic.src = arr[i];
        label.innerHTML = `${i + 1}/${arr.length}`
        UpdateBullet()
    } else {
        i--;
        pic.src = arr[i];
        label.innerHTML = `${i + 1}/${arr.length}`
        UpdateBullet()
    }
}

function BulletClick(index) {
    i = index
    UpdateBullet()
}

function UpdateBullet() {
    Bullets.forEach((element, index) => {
        element.classList.remove('active');
    })
    Bullets[i].classList.add('active');
    pic.src = arr[i];
}

Bullets.forEach((element, index) => {
    element.addEventListener('click', () => {
        BulletClick(index);
    });
});

arr.forEach((element, index) => {
    console.log(element, index);
});