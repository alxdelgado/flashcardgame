console.log('JS is working'); 

/// GLOBAL SCOPE ///

let time = 0; 
// window.alert('Enter Name');


/// GLOBAL SCOPE ///

/// GAME FUNCTION /// 

// Function that prints a random question and multiple choice answers.  

const printQuestion = () => {
  // get random question from array
  // print question and answers in html
  // console.log(Math.floor(Math.random() * questionsData.length));
  const index = Math.floor(Math.random() * questionsData.length);

  console.log(questionsData[index].text);
  console.log(questionsData[index]['a']);
  console.log(questionsData[index]['correct']);

  // print answers
  const q = questionsData[index]; 
  for (key in q){
    
    // if, else statement that prints everything but the answer // 
    // create event listeners 
    
    if(key !== 'correct') {
      const $div = $('<div/>'); 
      $div.attr('addClass', 'questions-div'); 
      const $h1 = $('<h1/>');
      $h1.text(q[key]); //this prints the value (kv pair)
      $div.append($h1);
      $('body').append($div);
    }
    $('.choice-1').on('click', (e) => {
        console.log(key);
        if('click' === '.choice-1'){
          return true; 
        }

    })

  }
  // console.log(key, 'key')
  // console.log(q[key]);
};

printQuestion();

/// GAME FUNCTION /// 

/// EVENT LISTENERS ///

// $('.choice-1').on('click', (e) => {

//   // make selection for multiple choice 1 // 

// });

// $('.choice-2').on('click', (e) => {

//   // make selection for multiple choice 2 //

// }); 

// $('.choice-3').on('click', (e) => {

//   // make selection for multiple choice 3 // 
  
// });

// $('.choice-4').on('click', (e) => {

//   // make selection for multiple choice 4 // 

// })






// /// GAME TIMER /// 

// // 6 min limit //

// const startGame = () => {
//   const timer = setInterval(() => {
//     time++; 

//   })
  

// };





