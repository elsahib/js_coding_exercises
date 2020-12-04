function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let result = []
  nums.forEach(element => {
    result.push(element * element)
  });
  return result
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let result = ""
  for (let i=0;i < words.length;i ++) {
    let firstChar = words[i].charAt(0);
    let remaining = words[i].slice(1);
    if (i === 0 ){
      result += words[i]
    } else {
      result += firstChar.toUpperCase()+ remaining
    }
    
  }
  return result
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let result = 0;
  people.forEach(element => {
   if (element.subjects.length > 0){
     result += element.subjects.length
   }
    
  });
  return result
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let result;
  menu.forEach(element => {
    if (result !== true){
      result = element.ingredients.includes(ingredient)
    }
  });
  return result
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let result = [];
  arr1.forEach( element =>{
    if (arr2.includes(element) && !result.includes(element)){
      result.push(element)
    }
  })
  result.sort(function(a, b){return a-b})
  return result
}


module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
