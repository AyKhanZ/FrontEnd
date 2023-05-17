function yourName()
{
    var name = prompt("Enter your name:");
    alert("Hello, " + name + "!\nWhat's up?");
};
function birthdayYear()
{
    let year = prompt("What's your birthday's year?");
    alert("You're " + (2023 - year) + " old");
};
function squareLength()
{
    let a = prompt("a: ");
    alert("Perimetre: " + a*4);
};
function squareCircle()
{
    let r = prompt("r: ");
    alert("Square: " + 3*r**2);
};
function lengthAndTime()
{
    let l = prompt("Distance(km): ");
    let t = prompt("Time(hour)): ");
    alert("V: " + l/t);
};
function dollarToEuro()
{
    let d = prompt("Dollars($): "); 
    alert("Euros: " + d*1.1);
};
function volumeFlash()
{
    let v = prompt("Volume flash card(Gb): "); 
    alert("Euros: " + d/820 + " Mb");
};
function chocolad()
{
    let money = prompt("Money: "); 
    let price = prompt("Price: "); 
    let count = Number(money/price)
    alert("Counts: " + count);
};
function threeDigitNumber()
{
    let threeDigitNumber = prompt("Three Digit Number: "); 
    let c =  Math.floor(threeDigitNumber / 100)
    let b = Math.floor((threeDigitNumber / 10) % 10) * 10
    let a = (threeDigitNumber%10)*100
    alert("Reverce: " + (a + b + c) );
};
function isEvenOrOdd()
{
    let number = prompt("Enter an integer:");
    let isEven = (number % 2 == 0);
    let res = isEven ? "Even number" : "The number is odd";
    alert(res); 
};