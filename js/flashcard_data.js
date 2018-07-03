// console.log('JS is working'); 

const questionsData = [{
  text: 'Inside which HTML element do we put the Javascript?',
  a: '<scripting>',
  b: '<scipt>',
  c: '<js>',
  d: '<javascript>',
  correct: 'b', 
}, 

{
  text: 'What is the correct JavaScript syntax to change the content of the HTML element below?',
  a: 'p id="demo">This is a demonstration.</p>',
  b: 'document.getElement("p").innerHTML = "Hello World!";',
  c: 'document.getElementByName("p").innerHTML = "Hello World!";',
  d: 'document.getElementById("demo").innerHTML = "Hello World!";',
  correct: 'd', 
}, 

{
  text: 'Where is the correct place to insert a JavaScript?',
  a: 'The <body> section', 
  b: 'Both the <head> section and the <body> section are correct',
  c: 'The <head> section',
  correct: 'b',
}, 

{
  text: 'What is the correct syntax for referring to an external script called "xxx.js"?',
  a: '<script name="xxx.js">',
  b: '<script src="xxx.js">',
  c: '<script href="xxx.js">',
  correct: 'b',
}, 

{
  text: 'The external JavaScript file must contain the <script> tag.',
  a: 'False',
  b: 'True', 
  correct: 'a',
}, 

{
  text: 'How do you write "Hello World" in an alert box?', 
  a: 'alertBox("Hello World");', 
  b: 'alert("Hello World");', 
  c: 'msgBox("Hello World");',
  d: 'msg("Hello World");',
  correct: 'b',
}, 

{
  text: 'How do you create a function in JavaScript?',
  a: 'function = myFunction()',
  b: 'function myFunction()', 
  c: 'function:myFunction()',
  correct: 'b',
}, 

{
  text: 'How do you call a function named "myFunction"?',
  a: 'myFunction()',
  b: 'call function myFunction()', 
  c: 'call myFunction()',
  correct: 'a',
}, 

{
  text: 'How to write an IF statement in JavaScript?',
  a: 'if (i == 5)',
  b: 'if i == 5 then',
  c: 'if i = 5',
  d: 'if i = 5 then',
  correct: 'a', 
}, 

{
  text: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
  a: 'if (i != 5)',
  b: 'if (i <> 5)',
  c: 'if i =! 5 then',
  d: 'if i <> 5',
  correct: 'a', 
}, 

{
  text: 'How does a WHILE loop start?',
  a: 'while (i <= 10; i++)',
  b: 'while (i <= 10)',
  c: 'while i = 1 to 10',
  correct: 'b', 
}, 

{
  text: 'How does a FOR loop start?',
  a: 'for i = 1 to 5',
  b: 'for (i = 0; i <= 5)', 
  c: 'for (i = 0; i <= 5; i++)', 
  d: 'for (i <= 5; i++)', 
  correct: 'c', 
}, 

{
  text: 'How can you add a comment in a JavaScript?',
  a: 'This is a comment',
  b: '<!--This is a comment-->', 
  c: '// This is a comment', 
  correct: 'c', 
}, 

{
  text: 'How to insert a comment that has more than one line?', 
  a: '/*This comment has more than one line*/',
  b: '//This comment has more than one line//',
  c: '<!--This comment has more than one line-->', 
  correct: 'a', 
}, 

{
  text: 'What is the correct way to write a JavaScript array?',
  a: 'var colors = (1:"red", 2:"green", 3:"blue")',
  b: 'var colors = "red", "green", "blue"', 
  c: 'var colors = ["red", "green", "blue"]', 
  d: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', 
  correct: 'c', 
}, 

{
  text: 'How do you round the number 7.25, to the nearest integer?',
  a: 'rnd(7.25)', 
  b: 'Math.rnd(7.25)', 
  c: 'Math.round(7.25)', 
  d: 'round(7.25)', 
  correct: 'c',
}, 

{
  text: 'How do you find the number with the highest value of x and y?', 
  a: 'ceil(x, y)', 
  b: 'Math.max(x, y)', 
  c: 'Math.ceil(x, y)', 
  d: 'top(x, y)',
  correct: 'b', 
},

{
  text: 'JavaScript is the same as Java.', 
  a: 'True', 
  b: 'False', 
  correct: 'b', 
}, 

{
  text: 'Which event occurs when the user clicks on an HTML element?', 
  a: 'onclick', 
  b: 'onmouseover', 
  c: 'onmouseclick', 
  d: 'onchange', 
  correct: 'a', 
},

{
  text: 'Which operator is used to assign a value to a variable?', 
  a: 'x', 
  b: '=', 
  c: '-', 
  d: '*', 
  correct: '=', 
}, 

{
  text: 'What will the following code return: Boolean(10 > 9)', 
  a: 'True',
  b: 'False',
  c: 'NaN', 
  correct: 'True',
     
}];


