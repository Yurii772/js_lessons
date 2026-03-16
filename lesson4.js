
let countEven = 0;
let countOdd = 0;
let checkProbabilityTheory = function (count){  
for (i = 1; i<=count; i++){
   let number = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
if (number%2 === 0){
countEven++;
   console.log(number);   
}
else {
countOdd++;
console.log (number); 
}
}
   let evenProbability = countEven / count;
   let oddProbability = countOdd / count;
   console.log("Even Probability=".concat(evenProbability * 100).concat("%"));
   console.log("Odd Probability=".concat(oddProbability * 100).concat("%"));
}
checkProbabilityTheory(9);

