console.log('JS is working'); 

// Populating the cards array 

const printQuestion = () => {
  // get random question from array
  // print question and answers in htm
  // console.log(Math.floor(Math.random() * questionsData.length));
  const index = Math.floor(Math.random()* questionsData.length);
    // console.log(index)

  console.log(questionsData[index].text);
  console.log(questionsData[index]['a']);
  console.log(questionsData[index]['correct']); 
};

printQuestion();

// try printing 


