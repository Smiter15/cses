// Test with specific test case:
// cat RangeQueries/hotelQueries/tests/1.in | node RangeQueries/hotelQueries/solution.js

// Test against all test cases with:
// node test RangeQueries/hotelQueries

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const hotels = lines[1].split(' ').map(Number);
  const groups = lines[2].split(' ').map(Number);
  solveProblem(n, m, hotels, groups);
});

function solveProblem(n, m, hotels, groups) {
  console.log("n:", n, "\nm:", m, "\nHotels:", hotels, "\nGroups:", groups);
}
