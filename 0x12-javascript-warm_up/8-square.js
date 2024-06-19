#!/usr/bin/node

if (process.argv[2] === undefined || process.argv[2] === isNaN(process.argv[2])) {
  console.log('Missing size');
} else {
  const num = Number(process.argv[2]);
  let i;
  for (i = 0; i < num; i++) {
    console.log('X'.repeat(num));
  }
}
