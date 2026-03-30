var arr = [
   {
      userName: "Andrii",
      lastName: "",
      email: "andrii@mail.ru" // Нам такі не підходять
   
   },
   {
      userName: "Dmitro",
      lastName: "Porohov",
        "< email": "dmitro.porohov@yahoo.com>"
    },
   {
      userName: "Test",
      lastName: "Test",
      email: "testru.test@gmail.com" 
},
];
let filteredArray = arr.filter(el => el.email);
let emailsOnly = filteredArray.map(filteredArray => filteredArray.email);
let russianDetection = /ru/g;
let approvedEmails = emailsOnly.filter(email => {
   return !russianDetection.test(email);
})
console.log(approvedEmails);

