// 1. Write a function calculateFactorial (n) that takes a non-negative integer n and returns the factorial of n.(factorial of 5= 5*4*3*2*1=120)
let n= 5;
function factorial(n) {
    if (n===0) {
      return 1;  
    }
    else {
        return n*factorial(
            n-1  
        );
    }
}
console.log(factorial(n));