var services = {
   гоління: "80 грн",
   стрижка: "60 грн",
   d: function() {
      console.log ("some function") //function included in an object to demonstrate that check if element is a functon in manipulation loops work
   },
   миття_голови: "100 грн"
};
services['Розбити скло'] = "200 грн";
services['Цитування Леся Подервʼянського майстром'] = "1000 грн"
let value = 0;
let sumAllPrices = function (services) {
for (i in services){
   if (typeof services[i] === 'function'){}
   else
 value += (parseInt(services[i]))}
 return value;
}
console.log("Сумма усіх цін ".concat (sumAllPrices(services)).concat ("грн"));
let maxValue = 0;
let maxPrice = function (services){
   for (i in services) {
      if (typeof services[i] === 'function') { }
      else
         currentValue = (parseInt(services[i]));
      if (maxValue < currentValue) {
         maxValue = currentValue;      }  
   }
   return maxValue;
}
console.log("Найбільша ціна: ".concat(i) + (" ") + maxPrice(services) + "грн");
let minValue = (parseInt(services[i]));
let minPrice = function (services) {
   for (i in services) {
      if (typeof services[i] === 'function') { }
      else
         currentValue = (parseInt(services[i]));
      if (minValue > currentValue) {
         minValue = currentValue;
      }

   }
   return minValue;
}
console.log("Найменша ціна ".concat(i) + (" ") + minPrice(services) + "грн");
