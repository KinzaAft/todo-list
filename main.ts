import inquirer from "inquirer"

console.log("\n \t Welcome to Todo list Application\n");
let todos = [];
let condition = true


while(condition){

let addTask = await inquirer.prompt(
    [
        {
            name: "todo",
            type:  "input",
            message: "what you want to add in your Todos?"
        },
    
        { 
     
            name: "addMore",
            type: "confirm",
            message: "do you want to addmore?",
            default: "true"
        }
    ]

);
todos.push(addTask.todo);

console.log(todos);

condition = addTask.addMore

}

//2
// import inquirer, { Answers } from "inquirer";

// interface Todo {
//     task: string;
//     done: boolean;
// }

// console.log("\n \t Welcome to Todo list Application\n");

// let todos: Todo[] = [];
// let condition: boolean = true;

// async function main() {
//     while (condition) {
//         let addTask: Answers = await inquirer.prompt([
//             {
//                 name: "todo",
//                 type: "input",
//                 message: "What do you want to add to your Todos?"
//             },
//             {
//                 name: "addMore",
//                 type: "confirm",
//                 message: "Do you want to add more?",
//                 default: true
//             }
//         ]);

//         todos.push({ task: addTask.todo as string, done: false });

//         console.log("\nTodo List:");
//         console.log("-----------");
//         todos.forEach((item, index) => {
//             console.log(`${index + 1}. [${item.done ? 'x' : ' '}] ${item.task}`);
//         });
//         console.log("-----------\n");

//         condition = addTask.addMore as boolean;
//     }

//     // After exiting the loop, offer additional options like viewing and marking tasks as done.
//     let options: Answers = await inquirer.prompt([
//         {
//             name: "action",
//             type: "list",
//             message: "Choose an action:",
//             choices: ["View Todo List", "Mark Task as Done", "Exit"]
//         }
//     ]);

//     switch (options.action) {
//         case "View Todo List":
//             viewTodoList();
//             break;
//         case "Mark Task as Done":
//             await markTaskDone();
//             break;
//         case "Exit":
//             console.log("Exiting Todo List Application. Goodbye!");
//             break;
//     }
// }

// function viewTodoList() {
//     console.log("\nTodo List:");
//     console.log("-----------");
//     todos.forEach((item, index) => {
//         console.log(`${index + 1}. [${item.done ? 'x' : ' '}] ${item.task}`);
//     });
//     console.log("-----------\n");
//     main(); // Return to main menu after viewing todo list
// }

// async function markTaskDone() {
//     let choices = todos.map((item, index) => ({
//         name: `${index + 1}. [${item.done ? 'x' : ' '}] ${item.task}`,
//         value: index
//     }));

//     let markTask: Answers = await inquirer.prompt([
//         {
//             name: "taskIndex",
//             type: "list",
//             message: "Choose a task to mark as done:",
//             choices: choices
//         }
//     ]);

//     todos[markTask.taskIndex].done = true;
//     console.log("Task marked as done.\n");
//     main(); // Return to main menu after marking task as done
// }

// main(); // Start the application


//3
// import inquirer, { Answers } from "inquirer";
// import chalk from "chalk";

// interface Todo {
//     task: string;
//     done: boolean;
// }

// console.log(chalk.bgBlue.white("\n \t Welcome to Todo list Application\n"));

// let todos: Todo[] = [];
// let condition: boolean = true;

// async function main() {
//     while (condition) {
//         let addTask: Answers = await inquirer.prompt([
//             {
//                 name: "todo",
//                 type: "input",
//                 message: "What do you want to add to your Todos?"
//             },
//             {
//                 name: "addMore",
//                 type: "confirm",
//                 message: "Do you want to add more?",
//                 default: true
//             }
//         ]);

//         todos.push({ task: addTask.todo as string, done: false });

//         console.log(chalk.bgYellow.black("\nTodo List:"));
//         console.log("-----------");
//         todos.forEach((item, index) => {
//             console.log(
//                 `${index + 1}. ${
//                     item.done ? chalk.gray.strikethrough(item.task) : item.task
//                 }`
//             );
//         });
//         console.log("-----------\n");

//         condition = addTask.addMore as boolean;
//     }

//     // After exiting the loop, offer additional options like viewing and marking tasks as done.
//     let options: Answers = await inquirer.prompt([
//         {
//             name: "action",
//             type: "list",
//             message: "Choose an action:",
//             choices: ["View Todo List", "Mark Task as Done", "Exit"]
//         }
//     ]);

//     switch (options.action) {
//         case "View Todo List":
//             viewTodoList();
//             break;
//         case "Mark Task as Done":
//             await markTaskDone();
//             break;
//         case "Exit":
//             console.log(chalk.bgBlue.white("Exiting Todo List Application. Goodbye!"));
//             break;
//     }
// }

// function viewTodoList() {
//     console.log(chalk.bgYellow.black("\nTodo List:"));
//     console.log("-----------");
//     todos.forEach((item, index) => {
//         console.log(
//             `${index + 1}. ${
//                 item.done ? chalk.gray.strikethrough(item.task) : item.task
//             }`
//         );
//     });
//     console.log("-----------\n");
//     main(); // Return to main menu after viewing todo list
// }

// async function markTaskDone() {
//     let choices = todos.map((item, index) => ({
//         name: `${index + 1}. ${
//             item.done ? chalk.gray.strikethrough(item.task) : item.task
//         }`,
//         value: index
//     }));

//     let markTask: Answers = await inquirer.prompt([
//         {
//             name: "taskIndex",
//             type: "list",
//             message: "Choose a task to mark as done:",
//             choices: choices
//         }
//     ]);

//     todos[markTask.taskIndex].done = true;
//     console.log(chalk.green("Task marked as done.\n"));
//     main(); // Return to main menu after marking task as done
// }

// main(); // Start the application
