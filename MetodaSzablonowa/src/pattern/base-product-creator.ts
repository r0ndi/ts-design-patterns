import ProductType from "./product-type";

abstract class BaseProductCreator {
    protected product: ProductType = {
        name: "product",
        quantity: 1,
    };

    public templateMethod(): void {
        this.firstHook();
        this.setQuantity();
        this.setName();
        this.secondHook();
        this.viewProduct();
    }

    protected viewProduct(): void {
        console.log(`Created product: ${this.product.quantity}x ${this.product.name}`);
    }

    protected abstract setQuantity(): void;
    protected abstract setName(): void;

    protected firstHook(): void { }
    protected secondHook(): void { }
}

export default BaseProductCreator;
