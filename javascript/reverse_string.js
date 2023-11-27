function reverseString(str) {
  if(typeof str === "string"){
    let lastIndex = str.length - 1;
    let newStr = str.substring(lastIndex);
    for(let i = lastIndex - 1; i >= 0; i--){
      newStr = newStr + str.substring(i, i+1);
    }
    return(newStr);
  } else {
    return undefined
  }
  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ' j2 ugs4'");
  console.log("=>", reverseString("4sgu 2j "))


  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
