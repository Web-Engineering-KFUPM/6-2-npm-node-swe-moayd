import { add, subtract, multiply, divide } from "./utils/operations.js";
import { parseNumbers, isValidOperation } from "./utils/parser.js";
import _ from "lodash";

// Parse command line arguments
const operation = process.argv[2];
const numbers = process.argv.slice(3);

// Validate input and calculate
if (!isValidOperation(operation)) {
  console.log("Invalid operation. Use: add, subtract, multiply, or divide");
  process.exit(1);
}

const nums = parseNumbers(numbers);
if (nums.length === 0) {
  console.log("No valid numbers provided");
  process.exit(1);
}

let result;

switch (operation) {
  case "add":
    result = add(nums);
    break;
  case "subtract":
    result = subtract(nums);
    break;
  case "multiply":
    result = multiply(nums);
    break;
  case "divide":
    result = divide(nums);
    break;
}

console.log(`Result: ${result}`);