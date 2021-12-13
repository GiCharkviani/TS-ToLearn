import { Product } from "./product.model";
import "reflect-metadata";
import { plainToInstance } from "class-transformer";

import { validate } from "class-validator";

const products = [
  { title: "A carpet", price: 19.55 },
  { title: "A book", price: 10.55 },
];

const newProd = new Product("", -55);

validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("Validation Errors!");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});

// ხელით
// const loadedProducts = products.map(prod => {
//     return new Product(prod.title, prod.price)
// })

// პაკეჯით
const loadedProducts = plainToInstance(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

// console.log(p1.getInformation());
