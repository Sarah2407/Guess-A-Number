var http = require("http");
var Cookies = require('cookies')


http
  .createServer(function (req, res) {
    var cookies = new Cookies(req, res);

let username = prompt("Enter your username");

cookies.set("username",username)

let end = 2;



let point = 0;

const guessNum = (end) => {
  let number = Math.floor(Math.random() * end) + 1;
  console.log(number)
  const guessed = prompt(`Please guess a number between 1 & ${end}`);

  if (guessed == number) {
    point += 10;
    cookies.set("points", point)
    alert("You got it right");
    alert(`Your score is ${point}`)
    end += 1;
    guessNum(end);
  } else {
    console.log("You guessed it wrong")
    prompt("Press 1 to try again") ==1 ? guessNum(end): alert(`Hey ${username} Your score is ${point}`);
  }
};

guessNum(end);

    res.write("Hello World!"); 
  })
  .listen(8080);
