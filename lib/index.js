let flipper = require('./pancake-flipper')

let runStdIn = () => {
  var readline = require('readline'),
      isFirstLine = true;
      caseNum = 0,
      numCases = 0,
      rl = readline.createInterface({
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
        flipper.calcMinFlips(line);
        caseNum++;
      }
      if (caseNum === numCases) {
        process.exit(0);
      }
  })
};

let runFileIn = () => {};


module.exports = {
    runStdIn: runStdIn,
    runFileIn: runFileIn
}
