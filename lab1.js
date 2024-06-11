/* 
STRING TRANSFORMATION
*/

// capitalize the first letter of a string
function capitalize(str) {
    return str.replace(str.charAt(0),str.charAt(0).toUpperCase())
}

// reverse a string
function reverse(str) {
    let result;
    if (str==='') {
        return;
    }
    for (const word of str) {
        result = result + word
    }
    return result
}

// words in a string
function wordCount(str){
    return str.split(' ').length
}


// string palindrome
function isPalindrome(str) {
        for (let i = 0; i < (str.length/2); i++) {
            console.log(str.charAt(i), str.charAt(str.length-(i+1)));
            if (str.charAt(i)!==str.charAt(str.length-(i+1))) return false;
            
        }
        return true;
}

console.log(isPalindrome('abbdsfba'))