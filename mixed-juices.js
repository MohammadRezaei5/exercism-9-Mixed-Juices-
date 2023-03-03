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
