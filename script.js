let maincontent = document.getElementById("main");
let colorname = document.getElementById("color");
let Button = document.getElementById("btn");

// Button = addEventListener('click',function(){
//     maincontent.style.backgroundColor = "blue";
//     colorname.textContent = "BLUE"
//     colorname.style.backgroundColor = "white"
// })


// this code for rondom uses

// let color = ["#DA7297", "#667BC6", "#F4CE14", "#729762", "#FDFFD2", "#973131", "#4B70F5","#FF6969","#95D2B3","#344C64"];

// Button = addEventListener('click',function(){
//     let randomIndex = Math.floor(Math.random()* color.length)
//     let randomColor = color[randomIndex];
//     maincontent.style.backgroundColor = randomColor;
//     colorname.textContent = "Background color "+ randomColor.toUpperCase();
// })

// this code using loop

let color = ["#DA7297", "#667BC6", "#F4CE14", "#729762", "#FDFFD2", "#973131", "#4B70F5","#FF6969","#95D2B3","#344C64","#34495E" ];
let index = 0;

Button.addEventListener('click', function () {
    let one = color[index];
    maincontent.style.backgroundColor =  one;
    colorname.textContent = "Background Color: " + one;
    index = (index+=1) % color.length;
})

