function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  let result = []
  nums.forEach(element => {
    result.push(element * element)
  });
  return result
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  let result = ""
  for (let i=0;i < words.length;i ++) {
    let firstChar = words[i].charAt(0);
    let remaining = words[i].slice(1);
    if (i == 0 ){
      result += words[i]
    } else {
      result += firstChar.toUpperCase()+ remaining
    }
    
  }
  return result
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
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
  // Your code here!
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
  // Your code here!
  let result = [];
  arr1.forEach( element =>{
    if (arr2.includes(element) && !result.includes(element)){
      result.push(element)
    }
  })
  result.sort(function(a, b){return a-b})
  return result
}
const menu = [
  {
    name: "tofu fritters",
    ingredients: ["tofu", "egg yolk", "breadbrumbs", "paprika"]
  },
  {
    name: "black bean curry",
    ingredients: ["black beans", "garam masala", "rice"]
  },
  {
    name: "chocolate tiffin",
    ingredients: [
      "dark chocolate",
      "egg",
      "flour",
      "brown sugar",
      "vanilla essence"
    ]
  },
  {
    name: "hummus",
    ingredients: ["chickpeas", "tahini", "lemon", "garlic", "salt"]
  }
];

console.log(checkIngredients(menu, "osman"));

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
