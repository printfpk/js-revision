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

