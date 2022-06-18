function hasTargetSum(array, target) {
  // Write your algorithm here

  for(let i=0;i<array.length;i++){
     const compliment=target -array[i]
  for(let j=i+1;j<array.length;j++){
      if (array[j]===compliment)return true;
   }
  }
   return false;
 }

/* 
  Write the Big O time complexity of your function here
  runtime: o(n*2)
  space:o(n)
*/

/* 
  Add your pseudocode here
   Add your pseudocode here
  iterate through each number
  for current value identify a compliment that adds to the target
  iterate through the rest of the array
  check if any number is our compliment
  if theres any return true else false
*/

/*
  Add written explanation of your solution here
  iterate through each number
  for current value identify a compliment that adds to the target
  iterate through the rest of the array
  check if any number is our compliment
  if theres any return true else false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting:false");
  console.log("=>", hasTargetSum([3, 6, 1], 10));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 30));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
