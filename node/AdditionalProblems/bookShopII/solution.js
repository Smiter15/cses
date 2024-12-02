// Test with specific test case:
// cat AdditionalProblems/bookShopII/tests/1.in | node AdditionalProblems/bookShopII/solution.js

// Test against all test cases with:
// node test AdditionalProblems/bookShopII

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, x] = lines[0].split(' ').map(Number); // Number of books and max total price
  const prices = lines[1].split(' ').map(Number); // Prices of books
  const pages = lines[2].split(' ').map(Number); // Pages of books
  const copies = lines[3].split(' ').map(Number); // Number of copies per book
  solveProblem(n, x, prices, pages, copies);
});

function solveProblem(n, x, prices, pages, copies) {
  console.log('Books:', n, '\nMax price:', x, '\nPrices:', prices, '\nPages:', pages, '\nCopies:', copies);
}
