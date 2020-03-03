let length = d % n;
for (let i = 0; i < length; i++) a.push(a.shift());
console.log(a.join(" "));
