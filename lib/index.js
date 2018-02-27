let flipper = require('./pancake-flipper'),
    numCases = 0,
    caseNum = 0,
    isFirstLine = true;


let runStdIn = () => {
  processLines(require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  }));
};

let runFileIn = () => {
  processLines(require('readline').createInterface({
    input: require('fs').createReadStream('file.in')
  }));
};

let processLines = (reader) => {
  reader.on('line', (line) => {
    if (isFirstLine) {
      isFirstLine = !isFirstLine;
      numCases = parseInt(line)
    }
    else if (caseNum < numCases) {
      console.log(`Case #${caseNum + 1}: ${flipper.calcMinFlips(line)}`);
      caseNum++;
    }
    if (caseNum === numCases) {
      process.exit(0);
    }
  })
};


module.exports = {
    runStdIn: runStdIn,
    runFileIn: runFileIn
}
