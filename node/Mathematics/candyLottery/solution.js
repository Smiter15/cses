// Test with specific test case:
// cat Mathematics/candyLottery/tests/1.in | node Mathematics/candyLottery/solution.js

// Test against all test cases with:
// node test Mathematics/candyLottery

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const [n, k] = input.trim().split(' ').map(Number); // Number of children, range of candies

  solveProblem(n, k);
});

function solveProblem(n, k) {
  console.log('n:', n, '\nk:', k);
}
