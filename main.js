#! /usr/bin/env node
import inquirer from "inquirer";
// initialize user pin and balance
let myBalance = 10000;
let myPin = 7777;
// print welcome message
console.log("WELCOME to ATM machine");
let pinAnswer = await inquirer.prompt([
    {
        type: "number",
        name: "pin",
        message: "Enter your 4 digit pincode"
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Login Successfully!");
    // console.log(`Your current Account Balance is ${myBalance}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "please select an option",
            choices: ["Withdraw", "Check Balance", "Fast Cash"]
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Your Amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdrew Successgully`);
            console.log(`Your remaining balance is : ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Current Balance is : ${myBalance}`);
    }
    else if (operationAns.operation === "Fast Cash") {
        let fast = await inquirer.prompt([{
                name: "fastcash",
                type: "list",
                message: "Select Amount",
                choices: [500, 1000, 2000, 5000, 10000],
            }]);
        myBalance -= fast.fastcash;
        console.log(` withdraw Successfully! \n Your Remaining Balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect Pin");
}
