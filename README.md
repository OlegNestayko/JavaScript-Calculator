# JavaScript-Calculator

The code is a Calculator class that contains methods to perform mathematical operations on the calculator. To create a calculator object, you must pass two parameters - previousOperandTextElement and currentOperandTextElement , which are DOM elements to display the previous and current operands, respectively.

The clear() method sets the values ​​of the current operand (currentOperand), the previous operand (previousOperand), and the operation (operation) to undefined.

The delete() method removes the last character from the current operand.

The appendNumber(number) method adds a number (number) to the current operand (currentOperand). If the number already contains a decimal point and the user tries to add another one, the method does not add it.

The chooseOperation(operation) method selects an operation (operation) and saves it. If the current operand (currentOperand) is empty, the method does nothing. If the previous operand (previousOperand) is not empty, then the compute() method is called, which calculates the result and stores it in the current operand. After that, the method sets the value of the current operand to an empty string, and the previous operand is equal to the current operand.

The compute() method computes the result of a mathematical operation based on the values ​​of the previous and current operands and stores it in the current operand.

The getDisplayNumber(number) method converts a number (number) into a string for display on the calculator screen. The method splits the number into integer and decimal parts, formats the integer part using the toLocaleString() method, and returns the generated string.

The updateDisplay() method updates the values ​​of DOM elements to display the current and previous operands.

After defining the Calculator class, the code creates a calculator object using DOM elements to display the previous and current operands. Next, the code adds event handlers to the DOM elements so that the user can interact with the calculator, and updates the values ​​of the DOM elements after each operand change.

Comments in the code describe each method and its purpose, and explain what values ​​are stored and how they are updated on the calculator screen.
