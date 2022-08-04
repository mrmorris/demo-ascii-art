function hello() {
  console.log('Hello World');
}

function goodbye() {
  console.log('Goodbye World');
}

function recurse(n) {
  if (n > 0) {
    recurse(n - 1);
    console.log(n);
  }
}