let QuestionMarks = str => {
  let numberIndexes = [];
  let numberValues = [];
  for(c in str)
    {
      if(isNumber(str[c]))
        {
          numberIndexes.push(parseInt(c));
          numberValues.push(parseInt(str[c]));
        }
    }
  if(numberIndexes.length < 1)
    {
      return false;
    } 
  var equalsTen = false;
  for(var i = 0; i < numberIndexes.length -1; i++)
    {
      if(findValue(numberValues[i], numberValues[i+1])){
        equalsTen = true;
        var hasThree = str.slice((numberIndexes[i] + 1), numberIndexes[i+1]);
        if(!threeQuestionsMarks(hasThree))
        {
          return false;
        }
      }
    }
    return equalsTen;
};

let isNumber = c => {
  return(c*0 == 0);
};

let findValue = (n1, n2) =>{
  return((n1+n2) === 10)
};

let threeQuestionsMarks = substr =>{
  var counter = 0;
  for(c in substr)
    {
      if(substr[c] === '?')
        {
          counter++;
        } 
    }
    return(counter === 3);
};

console.time('one');
console.log(QuestionMarks('bcc?7??ccc?3tt1??????5'));
console.timeEnd('one');
console.time('two');
console.log(QuestionMarks('bb6?9'));
console.timeEnd('two');
console.time('three');
console.log(QuestionMarks('arrb6???4xxbl5???eee5'));
console.timeEnd('three');
