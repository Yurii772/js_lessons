var services = {
   стрижка: "60 грн",
   гоління: "80 грн",
   d: function() {
      console.log ("some function")
   },
   миття_голови: "100 грн"
};
let value = 0;
let sumAllPrices = function (services) {
for (i in services){
   if (typeof services[i] === 'function'){}
   else
 value += (parseInt(services[i]))}
 return value;
}
console.log(sumAllPrices(services))

