// ***************convert an array from odd num to even num**************
// using for of loop
const oddNums = [1, 3, 5, 7, 9];
// let evenNum = [];
// for(let oddNum of oddNums){
//     const evennumber = oddNum + 1;
//     evenNum.push(evennumber);
// }
// console.log(evenNum);

// using for loop
// for(let i = 0; i < oddNums.length; i++){
//     const evenValue = oddNums[i];
//     const evenNumber = evenValue + 1;
//     evenNum.push(evenNumber);
// }
// console.log(evenNum);

// using map method
function evenNums (evens){
    const evenNum = evens + 1;
    return evenNum;
}

const result = oddNums.map(evenNums);
// console.log(result);



// **********separate numbers devisible by 10**********
// with array filter method
const isArray = [33, 50, 79, 78, 90, 101, 30];
   const devide10 = i => i % 10 === 0;
const Result = isArray.filter(devide10);
// console.log(Result);

// with array find method
const output = isArray.find(devide10);
console.log(output);