// Test with specific test case:
// cat SortingAndSearching/apartments/tests/1.in | node SortingAndSearching/apartments/solution.js

// Test against all test cases with:
// node test SortingAndSearching/apartments

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m, k] = lines[0].split(' ').map(Number);
  const applicants = lines[1].split(' ').map(Number);
  const apartments = lines[2].split(' ').map(Number);
  solveProblem(n, m, k, applicants, apartments);
});

function solveProblem(n, m, k, applicants, apartments) {
  console.log("Input n, m, k:", n, m, k, "\nApplicants:", applicants, "\nApartments:", apartments);
}
