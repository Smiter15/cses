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
├── <problem-name>/
│   ├── solution.js         # Your solution file for the problem
│   └── tests/              # Folder containing test cases
│       ├── 1.in            # Input for test case 1
│       └── 1.out           # Expected output for test case 1
```

Write your solution in the `solution.js` file.

### Testing Solutions Locally

To test your solution file for a single input locally, you can use the `echo` command to pass in input values directly to your `solution.js` file:

```bash
echo "3" | node <problem-name>/solution.js
```

In this example, `3` is passed as input.

#### Multiple Values in a Single Line

If your solution requires multiple inputs in one line, separate them with a space:

```bash
echo "3 4" | node <problem-name>/solution.js
```

#### Multiple Values Across Multiple Lines

To provide input across multiple lines, use `-e` with `echo` and `\n` to separate lines:

```bash
echo -e "3\n4" | node <problem-name>/solution.js
```

This command passes `3` on the first line and `4` on the second.

## Debugging Tips

- **Console Logging**: Use `console.log()` statements in `solution.js` to debug outputs or intermediate steps.
- **Color-coded Test Output**: The testing setup uses `chalk` for clear pass/fail messages when you run `npm test`.

This repository is intended to help JavaScript users practice and improve their algorithm skills on CSES. Feel free to contribute improvements!
