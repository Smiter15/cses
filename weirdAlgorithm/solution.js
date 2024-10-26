// Test in the terminal with:
// echo "3" | node weirdAlgorithm/solution.js

// Test against test cases with:
// node test weirdAlgorithm

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const n = parseInt(input.trim(), 10);
  solveProblem(n);
});

function solveProblem(n) {
  const result = [];

  while (n !== 1) {
    result.push(n);
    n = n % 2 === 0 ? n / 2 : n * 3 + 1;
  }
  result.push(1);

  // this is the answer response
  console.log(result.join(' '));
}
