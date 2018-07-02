console.log('JS is working'); 

// array containing the flash card data // 
const questionsData = [];
questionsData[0] = 'Inside which HTML element do we put the JavaScript?';
questionsData[1] = 'What is the correct JavaScript syntax to change the content of the HTML element below?';
questionsData[2] = 'Where is the correct place to insert a JavaScript?';
questionsData[3] = 'What is the correct syntax for referring to an external script called "xxx.js"?';
questionsData[4] = 'The external JavaScript file must contain the <script> tag.';
questionsData[5] = 'How do you write "Hello World" in an alert box?';
questionsData[6] = 'How do you create a function in JavaScript?'; 
questionsData[7] = 'How do you call a function named "myFunction"?';
questionsData[8] = 'How to write an IF statement in JavaScript?';
questionsData[9] = 'How to write an IF statement for executing some code if "i" is NOT equal to 5?'; 
questionsData[10] = 'How does a WHILE loop start?'; 
questionsData[11] = 'How does a FOR loop start?';
questionsData[12] = 'How can you add a comment in a JavaScript?'; 
questionsData[13] = 'How to insert a comment that has more than one line?';
questionsData[14] = 'What is the correct way to write a JavaScript array?'; 
questionsData[15] = 'How do you round the number 7.25, to the nearest integer?'; 
questionsData[16] = 'How do you find the number with the highest value of x and y?'; 
questionsData[17] = 'JavaScript is the same as Java.'; 
questionsData[18] = 'Which event occurs when the user clicks on an HTML element?';
questionsData[19] = 'Which operator is used to assign a value to a variable?'; 
questionsData[20] = 'What will the following code return: Boolean(10 > 9)';



// array containing the answers for the flash card data // 
const answersData = []; 
answersData[0] = {'<scripting>', '<script>', '<js>', '<javascript>'}; 
answersData[1] = {'<p id="demo">This is a demonstration.</p>', 'document.getElement("p").innerHTML = "Hello World!";', 'document.getElementByName("p").innerHTML = "Hello World!";', 'document.getElementById("demo").innerHTML = "Hello World!";'}; 
answersData[2] = {'The <body> section', 'Both the <head> section and the <body> section are correct', 'The <head> section'}; 
answersData[3] = {'<script name="xxx.js">', '<script src="xxx.js">', '<script href="xxx.js">'}; 
answersData[4] = {'False', 'True'}; 
answersData[5] = {'alertBox("Hello World");', 'alert("Hello World");', 'msgBox("Hello World");', 'msg("Hello World");'}; 
answersData[6] = {'function = myFunction()', 'function myFunction()', 'function:myFunction()'}; 
answersData[7] = {'myFunction()', 'call function myFunction()', 'call myFunction()'}; 
answersData[8] = {'if (i == 5)', 'if i == 5 then', 'if i = 5', 'if i = 5 then'}; 
answersData[9] = {'if (i != 5)', 'if (i <> 5)', 'if (i <> 5)', 'if i <> 5'}; 
answersData[10] = {'while (i <= 10; i++)', 'while (i <= 10)', 'while i = 1 to 10'}; 
answersData[11] = {'for i = 1 to 5', 'for (i = 0; i <= 5)', 'for (i = 0; i <= 5; i++)', 'for (i <= 5; i++)'}; 
answersData[12] = {'This is a comment', '<!--This is a comment-->', '//This is a comment'}; 
answersData[13] = {'/*This comment has more than one line*/', '/*This comment has more than one line*/', '<!--This comment has more than one line-->'}; 
answersData[14] = {'var colors = (1:"red", 2:"green", 3:"blue")', 'var colors = "red", "green", "blue"', 'var colors = ["red", "green", "blue"]', 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")'}; 
answersData[15] = {'rnd(7.25)', 'Math.rnd(7.25)', 'Math.round(7.25)', 'round(7.25)'}; 
answersData[16] = {'ceil(x, y)', 'Math.max(x, y)', 'Math.ceil(x, y)', 'top(x, y)'}; 
answersData[17] = {'True', 'False'}; 
answersData[18] = {'onclick', 'onmouseover', 'onmouseclick', 'onchange'}; 
answersData[19] = {'x', '=', '-', '*'}; 
answersData[20] = {'true', 'false', 'NaN'}; 