function solve(meal_cost, tip_percent, tax_percent) {
  let tipAmount = meal_cost * (tip_percent / 100).toFixed(2);
  let roundedTip = Math.floor(tipAmount * 100) / 100;
  let taxAmount = meal_cost * (tax_percent / 100).toFixed(2);
  let totalCost = Math.round(meal_cost + (roundedTip + taxAmount));
  console.log(totalCost);
}
