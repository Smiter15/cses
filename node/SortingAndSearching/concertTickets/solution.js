// Test with specific test case:
// cat SortingAndSearching/concertTickets/tests/1.in | node SortingAndSearching/concertTickets/solution.js

// Test against all test cases with:
// node test SortingAndSearching/concertTickets

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const ticketPrices = lines[1].split(' ').map(Number);
  const maxPrices = lines[2].split(' ').map(Number);
  solveProblem(n, m, ticketPrices, maxPrices);
});

function solveProblem(n, m, ticketPrices, maxPrices) {
  console.log("n, m:", n, m, "\nTicket Prices:", ticketPrices, "\nMax Prices:", maxPrices);
}
