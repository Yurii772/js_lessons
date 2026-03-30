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
      email: "test-ru.test@gmail.com" 
},
   {
      userName: "Test",
      lastName: "Test",
      email: "opanas-ru.test@gmail.com"
   },
   {
      userName: "Test",
      lastName: "Test",
      email: "Boris.theBlade@mail.ru"
   },
   {
      userName: "Test",
      lastName: "Test",
      email: "I'm_notvail%$#.test@gmail.com"
   }
];
let filteredArray = arr.filter(el => el.email);
let emailsOnly = filteredArray.map(filteredArray => filteredArray.email);
let russianDetection = /ru$/g;
console.log(emailsOnly);
let approvedEmails = emailsOnly.filter(email => {
   return !russianDetection.test(email);
});
let emailValidation = /[\w\.-]/g;
console.log("We can prove this users: ".concat(approvedEmails));
let validAmoungApproved = approvedEmails.filter(email =>{
   return !emailValidation(email);
});
console.log(validAmoungApproved);

