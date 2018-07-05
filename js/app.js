console.log('JS is working'); 

/// GLOBAL SCOPE ///

const gameTimer = 10;
const gameScore = 8

// window.alert('Enter Name');


/// GLOBAL SCOPE ///

/// GAME FUNCTION /// 

// Function that prints a random question and multiple choice answers.  

const printQuestion = (question) => {
  // get random question from array
  // print question and answers in html
  // console.log(Math.floor(Math.random() * questionsData.length));

  // make this a method in your game object
  // const index = Math.floor(Math.random() * questionsData.length);

  // console.log(questionsData[index].text);
  // console.log(questionsData[index]['a']);
  // console.log(questionsData[index]['correct']);

  // print answers
  const q = questionsData[index]; 
  for (key in q) {
    
    // if, else statement that prints everything but the answer // 
    // create event listeners 
    // create the buttons based on the questions and answers. 
      // make an event listener for each ty 
    console.log(key)

    // print the question
    if(key === 'text') {
      const $h1 = $('<h1/>')
      $h1.text(q[key])
      $('body').append($h1);
      console.log($h1)
      console.log('text');

    }

    // print the answer choices
    else if(key !== 'correct'){
      const $a = $('<button/>');
      $a.text(q[key]); 
      $('body').append($a); 
       
    }
  
  }

  // console.log(key, 'key')
  // console.log(q[key]) 
};

// printQuestion();


// /// GAME OBJECT ///

// // create a game object  

const game = {
  score: 0,
  time: 10, // set initial values when u declare
  removedQuestions: [], // initally this is empty
  getRandomQuestion() {
    const index = Math.floor(Math.random() * questionsData.length);
    console.log(index)
    // splice returns an array! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    const arrWithQuestion = questionsData.splice(index, 1);
    console.log(arrWithQuestion)
    const question = arrWithQuestion[0];

    this.removedQuestions.push(question)

    this.printQuestion();
  },


  printQuestion() {
   
    $('button').remove(); 
    $('h1').remove();
    


    // make q be last question in removedQuestions

    // literally paste in old print question logic

    // when it works delete the old function

    const q = this.removedQuestions[this.removedQuestions.length-1]
    console.log(q)

    for (key in q) {
    
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

  }


  // correct questions so far,
  // property, 
  // property
  // doSomething() {
      // this.score
  // },

 
};

console.log(questionsData);
game.getRandomQuestion();
console.log(questionsData);







// const newGame = new MyGame(10, 8, 'click'); 
// console.log(newGame)


// console.log(gameScore);
// create game object that entails score, timer and event listeners. 




////////////// TO DO LIST /////////////////

// you need a method to get random question 

// that method should select the question/index,      
  
// remove from original array 

  // and store in an array in game object 
  // then, the last thing in that array will therefore be current question

    // and/or you could store that specific question in a property in the game object

  // and then it will call printQuestion(q) and pass in the question that was randomly chosen. 

//   }



// modify printQuestion to 
// event listeners to answer buttons 




// modify printQuestion to 
// add id corresponding to answer choice to each button  when you're adding answer buttons
// this will be used along with the current question that you are already tracking so that you can know which answer was chosen when user 
// clicks a certiain button... which means you need 


// method to check user answer -- this will be a method in game object
// the listener will call this function and pass in id of chosen anser
// this will also adjust any score etc propeterties in your object
  // you may need a method to updateScoreboard(), also in game object, that is called by the checkAnswer method after it checks the answer

// ------
// make the next question auotmatically appear








