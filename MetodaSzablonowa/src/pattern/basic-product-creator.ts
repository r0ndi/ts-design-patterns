import BaseProductCreator from "./base-product-creator";

class BasicProductCreator extends BaseProductCreator {
    protected setName(): void {
        this.product.name = "basic-product";
    }

    protected setQuantity(): void {
        this.product.quantity = 2;
    }
}

export default BasicProductCreator;
