function produceDrivingRange(blockRange) {
  return function(rg1, rg2) {
    let range = parseInt(rg1) - parseInt(rg2)
    if (Math.abs(range) > blockRange) {
      let outOfRange = Math.abs(range) - blockRange
      return `${outOfRange} blocks out of range`;
    } else {
      return `within range by ${Math.abs(range)}`;
    }
  }
}

function produceTipCalculator() {
  return function(percentFare) {
    percentFare * total
  }
}
