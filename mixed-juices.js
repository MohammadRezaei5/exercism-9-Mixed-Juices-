// look back again 🙂🙂🙂

function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
      break;
    case "Energizer":
    case "Green Garden":
      return 1.5;
      break;
    case "Tropical Island":
      return 3;
      break;
    case "All or Nothing":
      return 5;
      break;
    default:
      return 2.5;
  }
}
// console.log(timeToMixJuice('Tropical Island'));
// console.log(timeToMixJuice('Berries & Lime'));
// console.log(timeToMixJuice('Green Garden'));

///----///

function limesToCut(wedgesNeeded, limes) {
  let count = 0;
  while (limes.length > 0 && wedgesNeeded > 0) {
    switch (limes[0]) {
      case "small":
        wedgesNeeded -= 6;
        break;
      case "medium":
        wedgesNeeded -= 8;
        break;
      case "large":
        wedgesNeeded -= 10;
        break;
      default:
        console.log("error");
        break;
    }
    count++;
    limes.splice(0, 1);
  }
  return count;
}

// console.log(limesToCut(25, ['small', 'small', 'large', 'medium', 'small']));
