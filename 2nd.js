// .map------return is used
var arr = [1, 2, 3, 4, 5];

arr.map(function(value){
    return value * 2; //[2,4,6,8,10]
})

//forEach------no return    
arr.forEach(function(value){
    console.log(value * 2); //2 4 6 8 10
})

//filter------return is used
var arr = [1, 2, 3, 4, 5];

var ans = arr.filter(function(value){
    return value === 2; // [2]
})

//map-new array mei returned value dalo
//filter-new array mei true returned value dalo
//reduce-ek array se koi ek value bnao

//reduce------return is used
arr.reduce(function(accumulator, key){
    return accumulator + key; 
    
}, initialValue)
//example
var arr = [1, 2, 3, 4, 5];

var mutiply = arr.reduce(function(acc, val){
    return acc * val; //120
}, 1)

//Use a for...of loop to iterate over the string "JavaScript
let str = "JavaScript";
for(let i of str){
    console.log(i);
}

//remove duplicate item from array
let arr = [1, 2, 2, 3, 4, 4, 5];
let ans = [...new Set(arr)]; //[1,2,3,4,5]
console.log(ans)

//2nd largest number in array
let arr = [3,1,4,3,1,2,5]
let ans = [...new Set(arr)];
ans.sort((a,b) => b-a);
console.log(ans[1]) //4