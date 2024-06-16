import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.hex(
    "dc143c"
  )`\n \t ->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->`
);

console.log(
  chalk.magentaBright`\n \t \t ->->->->->->->->->->-> WORDS COUNTOR APP ->->->->->->->->->->->`
);

console.log(
  chalk.hex(
    "dc143c"
  )`\n \t->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->`
);

let while_loop: boolean = true;

while (while_loop) {
  const userChoise = await inquirer.prompt([
    {
      name: "text",
      type: "input",
      message: chalk.hex("8fbc8f").bold(
        "\n Enter a text to count letters and words in it."
      ),
    },
    {
      name: "ask",
      type: "list",
      message: chalk.hex("8fbc8f").bold(
        "\n What would you like to count in your text?"
      ),
      choices: [
        chalk.hex('bdb76b')("I. Letters"), 
        chalk.hex('bdb76b')("II. Words"), 
        chalk.hex('bdb76b')("III. Both letters and words"),
        ],
    },

    // destructing
  ]);

  let { text, ask } = userChoise;

  // ================== Condition Statement ===============

  if (text.length === 0) {
    emptyFun();
  }

  if (ask === chalk.hex('bdb76b')("I. Letters")) {
    lettersFun();
  }
  if (ask === chalk.hex('bdb76b')("II. Words")) {
    wordsFun();
  }
  if (ask === chalk.hex('bdb76b')("III. Both letters and words")) {
    both();
  }

  function emptyFun() {
    console.log(
      chalk.hex('e9967a	').bold.italic`\n Oops Your input is empty! pleas try again with valid input:\n`
    );
  }

  function lettersFun() {
    const lettersWithoutSpace = text.replace(/\s/g, "");
    const letterCount = lettersWithoutSpace.length;
    console.log(chalk.hex('00ced1').bold(`\n Total letters in you text are ${letterCount}`));
  }
  function wordsFun() {
    const wordsArray = text.split(" ");
    let wordCount = wordsArray.length;
    console.log(chalk.hex('00ced1').bold(`\n Total words in your text are ${wordCount}`));
  }

  function both() {
    lettersFun();
    wordsFun();
  }

  let countAgain = await inquirer.prompt({
    name: "countMore",
    type: "confirm",
    message: chalk.hex("8fbc8f").bold("\n Do you want to count more?"),
    default: false,
  });

  if (countAgain.countMore === false) {
    while_loop = false;
    console.log(chalk.hex('bc8f8f').bold.italic.underline`\n \tTHANK YOU FOR USING WORDS COUNTOR APP!`);
  }
}
