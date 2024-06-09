//use command line args
const args = process.argv.slice(2);
//make array to store alarm times
const alarms = [];

//loop through command line arguments
for(let i = 0; i < args.length; i++) {
  //make argument into a number variable
  const time = parseInt(args[i]);

  //check if argument is a num and is positive
  if(!isNaN(time) && time > 0) {
    //add inputted time to the alarms arr
    alarms.push(time);
  }
}

//sort the alarms array in ascending order
alarms.sort((a, b) => a - b);

//loop through and keep track of each alarm time
for(let i = 0; i < alarms.length; i++) {
  const alarmTime = alarms[i];
  //calculate the time in ms
  const timeInMs = alarmTime * 1000;
  //schedule the alarm with setTimeout?
setTimeout(() => {
  //couldnt get sound to happen, so just put beep with inputted time in ms
  process.stdout.write("\Beep\n")
}, timeInMs);
}
