// Local (built-in) module
import os from "os";

// Third-party modules
import chalk from "chalk";
import promptSync from "prompt-sync";

// Custom modules
import add from "./add.js";
import subtract from "./sub.js";

const prompt = promptSync();

// Registration number
console.log(chalk.green("My Registration Number: BD/2025/TC3/024"));

// Display system info using built-in os module
console.log(chalk.blue(`Running on: ${os.platform()} ${os.arch()}`));

// Calculator logic
console.log(chalk.yellow("Simple Calculator"));
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const operation = prompt("Choose operation (add/subtract): ");

let result;
if (operation === "add") {
  result = add(num1, num2);
} else if (operation === "subtract") {
  result = subtract(num1, num2);
} else {
  console.log(chalk.red("Invalid operation"));
  process.exit(1);
}

console.log(chalk.green(`Result: ${result}`));
