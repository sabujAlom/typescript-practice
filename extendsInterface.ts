interface Product {
  name: string;
  price: number;
}
// interface DigitalProduc extends Product{
//     downloadUrl: string;
// }

// const product:DigitalProduc={
//     name:"Computer",
//     price: 40000,
//     downloadUrl: "httpl:link..."
// }
// console.log(product)




type DigitalProduct = Product & {
  downloadUrl: string;
};
const product:DigitalProduc={
    name:"Computer",
    price: 40000,
    downloadUrl: "httpl:link..."
}