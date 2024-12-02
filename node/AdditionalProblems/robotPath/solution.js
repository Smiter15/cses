// Test with specific test case:
// cat AdditionalProblems/robotPath/tests/1.in | node AdditionalProblems/robotPath/solution.js

// Test against all test cases with:
// node test AdditionalProblems/robotPath

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10); // Number of commands
  const commands = lines.slice(1).map((line) => {
    const [d, x] = line.split(' ');
    return { direction: d, distance: parseInt(x, 10) };
  });
  solveProblem(n, commands);
});

function solveProblem(n, commands) {
  console.log('Number of commands (n):', n, '\nCommands:', commands);
}
