const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
// let question = "1) Who was the first American woman in space? ";
// let correctAnswer = "sally ride";
let candidateAnswers = "";
let questions = ["1) Who was the first American woman in space? ", "2) True or false: 5 kilometer == 5000 meters", "3) (5+3)/2*10 = ?", "4) Given the array [8, 'Orbit', 'Trajectory', 45] what entry is at index 2?", "5) What is the minimum crew size for the ISS?"];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let collectedAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What is your full name?: ")
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
collectedAnswers = input.question("1) Who was the first American woman in space? ")
candidateAnswers.push(collectedAnswers);
console.log("Your answer: " + candidateAnswers + "\n" + " Correct Answer: Sally Ride" + "\n\n")


collectedAnswers = input.question("2) True or false: 5 kilometer == 5000 meters? ")
candidateAnswers.push(collectedAnswers);
console.log("Your answer: " + candidateAnswers + "\n" + " Correct Answer: true" + "\n\n")

collectedAnswers = input.question("3) (5+3)/2*10 = ? ")
candidateAnswers.push(collectedAnswers);
console.log("Your answer: " + candidateAnswers + "\n" + " Correct Answer: 40" + "\n\n")

collectedAnswers = input.question("4) Given the array [8, 'Orbit', 'Trajectory', 45] what entry is at index 2? ")
candidateAnswers.push(collectedAnswers);
console.log("Your answer: " + candidateAnswers + "\n" + " Correct Answer: Trajectory" + "\n\n")

collectedAnswers = input.question("5) What is the minimum crew size for the ISS? ")
candidateAnswers.push(collectedAnswers);
console.log("Your answer: " + candidateAnswers + "\n" + " Correct Answer: 3" + "\n\n")

console.log(candidateAnswers);
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
  let totalCorrect = 0;
  console.log(totalCorrect);

  

  for (i = 0; i < questions.length; i++) {
   if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
     totalCorrect += 1;
   }
    console.log(totalCorrect);
  }


  let grade = (totalCorrect.length / questions.length) * 100;

  console.log(`>>> Overall Grade: ${grade}% (${totalCorrect} of 5 responses correct)<<<`);

  if (grade => 60) {
    console.log(">>> Status: PASSED <<<");
  } else {
    console.log(">>> Status: FAILED <<<");
  }

  return grade;
} 

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Candidate Name: " + candidateName);

  askQuestion();
  
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  // question: question,
  // correctAnswer: correctAnswer,
  // candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};