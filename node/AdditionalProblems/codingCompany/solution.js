// Test with specific test case:
// cat AdditionalProblems/codingCompany/tests/1.in | node AdditionalProblems/codingCompany/solution.js

// Test against all test cases with:
// node test AdditionalProblems/codingCompany

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, x] = lines[0].split(' ').map(Number); // Number of coders and max allowed penalty sum
  const skillLevels = lines[1].split(' ').map(Number); // Skill levels of the coders
  solveProblem(n, x, skillLevels);
});

function solveProblem(n, x, skillLevels) {
  console.log('Number of coders (n):', n, '\nMax penalty sum (x):', x, '\nSkill levels:', skillLevels);
}
