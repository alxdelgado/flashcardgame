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

  // console.log(questionsData[index].text);
  // console.log(questionsData[index]['a']);
  // console.log(questionsData[index]['correct']);

  // print answers
  const q = questionsData[index]; 
  for (key in q){
    
    // if, else statement that prints everything but the answer // 
    // create event listeners 
    // create the buttons based on the questions and answers. 
      // make an event listener for each ty 
    console.log(key)
    if(key === 'text') {
      const $h1 = $('<h1/>')
      $h1.text(q[key])
      $('body').append($h1);
      console.log($h1)
      console.log('text');

    }
    else if(key !== 'correct'){
      const $a = $('<button/>');
      $a.text(q[key]); 
      $('body').append($a); 
       
    }
  
  }
  // console.log(key, 'key')
  // console.log(q[key]);
};

printQuestion();


/// GAME OBJECT ///  

// create game object that entails score, timer and event listeners. 







// /// GAME TIMER /// 

// // 6 min limit //

// const startGame = () => {
//   const timer = setInterval(() => {
//     time++; 

//   })
  

// }; 360000





