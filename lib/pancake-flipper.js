let calcMinFlips = (line) => {
  transitions = countTransitions(line);
    if ((transitions%2 === 0 && line.charAt(0) === '+') ||
        (transitions%2 === 1 && line.charAt(0) === '-')) {
      console.log(`Case #${caseNum + 1}: ${transitions}`);
    }
    else {
      console.log(`Case #${caseNum + 1}: ${transitions + 1}`);
    }
}

let countTransitions = (string) => {
  var transitions = 0;
  for (var i = 0; i < string.length-1; i++) {
    if (string.charAt(i) !== string.charAt(i + 1)){
      transitions++;
    }
  }
  return transitions;
}

module.exports = {
  calcMinFlips: calcMinFlips
}
