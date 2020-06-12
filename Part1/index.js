




const progress =[];


function play(clickedId){
    const clickedElement = document.getElementById(clickedId);

    const playerSpan = document.getElementById('player');

    if(playerSpan.innerText === 'X'){
      playerSpan.innerText = 'O';
      clickedElement.innerText = 'X';
      progress[clickedId] = 'X';
    } else {
      playerSpan.innerText = 'X';
      clickedElement.innerText = 'O';
      progress[clickedId] = 'O';
    } 


  console.log(progress);

  const topRight = progress[0];
  const topMid = progress[1];
  const topLeft = progress[2];
  const midRight = progress[3];
  const midMid = progress[4];
  const midLeft = progress[5];
  const botRight = progress[6];
  const botMid = progress[7];
  const botLeft = progress[8];

  if(topRight !== undefined && topRight === topMid && topRight === topLeft) {
    alert(`${topRight} is the winner!`);
    return;
  }

  if(topRight !== undefined && topRight === midRight && topRight === botRight) {
    alert(`${topRight} is the winner!`);
    return;
  }

  if(topRight !== undefined && topRight === midMid && topRight === botLeft) {
    alert(`${topRight} is the winner!`);
    return;
  } 

  if(topMid !== undefined && topMid === midMid && topMid === botMid) {
    alert(`${topMid} is the winner!`);
    return;
  }

  if(topLeft !== undefined && topLeft === midLeft && topLeft === botLeft) {
    alert(`${topLeft} is the winner!`);
    return;
  }

  if(topLeft !== undefined && topLeft === midMid && topLeft === botRight) {
    alert(`${topLeft} is the winner!`);
    return;
  }

  if(midLeft !== undefined && midLeft === midMid && midLeft === midRight) {
    alert(`${midLeft} is the winner!`)
  return;
  }

  if(botLeft !== undefined && botLeft === botMid && botLeft === botRight) {
    alert(`${botLeft} is the winner!`)
   return;
  }


  let boardFull = true;
  for(let i = 0; i <= 8; i++) {
    if (progress[i] === undefined){
      boardFull = false;
    }
  }
    if (boardFull === true) {
      alert("Cats game, no winner!");
    }
}



