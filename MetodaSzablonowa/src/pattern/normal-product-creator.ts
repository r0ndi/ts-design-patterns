import BaseProductCreator from "./base-product-creator";

class NormalProductCreator extends BaseProductCreator {
    protected setName(): void {
        this.product.name = "normal-product";
    }

    protected setQuantity(): void {
        this.product.quantity = 1;
    }

    protected firstHook(): void {
        console.log("Preparing to create normal product");
    }
}

export default NormalProductCreator;
