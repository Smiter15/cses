# CSES Algorithm Practice Framework

This repository is designed to help developers practice and solve the [CSES problem set](https://cses.fi/) using various programming languages. It provides a structured environment for writing, testing locally, and submitting algorithm solutions in multiple languages to CSES. This repository is not intended to provide direct solutions to the problems but rather a framework for practicing and verifying solutions.

The Weird Algorithm problem in the Introductory Problems section has been completed as an example for each language. You can find the solution in the respective language folder.

## Project Structure

The repository is organized by programming language, making it easy to add solutions and tests for different languages. Each language folder contains the necessary setup for solving CSES problems and running tests locally.

```
cses/
├── node/                      # Solutions and tests in JavaScript (Node.js)
│   ├── <section-name>/        # Folder for a specific section e.g. IntroductoryProblems
│   │   └── <problem-name>/    # Folder for a specific problem e.g. weirdAlgorithm
│   │       ├── solution.js    # Solution file for the problem
│   │       └── tests/         # Folder containing test cases
│   │           ├── 1.in       # Input for test case 1
│   │           └── 1.out      # Expected output for test case 1
│   └── README.md              # Instructions for Node.js environment
├── python/                    # Solutions and tests in Python (future)
└── README.md                  # General repository information
```

## Getting Started

### Installing Dependencies

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Smiter15/cses.git
   cd cses
   ```

2. **Navigate to the desired language folder**:
   - For Node.js, navigate to `cses/node/` and follow the setup instructions in `cses/node/README.md`.

### Running Tests

Each language folder contains specific instructions for running tests. For example, in the Node.js environment, you can run:

```bash
node test <section-name>/<problem-name>
```

For example, to test the `weirdAlgorithm` problem in the `IntroductoryProblems` section, you would run:

```bash
node test IntroductoryProblems/weirdAlgorithm
```

Refer to the `README.md` file within each language folder for more details.

## Contributing

We welcome contributions to expand the repository to other languages and add test cases. To contribute:

1. **Fork the repository** and create a new branch for your language or feature.
2. **Add your feature** within the appropriate language folder.
3. **Submit a pull request** with a description of your changes.

### Adding New Languages

If you'd like to add a new language environment (e.g., Python), please create a new folder in the `cses` directory following the structure below:

```
cses/
└── python/
    ├── <section-name>/
    │     └── <problem-name>/
    │          ├── solution.py     # Solution file for the problem
    │          └── tests/          # Folder containing test cases for the problem
    └── README.md                  # Instructions for setting up and testing in Python
```

Feel free to reach out with any questions or suggestions to make this project better for everyone practicing algorithm challenges!

## License

This project is open-source and available under the MIT License.
