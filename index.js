/**************************** Question 1 ***************************************/
/*
var x= prompt("Enter the value of x",x);
var y= prompt("Enter the value of y",y);
var z= prompt("Enter the value of z",z);
if (x>y && x>z)
{
    if (y>z)
    {
        alert(x + ", " + y + ", " +z);
    }
    else
    {
        alert(x + ", " + z + ", " +y);
    }
}
else if (y>x && y >z)
{
    if (x>z)
    {
        alert(y + ", " + x + ", " +z);
    }
    else
    {
        alert(y + ", " + z + ", " +x);
    }
}
else if (z>x && z>y)
{
     if (x>y)
    {
        alert(z + ", " + x + ", " +y);
    }
    else
    {
        alert(z + ", " + y + ", " +x);
    }
}
*/


/****************************** Question 2 ************************************ */
/*
var n = prompt("Enter the value of n",n);
let isPrime = true;
for(let i=0;i<=n;i++){
    if(i%2==0){
        if (n > 1) {
            for (let i = 2; i < n; i++) {
                if (number % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                alert(`${n} is a even and prime number`);
            }
        }
        else {
            alert(`${n} is an even number`);
        }
    }
    else{
        if (n > 1) {
            for (let i = 2; i < n; i++) {
                if (n % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (!isPrime) {
                alert(`${n} is a odd and prime number`);
            }
        }
        else {
            alert(`${n} is an odd number`);
        }
    }
}
*/


/****************************************** Question 3 *******************************************************/

// var num=prompt("Please provide a number for the no of rows to be print in a pattern...");
// for(m=1; m <= num; m++)
// {
//     for(n=m; n<=num; n++)
//     {
//         document.write("* ");
//     }
//     document.write('<br />');
// }


/****************************************** Question 5 *****************************************************************/

// var name = prompt("Enter any name");

// var nameCapital = name.charAt(0).toUpperCase() + name.slice(1);
// alert(nameCapital);

/****************************************** Question 8 *******************************************************/

// let num = (prompt('Enter the number of terms: '));
// let n1 = 0, n2 = 1, t1;

// document.write('Fibonacci Series:');

// for (let i = 1; i <= num; i++) {
//     document.write(n1+",");
//     t1 = n1 + n2;
//     n1 = n2;
//     n2 = t1;
// }


/****************************************** Question 9 *******************************************************/

// function celtofar(){
//     var celcius = prompt("Enter the temperature in celcius.");
//     var far = ((celcius * 9)/5) + 32 ;
//     alert(`${celcius}°C is ${far}°F`);
// }

// function fartocel(){
//     var far = prompt("Enter the temperature in farhenheit.");
//     var cel = ((far * 5)/9) - 32 ;
//     alert(`${far}°F is ${cel}°C`);
// }

// var str = prompt("Enter C for celcius and F for farhenheit");

// if(str=="C"){
//     celtofar();
// }
// else if(str=="F"){
//     fartocel();
// }
// else{
//     alert("Please type only C or F");
// }


/****************************************** Question 10 *******************************************************/

// var name = prompt("Enter the string");
// swapcase = function swapcase(str) {
//     return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
//         return chr ? match.toUpperCase() : match.toLowerCase();
//     });
// }
// alert(swapcase(name));

