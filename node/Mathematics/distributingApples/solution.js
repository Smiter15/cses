// Test with specific test case:
// cat Mathematics/distributingApples/tests/1.in | node Mathematics/distributingApples/solution.js

// Test against all test cases with:
// node test Mathematics/distributingApples

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const [n, m] = input.trim().split(' ').map(Number); // n: number of children, m: number of apples

  solveProblem(n, m);
});

function solveProblem(n, m) {
  console.log('n:', n, '\nm:', m);
}
