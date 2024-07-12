let user = 0;
let abc = "abcdefghijklmnopqrstuvwxyz".toUpperCase()
let cpu = abc[Math.floor(Math.random() * abc.length)];
let score = 100;
let guesses = 0;
let buttons = document.getElementsByClassName("Button");


/* before seeing tut 43 ultimate js 
--------------------------------------------------------------- 
var sef = [];                                                                        
let arr = [];                                                                        
for (let i = 0; i < arr.length; i++) {
  arr.push(abc[i].toUpperCase());
}
console.log(arr);
const buttongenerator = (x) => {
  sef.push(`<button class="Button" id = "${x}"> ${x} </button>`)
}

for (let element of arr) {
  buttongenerator(element);
}
sef = sef.join(' ');
document.getElementById("keyboard").innerHTML = `${sef}`;
*/


// After seeing tut 43 ultimate js (today)   ----------------------------
// reduced 15 lines of above code to 5 lines
let ins = document.getElementById("keyboard");
for (let key of abc) {
  let letter = document.createElement("div");
  letter.innerHTML = `<button class="Button" id="${key}"> ${key} </button>`
  ins.appendChild(letter);
}



//helper function

//Logic here
console.log(abc.indexOf(user))

const game = () => {
  let tv = document.getElementById("TV");
  if (user == cpu) {
    tv.innerHTML = `Congratulations!🎉<br> You Won The Game, <br>Your Score was ${score - guesses} and Guesses Were ${guesses}`
    console.log("Congratulations!🎉 You Won The Game!");
    document.getElementById("guess-cpu").innerHTML = cpu;
  }

  else if (abc.indexOf(user) < abc.indexOf(cpu)) {
    tv.innerHTML = `Wrong Guess!💫<br> The Alphabet Comes After "${user}", <br>Guess Between A-Z`
    console.log(`Wrong Guess!💫 The Alphabet Comes After "${user}", Guess Between A-Z`);
    guesses++;
  }

  else if (abc.indexOf(user) > abc.indexOf(cpu)) {
    tv.innerHTML = `Wrong Guess!💫<br> The Alphabet Comes Before "${user}",<br> Guess Between A-Z`
    console.log(`Wrong Guess!💫 The Alphabet Comes Before "${user}", Guess Between A-Z`)
    guesses++;
  }
}
const yo = () => {
  for (let i = 0; i < abc.length; i++) {
    buttons[i].onclick = function() {
      user = (this.id);
      document.getElementById("guess-user").innerHTML = (this.id);
      console.log(user);
      game();
    }
  }
}
yo();
console.log(user)