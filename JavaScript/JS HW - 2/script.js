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
    var length = prompt("Enter length:");
    var width = prompt("Enter width:");
  
    length = Number(length);
    width = Number(width);
  
    var area;
  
    if (width === undefined) {
      area = length * length;
    } else {
      area = length * width;
    }
  
    alert("Area: " + area);
};
function checkPerfectNumber() 
{
    var num = prompt("Enter the number:");
  
    num = Number(num);
  
    var sum = 0;
  
    for (var i = 1; i < num; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
  
    var isPerfect = sum === num;
  
    alert("The number " + num + (isPerfect ? " is " : " is not") + " perfect.");
} 
function displayPerfectNumbersInRange() 
{
    var min = prompt("Enter the minimum value:");
    var max = prompt("Enter the maximum value:");
  
    min = Number(min);
    max = Number(max);
  
    var perfectNumbers = "";
  
    for (var i = min; i <= max; i++) {
      if (checkPerfectNumberHelper(i)) {
        perfectNumbers += i + " ";
      }
    }
  
    if (perfectNumbers === "") {
      alert("There are no perfect numbers in the specified range.");
    } else {
      alert("Perfect numbers in the specified range: " + perfectNumbers);
    }
} 
function displayTime() {
  var hours = prompt("Enter hours:");
  var minutes = prompt("Enter minutes:");
  var seconds = prompt("Enter seconds:");

  hours = Number(hours);
  minutes = Number(minutes);
  seconds = Number(seconds);

  var formattedHours = hours < 10 ? "0" + hours : hours;
  var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  alert("Time: " + formattedHours + ":" + formattedMinutes + ":" + formattedSeconds);
} 
function convertToSeconds() 
{
  var hours = prompt("Enter hours:");
  var minutes = prompt("Enter minutes:");
  var seconds = prompt("Enter seconds:");

  hours = Number(hours);
  minutes = Number(minutes);
  seconds = Number(seconds);

  var totalSeconds = hours * 3600 + minutes * 60 + seconds;

  alert(totalSeconds);
}  
function convertToTime() 
{
  var seconds = prompt("Enter seconds:")
  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds % 3600) / 60);
  var remainingSeconds = seconds % 60;
  
  var formattedHours = hours < 10 ? "0" + hours : hours;
  var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  var formattedSeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;
  
  alert(formattedHours + ":" + formattedMinutes + ":" + formattedSeconds);
} 
function getTimeDifference(hours1, minutes1, seconds1, hours2, minutes2, seconds2) 
{

  var totalSeconds1 = convertToSeconds(hours1, minutes1, seconds1);
  var totalSeconds2 = convertToSeconds(hours2, minutes2, seconds2);
  
  var differenceInSeconds = Math.abs(totalSeconds1 - totalSeconds2);
  
  return convertToTime(differenceInSeconds);
}