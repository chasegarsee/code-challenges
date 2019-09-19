const atm = function(withdraw, balance) {
  let newBalance = 0;
  if (withdraw <= balance) {
    newBalance = balance - withdraw - 0.5;
    return newBalance;
  }
  return balance;
};

console.log(atm(240, 200));
