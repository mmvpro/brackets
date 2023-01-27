module.exports = function check(str, bracketsConfig) {
    const arr = str.split("");
  const bs = {};
  const stack = [];

  bracketsConfig.forEach((e) => (bs[e[0]] = e[1]));

  for (let i of arr) {
    if (bs[i]) {
      if (bs[i] === i && stack[stack.length - 1] === i) {
        stack.pop();
        continue;
      }
      stack.push(i);
    } else {
      if (!stack.length) {
        return false;
      }
      if (i !== bs[stack.pop()]) return false;
    }
  }
  return !stack.length;

}
