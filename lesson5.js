var services = {
   стрижка: "60 грн",
   гоління: "80 грн",
   d: function() {
      console.log ("some function")
   },
   миття_голови: "100 грн"
};
services['Розбити скло'] = "200 грн";
let value = 0;
let sumAllPrices = function (services) {
for (i in services){
   if (typeof services[i] === 'function'){}
   else
 value += (parseInt(services[i]))}
 return value;
}
console.log(sumAllPrices(services));
let maxValue = 0;
let maxPriceDetection = function (services){
   for (i in services) {
      if (typeof services[i] === 'function') { }
      else
         currentValue = (parseInt(services[i]));
         console.log (currentValue);
      if (maxValue < currentValue) {
         maxValue = currentValue[i];
      }  
   }
}
console.log(maxPriceDetection(services));
