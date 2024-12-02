// Test with specific test case:
// cat AdditionalProblems/programmersAndArtists/tests/1.in | node AdditionalProblems/programmersAndArtists/solution.js

// Test against all test cases with:
// node test AdditionalProblems/programmersAndArtists

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [a, b, n] = lines[0].split(' ').map(Number); // Programmers, artists, and total applicants
  const applicants = lines.slice(1).map((line) => line.split(' ').map(Number)); // Applicants' skills
  solveProblem(a, b, n, applicants);
});

function solveProblem(a, b, n, applicants) {
  console.log('Programmers needed:', a, '\nArtists needed:', b, '\nTotal applicants:', n, '\nApplicants:', applicants);
}
