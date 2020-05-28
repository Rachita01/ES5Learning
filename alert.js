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
