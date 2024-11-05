// Test with specific test case:
// cat RangeQueries/salaryQueries/tests/1.in | node RangeQueries/salaryQueries/solution.js

// Test against all test cases with:
// node test RangeQueries/salaryQueries

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, q] = lines[0].split(' ').map(Number);
  const salaries = lines[1].split(' ').map(Number);
  const queries = lines.slice(2).map((line) => {
    const parts = line.split(' ');
    return [parts[0], ...parts.slice(1).map(Number)];
  });
  solveProblem(n, q, salaries, queries);
});

function solveProblem(n, q, salaries, queries) {
  console.log('n:', n, '\nq:', q, '\nSalaries:', salaries, '\nQueries:', queries);
}
