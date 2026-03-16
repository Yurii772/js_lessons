let countEven = 0;
let countOdd = 0;
let checkProbabilityTheory = function (count){  
for (i = 1; i<=count; i++){
   let number = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
if (number%2 === 0){
countEven++;
}
else {
countOdd++;
}
}
   let evenProbability = countEven / count;
   let oddProbability = countOdd / count;
   console.log ("Total nubers generated ".concat (count));
   console.log ("Even count ".concat (countEven));
   console.log ("Odd count ".concat (countOdd));
   console.log("Even Probability = ".concat(evenProbability * 100).concat("%"));
   console.log("Odd Probability = ".concat(oddProbability * 100).concat("%"));
}
checkProbabilityTheory(8);

