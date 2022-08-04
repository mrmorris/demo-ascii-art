function sayHello(arg) {
  console.log(`Hello ${arg} World`);
}

function sayGoodbye(arg) {
  console.log(`Goodbye ${arg} World`);
}

function recurse(n) {
  if (n > 0) {
    recurse(n - 1);
    console.log(n);
  }
}