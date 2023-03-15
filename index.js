// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue >= 42) {
        return someValue - 42;
    }
    else if (someValue < 42) {
        return 42 - someValue;
    }
    distanceFromHqInBlocks(43);
    distanceFromHqInBlocks(50);
    distanceFromHqInBlocks(34);
  }



function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
    
  }
distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet(start, destination) {
  if (start > destination) {
    return (start - destination) * 264;
  }
  else if (destination > start) {
    return (destination - start) * 264;
  }
  }
distanceTravelledInFeet(43, 48)
distanceTravelledInFeet(50, 60)
distanceTravelledInFeet(34, 28)

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) < 400) {
    return 0;
  }
  else if (distanceTravelledInFeet(start, destination) < 2000) {
    return (distanceTravelledInFeet(start, destination) - 400) * 0.02;
  }
  else if (distanceTravelledInFeet(start, destination) <= 2500) {
    return 25;
  }
  else if (distanceTravelledInFeet(start, destination) > 2500) {
    return 'cannot travel that far';
  }
 
}
calculatesFarePrice(43, 44)
calculatesFarePrice(34, 32)
calculatesFarePrice(50, 58)
calculatesFarePrice(34, 24)