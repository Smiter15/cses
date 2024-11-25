// Test with specific test case:
// cat Mathematics/movingRobots/tests/1.in | node Mathematics/movingRobots/solution.js

// Test against all test cases with:
// node test Mathematics/movingRobots

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const k = Number(input.trim()); // Number of steps

  solveProblem(k);
});

function solveProblem(k) {
  console.log('k:', k);
}
