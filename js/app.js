console.log('JS is working'); 

// Populating the cards array 

const printQuestion = () => {
  // get random question from array
  // print question and answers in html
  // console.log(Math.floor(Math.random() * questionsData.length));
  const index = Math.floor(Math.random()* questionsData.length);
    // console.log(index)

  console.log(questionsData[index].text);
  console.log(questionsData[index]['a']);
  console.log(questionsData[index]['correct']);

  // print answers
  const q = questionsData[index]; 
  for (key in q){
    // console.log(q[key])
    const $div = $('<div/>'); 
    $div.attr('addClass', 'questions-div'); 
    const $h1 = $('<h1/>');
    $h1.text(q[key]); 
    $div.append($h1);
    $('body').append($div);
     
  } 

};

printQuestion();

// // Append 'questionsData' to the body 



