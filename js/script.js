var FIZZ = 3;
var BUZZ = 5;
var FIZZBUZZ = FIZZ*BUZZ;
var min_div = 1
var max_div = 100
var resultEL;


for (var i = min_div ; i <= max_div ; i++) {

    resultEL = i;

    if  (i%FIZZBUZZ == 0) {
       resultEL = "FizzBuzz";
    } else if (i%BUZZ == 0) {
        resultEL = "Buzz";
    } else if (i%FIZZ == 0)  {
        resultEL = "Fizz";
    }


    document.getElementById("result").innerHTML += "<li>" + resultEL + "</li>";
}
