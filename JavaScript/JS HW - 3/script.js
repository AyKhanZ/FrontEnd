function Car()
{
    let car ={
        manufacturer:"Good",
        model:"BMW",
        yearOfManufacture:2004,
        averageSpeed:50,
        GetInformation:function() {
            alert("Manufacturer" + this.manufacturer);
            alert("Model" + this.model);
            alert("Year of anufacturer" + this.yearOfManufacture);
            alert("Average speed" + this.averageSpeed);
        },
        calculateTravelTime: function (distance){
            var totalHours = distance / this.averageSpeed;
            var restStops = Math.floor(totalHours / 4);
            var totalTime = totalHours + restStops;
            return totalTime;
        }
    }
    let distance = 250; // расстояние в километрах
    let travelTime = car.calculateTravelTime(distance);
    car.GetInformation();
    alert("For traveling " + distance + " km you need " + travelTime + " hours.");
}
function MathSolver()
{
    var Fraction = {
        numerator: 0,
        denominator: 1,

        setFraction: function(numerator,denominator){
            this.numerator = numerator;
            this.denominator = denominator;
        },
        add: function (fraction){
            result = {};
            result.numerator = this.numerator * fraction.denominator + this.denominator * fraction.numerator;
            result.denominator = this.denominator * fraction.denominator;
            return result;
        },
        subtract: function (fraction){
            result = {};
            result.numerator = this.numerator * fraction.denominator - this.denominator * fraction.numerator;
            result.denominator = this.denominator * fraction.denominator;
            return result;
        },
        multy: function (fraction){
            result = {};
            result.numerator = this.numerator * fraction.numerator;
            result.denominator = this.denominator * fraction.denominator;
            return result;
        },
        division : function (fraction){
            result = {};
            result.numerator = this.numerator * fraction.denominator;
            result.denominator = this.denominator * fraction.numerator;
            return result;
        },
        findGCD: function(num1, num2) {
            if (num2 === 0) {
                return num1;
            }
            else {
                return findGCD(num2, num1 % num2);
            }
        },
        simplifyFraction: function(fraction) {
            var gcd = findGCD(fraction.numerator, fraction.denominator);
            fraction.numerator /= gcd;
            fraction.denominator /= gcd;
            return fraction;
        }
    };

    let fraction1 = Object.create(Fraction);
    fraction1.setFraction(1, 2);

    let fraction2 = Object.create(Fraction);
    fraction2.setFraction(2, 6);

    let sum = fraction1.add(fraction2);
    alert("Sum: " + sum.numerator + "/" + sum.denominator);

    let difference = fraction1.subtract(fraction2);
    alert("subtract: " + difference.numerator + "/" + difference.denominator);

    let multy = fraction1.multy(fraction2);
    alert("multy: " + multy.numerator + "/" + multy.denominator);

    let division  = fraction1.division (fraction2);
    alert("division : " + division.numerator + "/" + division.denominator);


    let simplifiedFraction = fraction1.simplifyFraction(multy);
    alert("Сокращенная дробь:", simplifiedFraction.numerator + "/" + simplifiedFraction.denominator);

}