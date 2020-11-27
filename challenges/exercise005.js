const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  let result = null
  let index = nums.indexOf(n)
  if (index >= 0 && index+1 < nums.length){
    result = nums[index+1]
  }
  return result
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  let ones=0,zeros=0;
  [...str].forEach(element =>{
    if (!isNaN(element)){
      if (parseInt(element)==0){
        zeros+=1
      } else if (parseInt(element)==1){
        ones+=1
      }
  }
})
return {1:ones, 0: zeros}
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  let num2str = n.toString()
  let str2arr = num2str.split("")
  str2arr.reverse()
  let arr2str = str2arr.join("")
  let result  = parseInt(arr2str)
  return result

};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  let result = 0;
  arrs.forEach(element =>{
    element.forEach(num =>{
      result += num
    })
  })
  return result
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  if (arr.length >= 2){
    let first = arr[0]
    let last = arr[arr.length -1]
    arr.splice(0,1,last)
    arr.splice(-1,1,first)
  return arr 
  } else {
    return arr
  }
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  let result = false;
  let valuesArr = Object.values(haystack)
  valuesArr.forEach(item =>{
    if (typeof item === "string" && result === false){
     result = item.toLowerCase().includes(searchTerm.toLowerCase())}
    })

return result
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  const count= (arr,value)=>{
    return arr.reduce((total,element)=>{
      return (element.toLowerCase() === value.toLowerCase()? total + 1:total)
    },0)
  }
  let cleanTxt = str.replace(regex, '');
  let result = {};
  let str2Arr = cleanTxt.split(" ");
  str2Arr.forEach(element => {
    result[element.toLowerCase()] = count(str2Arr,element)
  });
  return result
};


module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
