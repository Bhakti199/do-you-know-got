var readlineSync = require('readline-sync');
const chalk = require('chalk');
const log = console.log;
var score =0;
console.log(chalk.blue("********************"));
let queOne  = readlineSync.question(chalk.yellow("What is your name? "));
while(queOne.length === 0) {
	  queOne= readlineSync.question(chalk.yellow('Hey, Please enter your name :) '));
}
console.log(chalk.green.underline('Welcome '+ queOne ));
console.log(chalk.bgRed.blue("BIG FAN OF Games Of Thrones??? "));
 console.log();
  console.log(chalk.underline.green("Okay then lets do a little quiz."));
var j = 0;
function play(question , answer) {
  console.log();
  var str = j  +". " + question;
  var userAnswer= readlineSync.question(str);

  // console.log();
      while(userAnswer.length === 0){
        userAnswer = readlineSync.question((str));
      }
        if(userAnswer.toLowerCase() === answer.toLowerCase()){
          console.log(chalk.green.underline("You are right  :)"));
          score = score + 1;
        }else{
          console.log(chalk.green("You are wrong  :("));
          console.log(chalk.red.underline("The correct answer is: " + answer));

          score =score - 1;
        }
}

var question = [{
      question:"After Brandon Stark, Who was King in the North? ",
      answer:"Robb Stark"
    },
  {
      question: "How many children Robert Baratheon have? ",
      answer : "3"
    },
  {
      question: "Who is the youngest of Ned Stark’s children? ",
      answer : "Rickon"
    },
  {
    question : "Who is Jon Snow’s mother? ",
    answer: "Lyanna Stark"},
    {
      question: "What is Davos Seaworth’s nickname? ",
      answer : "the Onion Knight"
    },
    {
      question: "Who killed Joffrey Baratheon? ",
      answer: "Olenna Tyrell"
    },
    {
      question:"What’s the name of the band of assassins that Arya Stark joins in Braavos? ",
      answer:"Faceless Men"
    },
    {
      question:"Jamie Lannister has a golden ___. ",
      answer:"hand"
    }
    ]
for(var i=0; i<question.length; i++){
  var currentQuestion = question[i];
  j=j+1;
  play(currentQuestion.question, currentQuestion.answer) 
}
console.log()
console.log(chalk.bgRed.black("Your final score is: " +score))
console.log(chalk.green("Yay! you did it."));