const print = (a,b, callback) => {
  callback(a,b,a,b,a);
}

print(5,6, console.log);