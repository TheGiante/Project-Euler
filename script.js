//Multiples of 3 or 5
function multiplesof3or5() {
    var multiples = [];
    var num = parseInt($("#user-input").val());
    var sum = 0;
    for (var i = 1; i < num; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        multiples.push(i);
        sum += i;
        }
    }
   
    $("#answer-content1").html("Answer : " + sum);
    $("#detailed-answer1").html("These are the multiples : " + multiples);
}

//Fibonacci numbers
function fibonacciNumbers() {
    var evenFibonacciNumbers = [];
    var num = parseInt($("#user-input2").val());
    
    var firstNumber = 0, secondNumber = 1, sum = 0;
    while (secondNumber < num) {
        if (thirdNumber % 2 === 0) {
            sum += thirdNumber;
            evenFibonacciNumbers.push(thirdNumber);
        }
        var thirdNumber = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = thirdNumber;
    }
    $("#answer-content2").html("Answer : " + sum);
    $("#detailed-answer2").html("These are the even-valued Fibonacci terms: " + evenFibonacciNumbers);
}
//Largest Prime Number
function primeNumber() {
    var factors = [];

    var num = parseInt($("#user-input3").val());
    const holder = num;
    var factor = 2;
    while(factor <= num){
        while (factor<=num){
            if (num%factor == 0){
                num/=factor;
                factors.push(factor);
                console.log(factor);
            }else{
                factor++;
            }
        }
        
    }   
    
    $("#answer-content3").html("Answer : " + factor);
    $("#detailed-answer3").html(`These are the prime factors of ${holder} : ` + factors);
}

