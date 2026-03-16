let pow = function (base, power){
   let result = 1;
for (let i = 0; i <= power; i++) {
  result *= base; 
}
return result; 
}
console.log(pow (2, 10));
