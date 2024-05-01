//Multiples of 3 or 5
function multiplesof3or5() {
  var num = parseInt($("#user-input").val());
  var sum = 0;
  for (var i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  $("#answer-content1").html("Answer : " + sum);
}

//Fibonacci numbers
function fibonacciNumbers() {
    var num = parseInt($("#user-input2").val());

    var firstNumber = 0, secondNumber = 1, sum = 0;
    while (secondNumber< num) {
        if (thirdNumber % 2 === 0) {
            sum += thirdNumber;
        }
        var thirdNumber = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = thirdNumber;
    }
    $("#answer-content2").html("Answer : " + sum);
}
//Largest Prime Number
function primeNumber() {
    var num = parseInt($("#user-input3").val());
    var factor = 2;
    while(factor <= num){
        while (factor<=num){
            if (num%factor == 0){
                num/=factor;    
            }else{
                factor++;
            }
        }

    }
    $("#answer-content3").html("Answer : " + factor);
}

