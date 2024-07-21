/* ******************************************************
STRING TRANSFORMATION
******************************************************* */

// capitalize the first letter of a string
function capitalize(str) {
    if (str.length<1) return;
    return str.replace(str.charAt(0),str.charAt(0).toUpperCase())
}

// reverse a string
function reverse(str) {
    if (str.length<1) return;
    let result='';
    if (str==='') {
        return;
    }
    for (let i = 0; i < str.length; i++) {
        result = result + str[(str.length-1) -i]
    }
    return result
}

// words in a string
function wordCount(str){
    if (str.length<1) return;
    return str.split(' ').length
}


// string palindrome
function isPalindrome(str) {
    if (str.length<1) return;
        for (let i = 0; i < (str.length/2); i++) {
            console.log(str.charAt(i), str.charAt(str.length-(i+1)));
            if (str.charAt(i)!==str.charAt(str.length-(i+1))) return false;
            
        }
        return true;
}



/* ************************************************************************
ARRAY TRANSFORMATION
********************************************************************** */

// double
function double(arr) {
    if (arr.length<1) return;
    return arr.map(el=> el * 2);
}

// filter even numbers
function filterEven(arr) {
    if (arr.length<1) return;
    return arr.filter(el=>el % 2);
}

// calculate sum of array element
function sum(arr) {
    if (arr.length<1) return;
    let result=0;
    for (const el of arr) {
        result += el;
    }
    return result
}

// calculate average of array elements
function average(arr) {
    if (arr.length<1) return;
    let result=0;
    for (const el of arr) {
        result += el;
    }
    return (Math.floor(result/arr.length))
}



/* ************************************************************************
OBJECT TRANSFORMATION
********************************************************************** */
// fullname
function fullName(person) {
    if (person.firstName && person.lastName) {
        return person.firstName +' '+ person.lastName;
    }
    return;
}

// check if a person is adult
function isAdult(person) {
    if (person.age > 17) return true;
    return false;
}

// filter array by age to get only 'minAge' persons
function filterByAge(people, minAge) {
    if (people.length>0) {
        return people.filter(person=> person.age >= minAge)
    }
    return;
}

/* **************************************************************
COMPOSE FUNCTIONS
*************************************************************** */
function compose(...arg) {
    return arg[0](arg[1](arg[2]))
}
console.log(compose(sum,double,[1,2,5,8,3]));
console.log(compose(capitalize,reverse,'tnemevom'));

module.exports = {capitalize, reverse,wordCount, sum,isPalindrome,double,filterEven,average,fullName,isAdult,filterByAge,compose}