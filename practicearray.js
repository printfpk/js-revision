//object
//changing the object value
const obj = {
    name: "prashant",
    age: 24
}
obj.age = 25;
console.log(obj.age); //25 

//keeping object unchanged
const obj = {
    name: "prashant",
    age: 24
}
Object.freeze(obj);
//obj.age = 25; //error in strict mode
console.log(obj.age); //24



//string to number conversion
Number("20") //20
parseInt("20") //20
parseFloat("20.5") //20.5
+"20" //20


//check "javascript" has "script" without using .includes
1. let str = "javascript";
console.log(str.indexOf("script")!== -1); //true

2. let str = "javascript";
   if (str.indexOf("script")=== -1){
         console.log(false);
   }
   else{
    console.log(true);
   }

3. let str = "javascript";
   if (str.search("script")=== -1){
         console.log(false);
   }
   else{
    console.log(true);
   }

//using .includes
let str = "javascript";
console.log(str.includes("script")); //true