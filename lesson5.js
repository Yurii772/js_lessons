let a = {
   g: "dsa",
   d: function () {
      console.log ("dsfsdfs")
   },
   s:"erwer",
}

 for ( i in a) {
    if (typeof a[i] === 'function')
    {
       console.log ("This shit is a function")
    }
    else console.log (i + a[i]);
 }
var services = {
   стрижка: "60 грн",
   гоління: "80 грн",
   d: function() {
      console.log ("Fuck")
   },
   миття_голови: "100 грн"
};
let value = 0;
for (i in services){
   if (typeof services[i] === 'function'){}
   else
   value += (parseInt(services[i]));
}
console.log(value)
