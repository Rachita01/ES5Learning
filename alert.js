"use strict";
// alert("I'm Javascript"); //This was first statement of alert.js file which is external js file
let name="John";
let admin;
admin=name;  //This shows variable can contain the value of another variable
// alert(admin);
let ourPlanetName="Earth"; //This is how we should name our variable generally
let currentUserName=admin;
// alert(currentUserName);
let age = null;
// alert(age); //Its result is null but if I don't give any value to age then alert will say undefined

// alert(`Hello ${name}`);
// alert(`The integer is ${1+2}`);//Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}

//  let pro = prompt("What's your name?","Rachita");
//  alert (`You are ${pro}`);   //This is example showing how prompt is used

// let confo = confirm("Are you ok?");
// alert(confo);  //This is example showing how confirm is used

//alert(typeof name); //typeof is used to know the type of any variable.Syntax are typeof variable or typeof(variable).

// if("0"){
//     alert('Hello'); //It will be shown as if contains non empty string which is evaluated as true
// }

// let result = prompt("What is \"official\" name of javscript?",'');
// result=="ECMAScript"?alert("Right"):alert("You don't know ECMAScript!"); // This example shows the use of conditional operator

// let inum = prompt("ENTER A NUMBER"); //It is an example of if else construct
// if(inum>0){alert(1);} 
// else if(inum<0){alert(-1);}
// else {alert(0)};

// let message = (login=="Employee")?"Hello":(login=="Director")?"Greetings":(login=='')?"No login":''; //An example of else if construct as conditional operator

// let userName = prompt("Who are you?",''); //Example containing use of conditonal operator, if else, prompt, alert and null
// if(userName=="admin"){
//     let pass=prompt("Enter the password",'');
//     pass=="TheMaster"?alert("Welcome!"):pass==""?alert("Wrong Password"):alert("Cancelled");
// }
// else if(userName=="" || userName==null)
// {
//     alert("Cancelled")
// }
// else
// {alert("I don't know you");}

// let height = 0;
// alert(height||100);
// alert(height??100); //This example shows the difference between || and ??

// let sum = 0;

// while (true) {

//   let value = +prompt("Enter a number", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Sum: ' + sum );
// let browser = prompt("Enter the browser name");  //Converting switch case to if else
// if(browser==="Edge")
// {
//   alert("You have got the edge");
// }
// else
// if(browser==="Chrome"||browser==="Firefox"||browser==="Safari"||browser==="Opera")
// {
//   alert("Okay we support these browsers too");
// }
// else{alert("We hope that this page looks ok");}

// let a = +prompt('a?', ''); //Convering if else to switch case

// switch(a){
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert('2,3');
//     break;
//   default:
//     alert("Give me some good numbers!");
// }

// function min(a,b)   //Function to find minimum of two numbers
// {
//   (a<b)?alert("Minimum number is "+a):alert("Minimum number is "+b);
// }

// let a = prompt("Enter first number");
// let b = prompt("Enter second number");
// min(a,b);

// function pow(x,n)   //Power up function
// {
//   let result = x;
// for(let i=1;i<n;i++){
//   result*=x;
// }
// return result;
// }

// let x = prompt("x?",'');
// let n = prompt("n?",'');
// (n<1)?alert(`Power ${n} is not allowed`):alert("Result is " + pow(x,n));
// function isEmpty(obj)  //function to evaluate if object is empty or not
// {
//     for(let key in obj)
//     {
//         return false;
//     }
//     return true;
// }
// let user = {}; //empty object
// alert(isEmpty(user));
// let userone = {name:"John",surname:"Smith"}; //object created
// const usertwo = {
//     name:"Rachita"
// };
// usertwo[name]="Pete";
// alert(usertwo[name]);
// alert(isEmpty(usertwo));  //applied fucntion to check if object is empty
// for(let key in userone )
// {
//     alert(key);
// }
// alert(userone.name);
// alert(userone.surname);

// delete userone.name;
// alert(userone.name);
// delete userone.surname;  //deleted key of object


// let listForChange = {
//     width : 200,
//     height : 400,
//     name : "Pete"
//    };

// function multiplyNumeric(menu) //Function for multiplying the object key by 2 if its numeric
// {   for(let key in menu)
//     {
//       if(typeof menu[key]== 'number')
//       {
//         menu[key]*= 2;
      
//     }
// }
// }
// multiplyNumeric(listForChange);

// alert("width"+listForChange.width+","+"height"+listForChange.height+"and"+"name"+listForChange.name);



// let user = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // copies all properties from permissions1 and permissions2 into user
// Object.assign(user, permissions1, permissions2);
// for(let key in user)
// {
//     alert(user[key]);
// }


// var objects = [{ 'a': 1 }, { 'b': 2 }];
 
// var deep = _.cloneDeep(objects); //Used to clone the object not copy
// console.log(deep[0] === objects[0]);


// let calculator = {                           //Calculator using object concept
//     read(){
//        this.a = +prompt("Value of a",'0');
//        this.b = +prompt("Value of b",'0');   
//     },
//     sum()
//     {
//         return this.a+this.b;
//     },
//     mul()
//     {
//         return this.a*this.b;
//     }
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );

// let ladder = {                  //Chaining
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep: function() { // shows the current step
//       alert( this.step );
//       return this;
//     }
//   };

//   ladder.up().up().up().down().showStep();



//Is it possible to create functions A and B such that new(A)==new(B)?

// let obj = {};

// function A(){ return obj;};
// function B(){return obj;};
// alert(new(A)==new(B));


//Create a constructor function Calculator that creates objects with 3 methods:read(),sum() and mul() 
// function Calculator() {

//     this.read = function() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     };
  
//     this.sum = function() {
//       return this.a + this.b;
//     };
  
//     this.mul = function() {
//       return this.a * this.b;
//     };
//   }
  
//   let calculator = new Calculator();
//   calculator.read();
  
//   alert( "Sum=" + calculator.sum() );
//   alert( "Mul=" + calculator.mul() );


// function Accumulator(startingValue)  //Accumulator using constructor
// {
//   this.value=startingValue;
//   alert(this.value);
//   this.read = function() {
//     this.value += +prompt('How much to add?', 0);
    
//   };
// }
// let accumulator = new Accumulator(1); 

// accumulator.read();
// accumulator.read();

// alert(accumulator.value);



// //Function to check if user has any address or not
// let userone = {
// name:"Rachita",
// address:{
//     street:"10"
// }
// };

// let usertwo = {
//     name:"John"
// };

// function checkAddress(obj){
// var check = obj?.address?.street; //using optional chaining ?. to check and access nested object
// if(check==undefined)
// {
//     alert(obj.name + " has no address");
// }
// else{
//     alert(obj.name + "'s address is" + obj.address.street)
// }
// };

// checkAddress(userone);
// checkAddress(usertwo);


//Symbol type
// let userSymbol = Symbol("id"); //This is how symbols are defined
// alert(userSymbol.toString());  //If we will simply write userSymbol it will not show anything
// alert(userSymbol.description); 

// let id = Symbol("id");
// let userSymbolone = {
//     name:"Rachita",
//     [id]:1
// }

// for(let key in userSymbolone){
//     alert("Keys in userSymbolone are "+userSymbolone[key]);
// }
// alert(userSymbolone[id]);  //This is how we access the value of symbol in object

// let cloneSymbol = Object.assign({},userSymbolone); //If we clone the object then symbol identifiers are also cloned

// alert(cloneSymbol[id]);

// alert(userSymbol==id);  //That's why its result is true

// let uoSymbol = Symbol.for("id"); //This is used for global declaration
// let utSymbol = Symbol.for("id"); 
// alert(uoSymbol==utSymbol);       //That's why its result is true

// alert(Symbol.keyFor(uoSymbol));  //This will show the result
// alert(Symbol.keyFor(userSymbol)); //This will give undefined as symbol declaration in this one is local


// let str = "Hello";  //Got error Uncaught TypeError: Cannot create property 'test' on string 'Hello' which shows that primitives are not objects

// str.test = 5;

// alert(str.test);
