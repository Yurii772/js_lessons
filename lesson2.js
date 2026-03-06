'number' + 3 + 3 // nuumber33 (string). both numbers converted to string and concatanated with "number"
null + 3 //3 (number). null converted to number = 0. 0+3 = 3
5 && "qwerty" // qwerty (string). both value are 'true-like' (not NaN, not null, not undefined, not false), so logical AND returns last one
+'40' + +'2' + "hillel"// 42hillel (string). 40 and 2 are converted to number because of second +, and then back to string because of 'hillel' not to breack the code
'10' - 5 === 6//false (boolean). '10' converted to number. 10-5 !=6
true + false//1 (number). true = 1, false = 0
'4px' - 3//NaN. js can not conevert string '4px' to number to make subtraction
'4' - 3//1 (number). unlike previous example, string '4' can be converted to a number, 'cause does not contain any other symols
'6' + 3 ** 0//61 (string). exponential operator runs first, 3**0 = 1, after number converted to string because '6' is string, after that concatenation is made
12 / '6'//2 (number). '6' converted to number
'10' + (5 === 6)//10false (string). first strict equal operator runs, returns boolean false, after that it is converted to a string becaise '10' is string, and concatenated 
null == ''//false (boolean). 0 does not equal empty string, it is only equal to itself, 'cause js consider null as an object (I'm not sure:))
3 ** (9 / 3)//27 (number). Simple math, nothing interesting
!!'false' == !!'true'//true (boolean). !! converts the value to boolean. both strings are not empty, so in boolean sence both are true (I used ai here, to be honest)
0 || '0' && 1//1 (number). firts && is evaluated. It returns last 'true' value in boolean sence ('0' is true, 'cause not empty, number1 is true as well), after that || is evaluated. number 0 if false in booleam sence, so the ecprecion is now 0||1. || returns first true value on it's way from left to right, and it's number 1.
(+null == false) < 1//false (boolean). +null=0, false =0, so first exppression is true. true=1, 1 is strictly less then 1.
false && true || true//true (boolean). && returns last true value, || returns first true value.
false && (false || true)//false (boolean). First || evaluetes true 'cause it is the last trusy value, && requires both to be true to return true.
(+null == false) < 1 ** 5//true. +null=0, false=0, (+null==false) = true = 1. 1<1 is true.




