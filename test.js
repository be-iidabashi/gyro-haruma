// // let x = 5;
// // let y = 10 * x;

// // if (x < 10) {
// //     y = 20;
// // }

// // for (let i = 0;i <= 10;i++) {
// //     console.log(i);
// // }

// // let Array = [1, 2, 3, 4, 5]
// // Array.forEach((i) => {
// //     console.log(i);
// // })

// function cal(x, y, h) {
//     m = (x + y) * h / 2
//     return m
// }


// let A = {
//     name: "jin",
//     age: 21,
//     greet() {
//         console.log(this.name, this.age)
//     },
// }

// console.log(A.greet())

const button = document.getElementById("myButton");
const aaaa = document.getElementById("aaaa");
// const button2 = document.getElementById("Button2");

let num = 0;
button.addEventListener(
    "click",
    function () {
        console.log("clicked")
        num += 1;
        aaaa.innerHTML = num;
    },
);