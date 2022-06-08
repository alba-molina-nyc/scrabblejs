/* 
so the const variables above are constants and exist in the global scope
# -> allows to select by id 
$ -> is used through the jQuery install on html head
*/

// const API_KEY = "cec6fd31-d3a5-454a-a806-f997548b7cbf";
// const promise = $.ajax({
//   url: "https://www.dictionaryapi.com/api/v3/references/collegiate/json/ugly?key=cec6fd31-d3a5-454a-a806-f997548b7cbf",
// });

/*
  $.ajax returns a "promise" object, which we are giong to save into the variable promise 
  so promise will be an object that will hold info about the akax request event
  
  the we the success and error callback
  
   */

/* 
  const 
  maintain constant values and they can only be accessed within the block they have been declared & it cannot be updated or redeclared within the same scope like let
  
  
  
  
  let 
  is blocked scope, they live within {}, anything within curly braces is a block so a variable avail for use only inside the block it has been declared
  
  XXXXXX aka no go zone you cannot re-declare it within the same scope
  let greeting = "say Hi";
  greeting = "say Hello instead";
  XXXXXX aka no go zone
  
  
  var 
  when declared OUTSIDE a function -> GLOBAL 
  var when declare INSIDE a function -> LOCAL to function */
// promise.then(
//   (data) => {
//     console.log(data);
//   },
//   (error) => {
//     console.log("bad request: ", error);
//   }
// );

// const $word = $("#word");
// const $definition = $("#definition");
// const $offensive = $("#offensive"); //this will be a boolean T or F
// const $pronunciation = $("#pronunciation");
