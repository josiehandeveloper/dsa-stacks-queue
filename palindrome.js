function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // Your code goes here
  const reversed = s.split("").reverse().join("");
  if (reversed === s) return true;
  return false;
}

// True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));
