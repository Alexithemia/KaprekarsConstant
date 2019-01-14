exports.kaprekarsConstant = function (num) {
  let numString = num.toString()
  let same = 1;
  let iterations = 0;

  for (let i = 1; i < numString.length; i++) {
    if (numString[i - 1] === numString[i]) {
      same++;
    }
  }

  if (same === numString.length) {
    return 'Must have at least 2 different digits';
  }

  while (numString.length < 4) {
    numString = numString.concat('0');
  }

  function sortAndSub(num) {
    if (num === 6174) {
      return iterations;
    }
    let nString = num.toString();
    let numArr = nString.split('')

    for (let i = 0; i < numArr.length; i++) {
      let smallest = i;
      for (let j = i + 1; j < numArr.length; j++) {
        if (numArr[j] < numArr[smallest]) {
          smallest = j;
        }
      }
      if (i !== smallest) {
        var temp = numArr[i];
        numArr[i] = numArr[smallest];
        numArr[smallest] = temp;
      }
    }
    numString = numArr.join('')
    revString = numArr.reverse().join('');
    iterations++

    return sortAndSub(parseInt(revString) - parseInt(numString));
  }
  return sortAndSub(Number(numString))
}
