// given a number 0-23.59, converts the number to a valid time of the day.
// ie. 13.01 => 1:01 pm
export function numberToTime(number) {
  if (number < 0 || number > 23.59) {
    return "Invalid Time";
  }
  // Handle 0:00 => 12:00 as edge case
  else if (number >= 0 && number < 1) {
    const hours = Math.floor(number);
    const minutes = Math.round((number % 1) * 100) / 100;
  }
  // AM Cases
  else if (number >= 1 && number <= 11.59) {
  }
  //PM Cases
  else {
  }
}
