process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0], 10);
  solveProblem(n, lines[1]);
});

function solveProblem(n, numbersLine) {
  console.log('n', n);
  console.log('numbersLine', numbersLine);
  console.log(4);
}
