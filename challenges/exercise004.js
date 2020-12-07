function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let result = [];
  nums.forEach(element => {
    if (element < 1) {
      result.push(element)
    }
  });
  return result
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let result = []
  names.forEach(element => {
    if (element.charAt(0) === char) {
      result.push(element)
    }
  })
  return result
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let result = []
  words.forEach(element => {
    let first3Letters = element.slice(0, 3);
    if (first3Letters === "to ") {
      result.push(element)
    }
  })
  return result
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let result = []
  nums.forEach(element => {
    if (Number.isInteger(element)) {
      result.push(element)
    }
  })
  return result
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let result = []
  users.forEach(element => {
    if (element.data.city.displayName) {
      result.push(element.data.city.displayName)
    }
  });
  return result
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let result = []
  nums.forEach(element => {
    result.push(Math.round(Math.sqrt(element) * 100) / 100)
  });
  return result
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let result = [];
  sentences.forEach(element => {
    if (element.toLowerCase().includes(str.toLowerCase())) {
      result.push(element)
    }
  });
  return result
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let result = []
  triangles.forEach(element => {
    result.push(Math.max(...element))
  });
  return result
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
