import ProductComponent from "./product-component";

class ProductComposite extends ProductComponent {
    protected children: ProductComponent[] = [];

    public add(component: ProductComponent): void {
        this.children.push(component);
        component.setParent(this);
    }

    public remove(component: ProductComponent): void {
        const componentIndex = this.children.indexOf(component);

        if (componentIndex >= 0) {
            this.children.splice(componentIndex, 1);
            component.setParent(null);
        }
    }

    public getPrice(): number {
        let value: number = 0;
        for (const component of this.children) {
            value += component.getPrice();
        }

        return value;
    }

}

export default ProductComposite;
