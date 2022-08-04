console.log("Working Properly")
 var score = 0;

// var khu = 
// console.log(khu)
// a.style.color = "red"
// var a = document.getElementById("box1");



// var a = document.getElementById("box1")
// console.log(a)

// const  a = document.querySelectorAll(".heart")
// a.style.backgroundColor = "blue"
// a.style.style.color = "blue";
// document.querySelector("p").style.backgroundColor = "red";


// var a = ["green" ,"Tomato","Orange","DodgerBlue","MediumSeaGreen","Gray","SlateBlue"]


// console.log(random)
// Math.random()
// selecter //
var a = document.querySelectorAll('.heart');
console.log(a);


// var z = 0 ;
// while(z > 1){
//     let inner = 
    
// }

var empty = []
var avaliblecolors = ['black','red','green','yellow','blue','orange', 'brown','gold','DodgerBlue','aqua','Violet','SlateBlue']
// var selectedVAlue = ['black','red','green','yellow','blue','orange', 'brown','gold','DodgerBlue','aqua','Violet','SlateBlue']
for (let index = 0; index < 12; index++) {
    var random = Math.floor(Math.random()*avaliblecolors.length)
    // const element = array[index];
    
a[index].style .backgroundColor = avaliblecolors[random] ;

if(index === 11){
   var l =    document.getElementById("main-head")
   l.innerText = avaliblecolors[Math.floor(Math.random()*avaliblecolors.length)]


}

}



function selecter(on) {
var   c = l.innerText  
c =  c.toLowerCase();
console.log(c)

// var lk = on.id;

console.log(on)
 var nm =  on.style.backgroundColor 
 nm = nm.toLowerCase();
 console.log(nm)


if(c === nm){
    l.innerText = avaliblecolors[Math.floor(Math.random()*12)]
    on.style.display = "none"; 
    alert("Value Found")
    empty.push(nm)
    console.log(empty)
    score++
    document.getElementById("eee").innerText = `Score : `+ score
    if(score === 3 ){
        alert("Win")
        score = 0
        document.body.style.backgroundColor = 'red';
    }
    if(score == -1){
        score = 1
    }
    

// if(score === )

}
else{
    l.innerText = avaliblecolors[Math.floor(Math.random()*12)]
    score--
    document.getElementById("eee").innerText = `Score : `+ score
    if(score === -3 ){
        alert("Lose")
        score =  0;
    }
}

// console.log(mm)

// console.log(on)
// console.log(kkk)


}










 