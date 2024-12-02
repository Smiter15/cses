// Test with specific test case:
// cat AdditionalProblems/cyclicArray/tests/1.in | node AdditionalProblems/cyclicArray/solution.js

// Test against all test cases with:
// node test AdditionalProblems/cyclicArray

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, k] = lines[0].split(' ').map(Number); // Size of array and max sum for subarrays
  const array = lines[1].split(' ').map(Number); // Array elements
  solveProblem(n, k, array);
});

function solveProblem(n, k, array) {
  console.log('Number of Elements (n):', n, '\nMax Subarray Sum (k):', k, '\nArray:', array);
}
