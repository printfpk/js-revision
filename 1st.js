// create a function that takes a callback and executes it after every 'n' seconds indefinitely.

function barbaarchlo(fn, time){
    setInterval(fn, time*1000);
}

barbaarchlo(function(){
    console.log("Hello, World!");
}, 2)



// implement a function that returns a function with a preset greeting (closure)

function greetkro(greeting){
    return function(name){
        console.log(`${greeting} ${name}`)
    }
}

var greetfnc = greetkro("hello");
greetfnc("John");

//implement a function that takes a call back and only executes it once

function onlyOnceCaller(){
    let executed = false;
    return function(){
        if(!executed){
            executed = true;
            cb();
        }
    }
}
onlyOnceCaller(function(){
    console.log("This will be printed only once");
})

//implement a function that throttles another function 
function throt(fn, delay){
    let lastcall =0;
    return function(){
        let current = Date.now();
        if(current - lastcall >= delay){
            lastcall = current;
            fn();
        }
    }
}
var newfnc = throt(function(){
    console.log("Throttled Function Executed");
}, 2000)
newfnc();