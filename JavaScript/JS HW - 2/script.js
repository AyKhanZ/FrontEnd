function comparison()
{
    let n1 = prompt("num1: "); 
    let n2 = prompt("num2: "); 
    if(n1 < n2) alert(-1); 
    else if(n1 > n2) alert(1) 
    else alert(0)
};
function factorial()
{
    let n = prompt("num: ");
    let result = 1;  
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    alert(result)
};
function numsInString()
{
    let n1 = prompt("num1: ");
    let n2 = prompt("num2: ");
    let n3 = prompt("num3: ");
    let result = String(n1)+String(n2)+String(n3)
    alert(result)
};
function squareRectangel()
{
    let length = prompt("Enter length:");
    let width = prompt("Enter width:");
  
    length = Number(length);
    width = Number(width);

    let area;
  
    if (width === undefined) {
      area = length * length;
    } else {
      area = length * width;
    }
  
    alert("Area: " + area);
};
function checkPerfectNumber() 
{
    let number = Number(prompt("Enter number: "))
    // 6       1 + 2 + 3 = 6
    let sum = 0;

    for(let i = 1;i < number;i++){
        if(number % i == 0) sum += i;
    }

    alert( number == sum ? "Perfect!" : "Not perfect!" )
}
function displayPerfectNumbersInRange() 
{
    let min = Number(prompt("Enter the minimum value:"));
    let max = Number(prompt("Enter the maximum value:"));

    let perfectNumbers = [];

    for (let i = min; i <= max; i++) {
        let sum = 0;

        for(let j = 1;j < i;j++){
            if(i % j == 0) sum += j;
        }

        if (i == sum ? true : false) {
            perfectNumbers.push(i);
        }
    }
  
    if (perfectNumbers.length === 0) {
        alert("There are no perfect numbers in the specified range.");
    }
    else{
        alert("There are perfect numbers in the specified range!!!!!!!!!!");
    }
}
function displayTime() {
  let hours = Number(prompt("Enter hours:"));
  let minutes = Number(prompt("Enter minutes:"));
  let seconds = Number(prompt("Enter seconds:"));


  let formattedHours = hours < 10 ? "0" + hours : hours;
  let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  alert("Time: " + formattedHours + ":" + formattedMinutes + ":" + formattedSeconds);
}
function convertToSeconds() 
{
  let hours = Number(prompt("Enter hours:"));
  let minutes = Number(prompt("Enter minutes:"));
  let seconds = Number(prompt("Enter seconds:"));

  let totalSeconds = hours * 3600 + minutes * 60 + seconds;

  alert(totalSeconds);
}  
function convertToTime() 
{
  let seconds = prompt("Enter seconds:")
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let remainingSeconds = seconds % 60;
  
  let formattedHours = hours < 10 ? "0" + hours : hours;
  let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  let formattedSeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;
  
  alert(formattedHours + ":" + formattedMinutes + ":" + formattedSeconds);
} 
function getTimeDifference(hours1, minutes1, seconds1, hours2, minutes2, seconds2) 
{
  let totalSeconds1 = convertToSeconds(hours1, minutes1, seconds1);
  let totalSeconds2 = convertToSeconds(hours2, minutes2, seconds2);
  
  let differenceInSeconds = Math.abs(totalSeconds1 - totalSeconds2);
  
  return convertToTime(differenceInSeconds);
}