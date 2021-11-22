var a =1 ;
var b = a++;
console.log(a);
console.log(b);

var c = ++a;
console.log(a)
console.log(c)
var d = "hello";
var e = false;
console.log(d++);
console.log(e++);

var perplexed;//
console.log(perplexed + 2);//NaN
var price = 2.7;
price.toFixed(2)//2.70
console.log(price.toFixed(2));
/*var price="2.7"
price.toFixed(2)//NaN?
console.log(price.toFixed(2));*/


console.log(isNaN(0))


console.log(isNaN(1))
console.log(isNaN(""))
console.log(isNaN("string"))
console.log(isNaN("0"))
console.log(isNaN("1"))
console.log(isNaN("3.145"))
console.log(isNaN(Number.MAX_VALUE))
console.log(isNaN(Infinity))
console.log(isNaN("true"))
console.log(isNaN(true))
console.log(isNaN("false"))
console.log(isNaN(false))

// to illustrate why the isNaN() function is needed:
console.log(NaN == NaN)
console.log(!true)
console.log(!false)
console.log(!!true)
console.log(!!false)
console.log(!!0)
console.log(!!-0)
console.log(!!1)
console.log(!!-1)
console.log(!!0.1)
console.log(!!"hello")
console.log(!!"")
console.log(!!'')
console.log(!!"false")
console.log(!!"0")

/*Execute the following statement in the Chrome JavaScript console and then follow the directions below.


var sample = "Hello Codeup";
Use .length to find the number of characters in the string.
Try to make the sample string all upper or all lower case.
Update the variable sample via concatenation so that it contains "Hello Codeup Students".
Replace "Students" with "Class".
Find the index of "c" using .indexOf(). What do you observe?
Find the index of "C" using .indexOf().
Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().*/
var sample = "Hello Codeup"
console.log(sample.length);
console.log(sample.toLowerCase());//does not change the value of sample.
sample += " students";
console.log(sample);
sample.replace("students", "Class")//replace won't change the value of sample.
console.log(sample);
console.log(sample.indexOf("c"));//because there is no lowercase c
console.log(sample.indexOf("C"));
let cIndex = sample.indexOf('C');
let pIndex = sample.indexOf('p')+1;
console.log(sample.substring(cIndex, pIndex));










