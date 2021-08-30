import Product from "./pattern/product";
import ProductComposite from "./pattern/product-composite";
import CheapestProduct from "./pattern/cheapest-product";

console.log("======== Composite ========");

const product = new Product();
console.log("Product price: " + product.getPrice());

const cheapestProduct = new CheapestProduct();
console.log("Cheapest product price: " + cheapestProduct.getPrice());

const productComposite = new ProductComposite();
productComposite.add(product);
productComposite.add(cheapestProduct);
productComposite.add(product);
productComposite.add(cheapestProduct);
productComposite.add(cheapestProduct);
productComposite.remove(cheapestProduct);
console.log("All composites price: " + productComposite.getPrice());

console.log("======== ======== ========");