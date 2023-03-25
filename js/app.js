// This is a class definition for a calculator object. It has methods for performing various operations.

class Calculator {
  // The constructor takes two arguments: previousOperandTextElement and currentOperandTextElement.
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  // This method clears the calculator's memory by setting all its properties to undefined or empty strings.
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  // This method deletes the last character of the current operand string.
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  // This method appends a number to the current operand string. It checks if the number is a decimal point and if the current operand already contains a decimal point before appending.
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  // This method chooses the operation to be performed by the calculator. It checks if the current operand is empty, and if the previous operand is not empty, it performs the computation before setting the operation and clearing the current operand.
  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  // This method performs the computation by parsing the previous and current operands, and then performing the operation specified by the operation property.
  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  // This method formats a number for display on the calculator screen. It splits the number into integer and decimal parts, and then formats the integer part with commas using the toLocaleString method.
  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  // This method updates the calculator screen with the current and previous operands and the operation to be performed.
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = "";
    }
  }
}
// This code selects various HTML elements from the DOM and stores them in variables
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

// A new instance of the Calculator class is created with the previous and current operand text elements as parameters
const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

// Event listeners are added to each number button using forEach method
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // When a number button is clicked, the corresponding number is appended to the current operand of the calculator instance
    calculator.appendNumber(button.innerText);
    // The display of the calculator is updated to show the new number
    calculator.updateDisplay();
  });
});

// Event listeners are added to each operation button using forEach method
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // When an operation button is clicked, the corresponding operation is chosen by the calculator instance
    calculator.chooseOperation(button.innerText);
    // The display of the calculator is updated to show the new operation
    calculator.updateDisplay();
  });
});

// An event listener is added to the equals button
equalsButton.addEventListener("click", (button) => {
  // When the equals button is clicked, the calculator computes the result of the current operation
  calculator.compute();
  // The display of the calculator is updated to show the result
  calculator.updateDisplay();
});

// An event listener is added to the all clear button
allClearButton.addEventListener("click", (button) => {
  // When the all clear button is clicked, the calculator is cleared
  calculator.clear();
  // The display of the calculator is updated to show the cleared calculator
  calculator.updateDisplay();
});

// An event listener is added to the delete button
deleteButton.addEventListener("click", (button) => {
  // When the delete button is clicked, the last digit of the current operand of the calculator is deleted
  calculator.delete();
  // The display of the calculator is updated to show the updated current operand
  calculator.updateDisplay();
});
