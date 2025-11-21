// fnc statement
function abcd(){

}


//fnc expression
var abcd = function(){

}


//anonymous functiion
function(){

}

//fat arrow function
()=>{

}

//fat arrow function with one parameter
let abcd =(a) =>{

}
abcd(5);

//fat arrow function with implicit return
var abcd = ()=> "prashant";

var ans = abcd();
console.log(ans);
//end of functions



//rest parameters
function abcd(a,b,c,...restitem){
    console.log(a,b,c,restitem);
}
abcd(1,2,3,4,5,6,7,8,9);
//the output will be 1 2 3 [4,5,6,7,8,9]



[//iife-immediately invoked function expression

//cant assign the value of a variable declared inside the function
(function abcd(){
    var a = 10;
    console.log(a);
})();
console.log(a); //error: a is not defined


//can assign value outside the function
var ans = (function abcd(){
    var a = 10;
    return {
        set: function(val){
            a = val;
        },
        get: function(){
            console.log(a);
        },
    };
})();

ans.set(20);
ans.get();]


//hofs-higher order functions
//hof-returns function
1. function abcd(){
    return function(){
        console.log("hello world");
    }
}
abcd()();

//hof-accepts function in parameter
2.  function abcd(fnc){
    fnc();
}

abcd(function(){
    console.log("hello world");
})


