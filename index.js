let produceDrivingRange = function(blockRange) {
  return function(range1, range2) {
    let range = parseInt(range1) - parseInt(range2)
    if (true) {
      if (Math.abs(range) > blockRange) {
        let outOfRange = Math.abs(range) - blockRange
        return `${outOfRange} blocks out of range`;
    } else {
      return `within range by ${Math.abs(range)}`;
    }
  }
}
