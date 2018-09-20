function produceDrivingRange(blockRange) {
  return function(startingBlock, endingBlock) {
    let start = parseInt(startingBlock);
    let end = parseInt(endingBlock);
    let distance = Math.abs(end - start);
    let difference = blockRange - distance;

    if (difference > 0) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(tip) {
  return function(rideFare) {
    return rideFare * tip;
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name
    }
  }
}
