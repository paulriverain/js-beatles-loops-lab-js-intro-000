// add solution here
function theBeatlesPlay(musicians, instruments){
  let theyPlay = []
  for(let i = 0; i<musicians.length; i++){
    theyPlay.push(musicians[i]+' plays '+ instruments[i])
  }
  return theyPlay
}

function johnLennonFacts(facts){
  let newFact = [];
  let i=0;
  while(i<facts.length){
    newFact.push(facts[i] + '!!!')
    i++;
  }
  return newFact
}

function iLoveTheBeatles(n){
  let love = []
  do{
    love.push('I love the Beatles!')
    n++
  }while(n<15)
return love
}
