var readline = require('readline'),
    isFirstLine = true;
    caseNum = 0,
    numCases = 0;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    if (isFirstLine) {
      isFirstLine = !isFirstLine;
      numCases = parseInt(line)
    }
    else if (caseNum < numCases) {
      calcMinFlips(line);
      caseNum++;
    }
    if (caseNum === numCases) {
      process.exit(0);
    }
})

function calcMinFlips(line) {
  transitions = countTransitions(line);
    if ((transitions%2 === 0 && line.charAt(0) === '+') ||
        (transitions%2 === 1 && line.charAt(0) === '-')) {
      console.log(`Case #${caseNum + 1}: ${transitions}`);
    }
    else {
      console.log(`Case #${caseNum + 1}: ${transitions + 1}`);
    }
}

function countTransitions(string) {
  var transitions = 0;
  for (var i = 0; i < string.length-1; i++) {
    if (string.charAt(i) !== string.charAt(i + 1)){
      transitions++;
    }
  }
  return transitions;
}
