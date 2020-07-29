//Personal sleep log for last week
const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 7;
      break;
    case 'wednesday':
      return 6;
      break;
    case 'thursday':
      return 5;
      break;
    case 'friday':
      return 6;
      break;
    case 'saturday':
      return 7;
      break;
    case 'sunday':
      return 8;
      break;
    default:
      return 'not a day';
  }
}

//Arrow function implicitly returns hour total
const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

//Amount of sleep needed per week
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}

//How close I am to meeting ideal amount of sleep
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.');
  }
  else if (actualSleepHours > idealSleepHours) {
    console.log(`You have slept ${actualSleepHours - idealSleepHours} hours too many last week.`);
  }
  else {
    console.log(`You need ${idealSleepHours - actualSleepHours} more hours of sleep per week.`);
  }
}

calculateSleepDebt();