#!/usr/bin/node

if (process.argv.length <= 3) {
  console.log('0');
} else {
  // Extracting and Converting Arguments
  const arg = process.argv.splice(2).map(Number);
  // Find the second Largest number
  // First sort out the array
  arg.sort((a, b) => b - a);
  // console.log(arg);
  // Print out the second Largest number in the array
  console.log(arg[1]);
}
