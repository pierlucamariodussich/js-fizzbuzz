var num = 0;
var resultEL = document.getElementById("result");



for (var i=0 ; i < 100; i++){



    if ( i % 3){
       var resultEL= "Fizz";
    } else if ( i % 5){
       var resultEL= "Fizz";
    } else if  ( i % 5 == i % 3){
      var resultEL= "FizzBuzz";
    } else {
      var resultEL = i;
    }

}


document.getElementById("result").innerHTML += "<li>" + resultEL + "</li>"
