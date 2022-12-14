
 
let checkPalindrome = (stringg) => {
    return stringg === stringg.split("").reverse().join("");
  };
   
  console.log("Is Palindrome? : " + checkPalindrome("NitiN"));
  console.log("Is Palindrome?: " + checkPalindrome("Nikhil"));