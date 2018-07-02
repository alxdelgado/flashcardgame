console.log('JS is working'); 

// Populating the cards array 

const printQuestion = () => {
  // get random question from array
  // print question and answers in html
  questionsData.random = function(){
    return this[Math.floor((Math.random()* this.length))];
  }
};

console.log(questionsData); 