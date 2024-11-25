// Test with specific test case:
// cat Mathematics/primeMultiples/tests/1.in | node Mathematics/primeMultiples/solution.js

// Test against all test cases with:
// node test Mathematics/primeMultiples

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, k] = lines[0].split(' ').map(Number); // n is the range, k is the number of primes
  const primes = lines[1].split(' ').map(Number); // List of prime numbers

  solveProblem(n, k, primes);
});

function solveProblem(n, k, primes) {
  console.log('n:', n, '\nk:', k, '\nPrimes:', primes);
}
