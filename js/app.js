console.log('JS is working'); 

/// GLOBAL SCOPE ///



// window.alert('Enter Name');


/// GLOBAL SCOPE ///

/// GAME FUNCTION /// 

// Function that prints a random question and multiple choice answers.  

// /// GAME OBJECT ///

// // create a game object  

const game = {
  score: 0,
  time: 0, // set initial values when u declare
  timer: '', 
  removedQuestions: [], // initally this is empty
  selectedAnswer: "",
  correctAnswer: "",
  getRandomQuestion() {
    const index = Math.floor(Math.random() * questionsData.length);
    // console.log(index)
    // splice returns an array! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    this.correctAnswer = questionsData[index].correct
    const arrWithQuestion = questionsData.splice(index, 1);
    // console.log(arrWithQuestion)
    const question = arrWithQuestion[0];

    this.removedQuestions.push(question)

    this.printQuestion();
  },


  printQuestion() {
   
    $('button').remove(); 
    $('h1').remove();
    

    const q = this.removedQuestions[this.removedQuestions.length-1]
    console.log(q)
    const $submitButton = $('<button/>');
    $submitButton.text('Submit Answer'); 
    $('body').append($submitButton);
    $submitButton.on('click', (e) => {
      this.checkAnswer(); 
      
    
    }); 


    for (key in q) {
    
    // if, else statement that prints everything but the answer // 
    // create event listeners 
    // create the buttons based on the questions and answers. 
      // make an event listener for each ty 
      // console.log(key)

      // prints the actualy text of the question
      if(key === 'text') {
        const $h1 = $('<h1/>')
        $h1.text(q[key])
        $('body').append($h1);
        // console.log($h1)
        // console.log('text');

      }

      // appends buttons corresponding to each choice to the page
      else if(key !== 'correct'){
        const $a = $('<button/>');  
        $a.text(q[key]);
        
        // add id to the button corresponding to the letter of the choice
        $a.attr('class', 'multChoiceButtons');
        $a.attr('id', key)

        // console.log($a); 

        // adds event listeners to each button 
        $a.on('click', (e) => {
          

          this.selectedAnswer = e.currentTarget.id;

          // console.log(this.selectedAnswer); 
        }); 
  
        $('body').append($a); 

      }


    }  


  },

  checkAnswer(){
    if(this.selectedAnswer === this.correctAnswer){
      this.updateScore();
      this.getRandomQuestion();
      console.log(this.score); 
      console.log('Correct Answer');  
    }
    else {
      this.getRandomQuestion();
      console.log('Wrong Answer')

    }
  }, 

  updateScore(){

    this.score++;
    const $scoreBoard = $('#scoreBoard');
    $scoreBoard.text(this.score);
    console.log($scoreBoard); 


  },

  gameStart() {
    // enter name to start game 
    this.getRandomQuestion();
    this.timer = setInterval(() => {
      this.time++;
      console.log(this.time);
    }, 10)
    


  }





};
$('#start_button').on('click', (e) => {
  game.gameStart(); 
  

})



// console.log(questionsData);
// game.getRandomQuestion();
// console.log(questionsData);







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

  // and then it will call printQuestion(q) and pass in the question that was randomly chosen. - DONE 

//   }

// modify printQuestion to 
// add id corresponding to answer choice to each button  when you're adding answer buttons
// this will be used along with the current question that you are already tracking so that you can know which answer was chosen when user 
// clicks a certiain button... which means you need  - DONE 


// method to check user answer -- this will be a method in game object
// the listener will call this function and pass in id of chosen anser
// this will also adjust any score etc propeterties in your object
  // you may need a method to updateScoreboard(), also in game object, that is called by the checkAnswer method after it checks the answer

// ------
// make the next question auotmatically appear








