// variables
let user = 0;
let cpu;
var sef = [];
let abc = "abcdefghijklmnopqrstuvwxyz"
let arr = [];
let score = 100;
let guesses = 0;
let buttons = document.getElementsByClassName("Button");

for (let i = 0; i < abc.length; i++) {
  arr.push(abc[i]);
}
console.log(arr);

const buttongenerator = (x) => {
  sef.push(`<button class="Button" id = "${x}"> ${x.toUpperCase()} </button>`)
}

for (let element of arr) {
  buttongenerator(element);
}
sef = sef.join(' ');
document.getElementById("keyboard").innerHTML = `${sef}`;

cpu = arr[Math.floor(Math.random() * arr.length)];

//helper function

//Logic here
console.log(arr.indexOf(user))

const game = () => {
  console.log(user);
  console.log(cpu);
  let tv = document.getElementById("TV");
  if (user == cpu) {
    tv.innerHTML = `Congratulations!🎉<br> You Won The Game, <br>Your Score was ${score - guesses} and Guesses Were ${guesses}`
    console.log("Congratulations!🎉 You Won The Game!");
    document.getElementById("guess-cpu").innerHTML = cpu;
  }

  else if (arr.indexOf(user) < arr.indexOf(cpu)) {
    tv.innerHTML = `Wrong Guess!💫<br> The Alphabet Comes After "${user}", <br>Guess Between A-Z`
    console.log(`Wrong Guess!💫 The Alphabet Comes After "${user}", Guess Between A-Z`);
    guesses++;
  }

  else if (arr.indexOf(user) > arr.indexOf(cpu)) {
    tv.innerHTML = `Wrong Guess!💫<br> The Alphabet Comes Before "${user}",<br> Guess Between A-Z`
    console.log(`Wrong Guess!💫 The Alphabet Comes Before "${user}", Guess Between A-Z`)
    guesses++;
  }
}
const yo = () => {
  for (let i = 0; i < arr.length; i++) {
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


< !DOCTYPE html >
  <html>

    <head>
      <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
          <title>replit</title>
          <link href="style.css" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet">
          </head>

          <body background="https://w0.peakpx.com/wallpaper/548/632/HD-wallpaper-minimalist-diamond-shape-pattern.jpg">
            <div class="container">
              <div class=" display">
                <strong>Display TV</strong>
                <div id="box1" class="boxe"> CPU <br><span id="guess-cpu" class ="span">?</span></div>
                <div id="box2" class="boxe">Guess<br><span id="guess-user" class ="span">A</span></div>
                <div id="TV">Guess Between A-Z</div>
              </div>

              <div id="keyboard">

                <!--       Here Are Buttons -->
              </div>
              <div id="showme">
                <a href="https://team-project-2-guess-the-alphabet-game.ultimate-js-community1.repl.co/">
                  <button class="Button" id="play">Play Again</button></a>
              </div>
            </div>



            <!--   <script src="backup.js"></script> -->
            <script src="script.js"></script>

          </body>

        </html>


        html, body {
          height: 100%;
        width: 100%;
}
        .Button {
          width: 5rem;
        padding: 20px;
        margin: 3px 3px;
        font-size: 20px;
        border: 2px solid black;
        border-radius: 9px;
        cursor: pointer;
        font-family: 'Roboto Condensed', sans-serif;
        border-color: green;
        color:green;
}
        .Button:hover {
          background - color: green;
        color: white;
}
        #keyboard{
          text - align: center;
        border: 10px solid #71c171;
        background-color: #8aea8a;
        border-radius: 9px;
        margin: 20px auto;
        padding: 41px;
        width: 1280px;
}

        .display {
          font - style: bold;
        font-family: 'DotGothic16', sans-serif;
        font-size: 40px;
        text-align: center;
        border: 3px solid #2e0d44;
        background-color: #c48aea;
        border-radius: 9px;
        padding: 6px;
        margin:auto;
        width: 1280px;
        height: 300px;
        box-sizing: border-box;
        position : relative;
}


        .boxe{
          font - style: bold;
        border-radius: 9px;
        border: 2px solid #ff94a6;
        background-color: #ff94a6;
        box-sizing: border-box;
        height: 280px ;
        width: 200px;
        float:left;
        margin:2px;
}
        .span{
          font - size: 70px;
        margin:40px;
        padding:40px;
}
        #play{
          display:block;
        text-align: center;
        width:320px;
        margin:auto;

}
        a {
          text - decoration: none;
        color:#002e00;
 
}