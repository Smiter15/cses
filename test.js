import { existsSync, readdirSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { execSync } from 'child_process';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

// Define __dirname for ES modules
const __dirname = dirname(fileURLToPath(import.meta.url));

// Get the problem name from command-line arguments
const problemName = process.argv[2];
if (!problemName) {
  console.error(chalk.red('Please provide a problem name.'));
  process.exit(1);
}

const testFolder = join(__dirname, problemName, 'tests');
const solutionPath = join(__dirname, problemName, 'solution.js');

// Check if the specified problem folder exists
if (!existsSync(testFolder) || !existsSync(solutionPath)) {
  console.error(
    chalk.red(
      `Problem directory or solution.js for "${problemName}" not found.`
    )
  );
  process.exit(1);
}

// Run each test case
readdirSync(testFolder).forEach((file) => {
  if (file.endsWith('.in')) {
    const testCaseName = file.replace('.in', '');
    const inputFilePath = join(testFolder, `${testCaseName}.in`);
    const outputFilePath = join(testFolder, `${testCaseName}.out`);

    const input = readFileSync(inputFilePath, 'utf8').trim();
    const expectedOutput = readFileSync(outputFilePath, 'utf8').trim();

    try {
      const actualOutput = execSync(`node ${solutionPath}`, {
        input: input,
        encoding: 'utf8',
      }).trim();

      if (actualOutput === expectedOutput) {
        console.log(chalk.green(`✓ Test ${testCaseName} passed!`));
      } else {
        console.log(chalk.red(`✗ Test ${testCaseName} failed!`));
        console.log(chalk.yellow(`  Expected: ${expectedOutput}`));
        console.log(chalk.yellow(`  Got:      ${actualOutput}`));
      }
    } catch (err) {
      console.error(chalk.red(`Error executing test ${testCaseName}:`), err);
    }
  }
});
