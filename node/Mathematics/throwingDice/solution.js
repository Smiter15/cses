// Test with specific test case:
// cat Mathematics/throwingDice/tests/1.in | node Mathematics/throwingDice/solution.js

// Test against all test cases with:
// node test Mathematics/throwingDice

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const n = BigInt(input.trim()); // Target sum

  solveProblem(n);
});

function solveProblem(n) {
  console.log('n:', n.toString());
}
