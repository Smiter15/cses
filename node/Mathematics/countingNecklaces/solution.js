// Test with specific test case:
// cat Mathematics/countingNecklaces/tests/1.in | node Mathematics/countingNecklaces/solution.js

// Test against all test cases with:
// node test Mathematics/countingNecklaces

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const [n, m] = input.trim().split(' ').map(Number); // Number of pearls and colors

  solveProblem(n, m);
});

function solveProblem(n, m) {
  console.log('n:', n, '\nm:', m);
}
