
function forLoop(array){
  for(let i = 0, i < 25; i++){
      if (i = 1){
        array[i] = "I am 1 strange loop."
      } else {
        array[i] = `I am ${i} stange loop.`
      }
  }
}

function whileLoop(n){
  while(n >= 0){
    console.log(--n)
  }
  return "done"
}

function doWhileLoop(array){
  do{
    array.pop()
  } while (array.length > 0 && maybeTrue())
}

function maybeTrue(){
  return Math.random() >= 0.5
}
