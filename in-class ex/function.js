
const product = (a,b) => {
    return a*b;
  };
  console.log(product(8,2));
  
  
  const difference = (num1, num2) => {
      return num1 - num2;
  };
   console.log(difference(8,2));
  
  const printDay = (num) => {
  const day = {
        1: "Sunday",
        2: "Monday",
        3: "Tuesday",
        4: "Wednesday",
        5: "Thursday",
        6: "Friday",
        7: "Saturday",
      };
    
    return day[num];  
  }
  console.log(printDay(4));
  console.log(printDay(41));
  
  
  function lastElement(arr){
      return arr.pop();
  
    } 
    console.log(lastElement([1,2,3,9])); // 4
    console.log(lastElement([])); // undefined
  
  
  function numberCompare(a, b) {
    
      if (a === b) {
          return "Numbers are equal";
      } else if (a > b) {
          return "First is greater"
      } else {
          return "Second is greater"
      }
  }
  
  console.log(numberCompare(1, 1)); // "Numbers are equal"
  console.log(numberCompare(2, 1)); // "First is greater"
  console.log(numberCompare(1, 2)); // "Second is greater"
  
  var name = prompt("What's up shorty?");
  
  // const singleLetter = (word, singleLetter) => {
  //   word = word.toUpperCase();
  //   letter = letter.toUpperCase();
  
  //   if(!word.match(new))
  
    
  // }
  
  
  
    function isPalindrome(str){
      return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
    
      for(let i =0; i<str.length/2; i++){
        if(str[i].toLowerCase() !== str[str.length-1-i].toLowerCase()){
          return false;
        }
      }
      return true;
    }

//mapper function
    let arr = [2,5,7,8]
    function mapper (arr, callback) {
        
      for (let i = 0; i < arr.length; i++ ) {
        newArr.push(callback(arr[i]));
      }
      return newArr;
    }

//filter method 
const newArr = [4,1,9,6,0,3,5,7,8,2];

function isEven(num) {
  return num % 2 === 0;
}

function filter (arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++ ) {
    callback(arr[i])
    if (callback(arr[i])) {
      newArr.push(arr[i]);
    }
} 
return newArr;
}   

console.log(filter(newArr, isEven));