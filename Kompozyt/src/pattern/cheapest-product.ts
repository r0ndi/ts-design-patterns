import ProductComponent from "./product-component";

class CheapestProduct extends ProductComponent {

    public getPrice(): number {
        return 1;
    }

}

export default CheapestProduct;
