// Test with specific test case:
// cat GraphAlgorithms/giantPizza/tests/1.in | node GraphAlgorithms/giantPizza/solution.js

// Test against all test cases with:
// node test GraphAlgorithms/giantPizza

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const wishes = lines.slice(1).map(line => {
    const [wish1, topping1, wish2, topping2] = line.split(' ');
    return [wish1, +topping1, wish2, +topping2];
  });
  solveProblem(n, m, wishes);
});

function solveProblem(n, m, wishes) {
  console.log("Family members:", n, "\nToppings:", m, "\nWishes:", wishes);
}
