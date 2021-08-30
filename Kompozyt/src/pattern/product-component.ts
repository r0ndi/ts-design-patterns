abstract class ProductComponent {
    protected parent?: ProductComponent;

    public setParent(parent?: ProductComponent): void {
        this.parent = parent;
    }

    public getParent(): ProductComponent | null {
        return this.parent;
    }

    public isComposite(): boolean {
        return false;
    }

    public add(component: ProductComponent): void {}

    public remove(component: ProductComponent): void {}

    public abstract getPrice(): number;

}

export default ProductComponent;
