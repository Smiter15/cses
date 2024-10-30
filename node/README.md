# CSES Problem Solutions in JavaScript

This repository provides a starter setup for solving [CSES problem set](https://cses.fi/) challenges using Node.js and JavaScript. Solutions are written in JavaScript and tested with a custom Node.js testing script. This setup helps you practice algorithms in a JavaScript environment while verifying your solutions locally.

## Getting Started

### Installation

To get started, clone the repository and install dependencies with:

```bash
npm install
```

### Folder Structure

Each problem should be organized in its own folder with the following structure:

```
/cses/
│
├── node/                            # Solutions and tests in JavaScript (Node.js)
│   ├── <section-name>/              # Folder for a specific section e.g. IntroductoryProblems
│   │   ├── <problem-name>/          # Folder for a specific problem e.g. weirdAlgorithm
│   │   │   ├── solution.js          # Solution file for the problem
│   │   │   └── tests/               # Folder containing test cases
│   │   │       ├── 1.in             # Input for test case 1
│   │   │       └── 1.out            # Expected output for test case 1
```

Write your solution in the `solution.js` file.

### Example

Weird algorithm in the Introductory Problems section has been completed as an example file. You can find the solution in `node/IntroductoryProblems/weirdAlgorithm/solution.js`.

### Testing Against test cases

To test your solution against the provided test cases, run:

```bash
node test <section-name>/<problem-name>
```

### Node Environment Setup and Usage

All commands should be run from within the `node` directory to ensure paths and configurations are correctly aligned.

### Testing Solutions Locally

To test your solution file for a specific input file locally, use the `cat` command to read from one of the `.in` files in your `tests` folder:

```bash
cat <section-name>/<problem-name>/tests/<input-file>.in | node <section-name>/<problem-name>/solution.js
```

For example, to test with the input in `1.in` for the `weirdAlgorithm` problem in the `IntroductoryProblems` section, run:

```bash
cat IntroductoryProblems/weirdAlgorithm/tests/1.in | node IntroductoryProblems/weirdAlgorithm/solution.js
```

Replace `1.in` with any other test file to test different inputs as needed.

### Output Requirements

When your solution requires output over multiple lines, use separate `console.log` statements for each line to match expected output formatting. For example:

```javascript
console.log(result1);
console.log(result2);
```

This ensures each answer appears on a new line, as required by the test cases.

## Debugging Tips

- **Console Logging**: Use `console.log()` statements in `solution.js` to debug outputs or intermediate steps.
- **Color-coded Test Output**: The testing setup uses `chalk` for clear pass/fail messages when you run `npm test`.

This repository is intended to help JavaScript users practice and improve their algorithm skills on CSES. Feel free to contribute improvements!
