#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter Second number", type: "number", name: "secondtNumber" },
  {
    message: "select one of the operator to perform action",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "division", "multiplication"],
  },
]);

if(answer.operator === "addition"){
    console.log(answer.firstNumber + answer.secondtNumber);
} else if(answer.operator === "subtraction"){
    console.log(answer.firstNumber - answer.secondtNumber);
}else if(answer.operator === "division"){
    console.log(answer.firstNumber / answer.secondtNumber);
}else if(answer.operator === "multiplication"){
    console.log(answer.firstNumber * answer.secondtNumber);
} else("Please select valid operator");