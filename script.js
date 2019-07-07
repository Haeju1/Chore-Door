// Buttons
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');
// Default rules
let currentlyPlaying=true;
let numClosedDoors=3;
let openDoor1, openDoor2, openDoor3;
// Paths for doors
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

// Randomly decides which door has a chore
const randomChoreDoorGenerator = () =>{
  let choreDoor= Math.floor(Math.random()* numClosedDoors);

  if(choreDoor===0){
    openDoor1=botDoorPath;
    openDoor2=beachDoorPath;
    openDoor3=spaceDoorPath;
  }
  else if(choreDoor===1){
    openDoor2=botDoorPath;
    openDoor1=beachDoorPath;
    openDoor3=spaceDoorPath;
  }
  else{
    openDoor3=botDoorPath;
    openDoor1=beachDoorPath;
    openDoor2=spaceDoorPath;
  }
}
randomChoreDoorGenerator();

// When buttons clicked
doorImage1.onclick = () => {
  if(!isClicked(doorImage1) && currentlyPlaying){
    doorImage1.src = openDoor1;
  }
  playDoor(doorImage1);
}
doorImage2.onclick = () => {
  if(!isClicked(doorImage2) && currentlyPlaying){
    doorImage2.src = openDoor2;
  }
  playDoor(doorImage2);
}
doorImage3.onclick = () => {
  if(!isClicked(doorImage3) && currentlyPlaying){
    doorImage3.src = openDoor3;
  }
  playDoor(doorImage3);
}
 startButton.onclick = () => {
   if(currentlyPlaying===false){
     startRound();
   }
}

// Game condition checkers
const isBot = (door) => {
  if(door.src===botDoorPath)
    return true;
  else
    return false;
}
const isClicked = (door) => {
	if(door.src===closedDoorPath)
    return false;
  else
    return true;
}
const playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors===0){
    gameOver('win');
  }
  else if(isBot(door)===true)
    gameOver();
}
// Resets game
const startRound = () => {
  doorImage1.src="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
  doorImage2.src="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
  doorImage3.src="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
  numClosedDoors=3;
  startButton.innerHTML='Good luck!';
  currentlyPlaying=true;
  randomChoreDoorGenerator();
}
const gameOver = (status) => {
  if(status==='win'){
    startButton.innerHTML='You win! Play again?';
    currentlyPlaying=false;
  }
  else{
    startButton.innerHTML="Game Over! Play again?";
  	currentlyPlaying=false;
  }
}
startRound();
