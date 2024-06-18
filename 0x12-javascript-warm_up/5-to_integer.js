#!/usr/bin/node
if (process.argv[2] === undefined) {
  console.log('Not a number');
} else if (isFinite(process.argv[2])) {
  console.log('My number: ' + parseInt(process.argv[2]));
} else {
  console.log('Not a number');
}
