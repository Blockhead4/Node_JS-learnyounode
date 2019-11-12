const sum = args => {
  let result = 0;
  let i = 2;
  while (i < args.length) {
    result += Number(args[i]);
    i += 1;
  }
  return result;
};

console.log(sum(process.argv));
