#!/usr/bin/env node
import * as readline from "readline";

// Define the interface for a question
interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

// Define the interface for a quiz
interface Quiz {
  questions: Question[];
}

// Define a function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Define a function to run the quiz
function runQuiz(quiz: Quiz, quizNumber: number): void {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(`Quiz ${quizNumber}: Press Enter to start the quiz...`, () => {
    let score = 0;

    // Shuffle questions to randomize order
    const shuffledQuestions = shuffleArray(quiz.questions);

    askQuestion(0);

    function askQuestion(index: number): void {
      if (index < shuffledQuestions.length) {
        const question = shuffledQuestions[index];

        console.log(`Question ${index + 1}: ${question.question}`);
        for (let j = 0; j < question.options.length; j++) {
          console.log(`${j + 1}. ${question.options[j]}`);
        }

        rl.question("Enter your answer (1, 2, 3, etc.): ", (userAnswer) => {
          const userAnswerIndex = parseInt(userAnswer) - 1;

          if (userAnswerIndex === question.correctAnswerIndex) {
            console.log("Correct!");
            score++;
          } else {
            console.log(
              "Incorrect! The correct answer is: " +
                question.options[question.correctAnswerIndex],
            );
          }

          askQuestion(index + 1);
        });
      } else {
        rl.close();
        const percentageScore = (score / shuffledQuestions.length) * 100;
        console.log(
          `Quiz ${quizNumber} Complete! Your Score: ${score}/${shuffledQuestions.length} (${percentageScore}%)`,
        );
      }
    }
  });
}

// Example quiz
const myQuiz: Quiz = {
  questions: [
    {
      question: "Is typescript case Sensitive?",
      options: ["no", "someone tiem", "yes"],
      correctAnswerIndex: 2,
    },
    {
      question: "What is output console.log(2 + 2)",
      options: ["3", "4", "error"],
      correctAnswerIndex: 1,
    },
    {
      question: "console.log(knowledge)",
      options: ["babar", "error", "yes "],
      correctAnswerIndex: 1,
    },
    {
       question: "James Chadwick bombarded ______ particles at a beryllium target", 
       options: ["Beta",  "Alpha",    "Gamma",  "X-rays"],
       correctAnswerIndex: 1, 
    }
  ],
};

// Run the quiz
runQuiz(myQuiz, 1);














































// import * as readline from "readline";

// //Define the interface for a question 
// interface Question {
//     question: string;
//     options: string[];
//     coreectAnswerIndex: number;
// }

// // Define the interface for a quiz
// interface Quiz {
//     questions: Question[];
// }

// // dEFINE A FUNCTION TO SHUFFLE AN ARRAY
// function shuffleArray<T>(array: T[]): T[] {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// // Define a function to run the quiz
// function runQuiz(quiz: Quiz, quizNumber: number): void {
//     const rl = readline.createInterface({
//         input: Process.studin,
//         output: Process.stdout,
//     });
//     rl.question(`Quiz ${quizNumber}: press Enter to start the quiz...`,())
//     =>{
//         let score = 0;

//         //Shuffle question to randomize order
//         const shuffledQuestions = shuffleArray(quiz.questions);

//         askQuestion(0);

//         function askQuestion(index: number): void {
//             if(index < shuffledQuestions.length) {
//                 const question = shuffledQuestions[index];

//                 console.log(`Question ${index + 1}: ${question.question}`);
//                 for (let j = 0; j< question.options.length; j++){
//                     console.log(`${j + 1}. ${question.option[j]}`);
//                 }

//                 rl.question("Enter your name (1, 2, 3, etc.):", (userAnswer)
//             => {
//                 const userAnswerIndex = parseInt(userAnswer) - 1;

//                 if (userAnswerIndex === question.correctAnswerIndex) {
//                     console.log("Correct!");
//                     score++;
//                 } else {
//                     console.log(
//                         "Incorrect! The correct answer is: " +
//                         question.options[question.correctAnswerIndex],
//                     );
//                 }
//                 askQuestion(index + 1);
//             });
//             } else {
//                 rl.close();
//                 const percentageScore = (score / shuffledQuestions.length) * 100;
//                 console.log(
//                     `Quiz ${quizNumber} complete! Your Score:
//                     ${score}/${shuffledQuestions.length} (${percentageScore}%)`,
//                 );
//             }
//         }
//     });
// }

// // Example quiz
// const myQuiz: Quiz = {
//     questions: [
//       {
//         question: "Is typescript case Sensitive?",
//         options: ["no", "someone tiem", "yes"],
//         correctAnswerIndex: 2,
//       },
//       {
//         question: "What is output console.log(2 + 2)",
//         options: ["3", "4", "error"],
//         correctAnswerIndex: 1,
//       },
//       {
//         question: "console.log(knowledge)",
//         options: ["babar", "error", "yes "],
//         correctAnswerIndex: 1,
//       },
//     ],
//   };
  
//   // Run the quiz
//   runQuiz(myQuiz, 1);
  