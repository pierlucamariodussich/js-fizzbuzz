

for (var i = 1 ; i <= 100; i++) {



    if  (i%15 == 0) {
       resultEL = "FizzBuzz";
    } else if (i%5 == 0) {
        resultEL = "Buzz";
    } else if (i%3 == 0)  {
        resultEL = "Fizz";
    } else if ((i%3 > 0) || (i%5 > 0)){
        resultEL = i;
    }


    document.getElementById("result").innerHTML += "<li>" + resultEL + "</li>";
}
