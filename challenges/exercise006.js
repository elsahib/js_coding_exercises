/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  let result = 0;
  arr.forEach(element => {
    if (element % 3 === 0 || element % 5 === 0){
      result+=element;
    }
  });
return result
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  let result = true;
  const dnaLetters = ["A","C","G","T"];
  let strArr = str.split("");
  strArr.forEach(element => {
    if (!dnaLetters.includes(element) && result=== true){
  result = false;
  }});
  return result
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  let result = "";
  let strArr = str.split("");
  strArr.forEach(element => {
    switch(element){
        case "A":
          result += "T";
          break;
        case "T":
          result += "A";
          break;
        case "C":
          result += "G";
          break;
        case "G":
          result += "C";
          break;      
    }
  });
  return result;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  let result = true;
  if (n < 2){
    result = false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++){
    if (n % i === 0){
    result = false;
  }
  }
  return result;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  let result =[];
  for (let i = 0; i < n; i++){
    result[i]=[]
    for (let j = 0; j < n; j++){
      result[i][j] = fill;
    }
  }
  return result;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day.
 *  The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  let result = 0;
  staff.forEach(staffMember => {
    let rota = staffMember.rota;
      rota.forEach(dayOfRota => {
        if (day===dayOfRota){
          result +=1;
        }
      });
    
  });
  return result >= 3;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
