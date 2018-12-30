// add solution here
function theBeatlesPlay(musicians, instruments){
  let mTArray = [];
  for (let i = 0; i< musicians.length; i++){
    mTArray.push(musicians[i]+ ' plays '+ instruments[i])
  }
  return mTArray
}
//==========================================================
/*function johnLennonFacts(facts){
  let newFacts = [];
for (let i = 0; i<facts.length; i++){
  newFacts.push(facts[i]+'!!!')
}
return newFacts
}*/
function johnLennonFacts(facts){
  let newFacts = [];
let i = 0;
while (i<facts.length){
  newFacts.push(facts[i]+'!!!')
 i++;
}
return newFacts
}
//===========================================================
function iLoveTheBeatles(num){ //must be a do while loop so it runs once
  let iLove = [];
  do{
    iLove.push('I love the Beatles!')
    num++;
  }while (num < 15 )
  return iLove
}
