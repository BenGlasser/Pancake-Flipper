let flipper = require('./pancake-flipper'),
    numCases = 0,
    caseNum = 0,
    isFirstLine = true;


let runStdIn = () => {
  processLines(require('readline').createInterface({
    input: process.stdin
  }));
};

let runFileIn = (file) => {
  processLines(require('readline').createInterface({
    input: require('fs').createReadStream(file)
  }));
};

let processLines = (reader) => {
  reader.on('line', (line) => {
    if (isFirstLine) {
      isFirstLine = !isFirstLine;
      numCases = parseInt(line)
    }
    else if (caseNum < numCases) {
      console.log(`Case #${caseNum + 1}: ${flipper.calcMinFlips(line.trim())}`);
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
