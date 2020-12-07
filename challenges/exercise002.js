function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city === "Manchester" ? true : false;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return Math.ceil(people / 40)
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let result = 0
  arr.forEach(element => {
    if (element === "sheep") {
      result += 1;
    }

  });
  return result
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  let postcode = person.address.postCode
  return isNaN(postcode.charAt(1)) ? false : postcode.charAt(0) == "M" ? true : false;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
