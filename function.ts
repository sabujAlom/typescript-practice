function greet(name:string, age:number) {
  return `Hello ${name}, you are ${age} years old.`;
}





function calculatePrice(price:number, quantity:number, discount:number):number {
  const total = price * quantity;
  return total - discount;
}
console.log(calculatePrice(100, 5, 50))