// start js 

// first part 
let box1 = document.querySelector('.box1')
let inputText1 = document.querySelector(".input1");
let btn1 = document.querySelector(".btn1");
let pera1 = document.querySelector(".pera1");


// secend part 
let box2 = document.querySelector(".box2");
let heading2 = document.querySelector(".heading2");
let inputNumber2 = document.querySelector(".inputNumber2");
let btn2 = document.querySelector(".btn2");
let pera2 = document.querySelector(".pera2");

// third part 
let box3 = document.querySelector(".box3");
let heading3 = document.querySelector(".heading3");
let inputText3 = document.querySelector(".inputText3");
let btn3 = document.querySelector(".btn3");
let pera3 = document.querySelector(".pera3");

// four part 
let box4 = document.querySelector(".box4");
let heading4 = document.querySelector(".heading4");
let inputNumber4 = document.querySelector(".inputNumber4");
let btn4 = document.querySelector(".btn4");
let pera4 = document.querySelector(".pera4");

// five part 
let box5 = document.querySelector('.box5')
let box5Text = document.querySelector(".box5Text");

// siz part 
let box6 = document.querySelector(".box6");
let box6Text = document.querySelector(".box6Text");
console.log(box6Text);

// function start 

// first btn 

function isBrazil(text) {
  return text.trim().toLowerCase().includes("brazil");
}

btn1.addEventListener('click',()=>{

  if (inputText1.value.trim() === ""){
    pera1.innerHTML = "Please Inter your Name";
    pera1.classList.remove('hidden')
  }
  else{
    let first = inputText1.value
  box1.classList.add('hidden');
  box2.classList.remove('hidden');
  heading2.innerHTML = "Welcome to Our Game, " + first
  }

  
})

// secend btn 
btn2.addEventListener('click',()=>{
  let secend = inputNumber2.value.trim();
  if ( secend === ""){
       pera2.innerHTML = "Please inter your number";
  }
 else if (inputNumber2.value < 1 || inputNumber2.value > 10){
    pera2.innerHTML = "Please your number 1 to 10"
  }
     else   {
    
      box2.classList.add("hidden");
      box3.classList.remove("hidden");
      heading3.innerHTML = "Welcome to Our Game, Player Two ";
    } 

 
})

// third btn 
btn3.addEventListener('click',()=>{
  if (inputText3.value.trim() === ""){
    pera3.innerHTML = "Enter Your Name"
  }
  else{
      let secend = inputText3.value;
      box3.classList.add('hidden');
      box4.classList.remove('hidden');
      heading4.innerHTML = "Match the number and win "; 
  }

})

// four btn 



let chance = 5;
btn4.addEventListener('click',() => {
  
  let p1 = inputText1.value;
  let p2 = inputText3.value;

  let two = inputNumber2.value;
  let four = inputNumber4.value;

  // 🔥 BRAZIL CHECK (NEW ADD)
  if (isBrazil(p1) || isBrazil(p2)) {
    box4.classList.add('hidden')
    box6.classList.remove('hidden')
    let count = 10;
    let time = setInterval(()=>{
      box6Text.classList.add('pop')

      setTimeout(() => {
        box6Text.classList.remove('pop')
      }, 300);

      box6Text.innerHTML = count;
      count--;
      if(count < 0){
        clearInterval(time)

        box6.style.backgroundImage = "url('/image/box6.jpg')";
        box6.style.backgroundSize = "cover";
        box6.style.backgroundPosition = "center";
        box6.style.backgroundRepeat = "no-repeat";
        box6Text.innerHTML = "Congratulations Winner 7up" ;
      }
    },1000)

 

    return; // 👉 important: stop here
  }

  if (two === four){
        box4.classList.add('hidden')
        box5.classList.remove('hidden')

    // time function add 
    let count = 10 
    let time = setInterval(() => {
     box5Text.classList.add('pop');

     setTimeout(()=>{
      box5Text.classList.remove('pop')
     },300)
     box5Text.innerHTML = count ;
     count--;
     if (count < 0){
        clearInterval(time);
        box5.style.backgroundImage = "url('/image/winner.jpg')";
        box5.style.backgroundSize = "cover";
        box5.style.backgroundPosition = "center";
        box5.style.backgroundRepeat = "no-repeat";
        box5Text.innerHTML = "Congratulations Winner " + "<br>" + inputText3.value;
     }

    }, 1000);


   
  }
  else{
    chance--;
    if (chance > 0)
      pera4.innerHTML = `Wrong Number! Remaining Chance: ${chance}`;

  else{
  box4.classList.add("hidden");
  box5.classList.remove("hidden");

  // time function add
  let count = 10;
  let time = setInterval(() => {
    box5Text.classList.add("pop");

    setTimeout(() => {
      box5Text.classList.remove("pop");
    }, 300);
    box5Text.innerHTML = count;
    count--;
    if (count < 0) {
      clearInterval(time);
      box5.style.backgroundImage = "url('/image/winner.jpg')";
      box5.style.backgroundSize = "cover";
      box5.style.backgroundPosition = "center";
      box5.style.backgroundRepeat = "no-repeat";
      box5Text.innerHTML =
        "Congratulations Winner " + "<br>" + inputText1.value;
    }
  }, 1000);
  }  
}

})

