console.log("hello hello");

let pageTitle = document.querySelector("#page-title");

// JavaScript Timeout Changes | H1 Title Color Change After 3 Sec 
setTimeout(function(){
    pageTitle.style.color = "pink";
},3000);

// Click Event on Header Changes Background Color
document.querySelector("header").onclick = function (){
    // console.log("clicked header");
    document.querySelector("body").style.backgroundColor = "black";
}

// ORIGINAL: JavaScript Timeout Changes | H1 Title Color Change After 3 Sec 
// setTimeout(function(){
//     document.querySelector("#page-title").style.color = "pink";
// },3000);

// Click Event on Header Changes Background Color
// document.querySelector("header").onclick = function (){
//     // console.log("clicked header");
//     document.querySelector("body").style.backgroundColor = "black";
// }

