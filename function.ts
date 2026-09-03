function greet(name:string, age:number) {
  return `Hello ${name}, you are ${age} years old.`;
}





function calculatePrice(price:number, quantity:number, discount:number):number {
  const total = price * quantity;
  return total - discount;
}
// console.log(calculatePrice(100, 5, 50))




interface Product {
  name: string;
  price: number;
  category: string;
}

const product:Product = {
  name: "Laptop",
  price: 50000,
  category: "Tech"
};

function getProductInfo(product: Product): string {
   return `${product.name} costs ${product.price} taka`
}
console.log(getProductInfo(product))