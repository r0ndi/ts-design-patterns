import ProductComponent from "./product-component";

class Product extends ProductComponent {

    public getPrice(): number {
        return 10;
    }

}

export default Product;
