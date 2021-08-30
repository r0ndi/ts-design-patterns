import PizzaBuilderInterface from "./pizza-builder.interface";
import Pizza from "../pizza";

class PizzaBuilder implements PizzaBuilderInterface {
    private pizza: Pizza;

    public constructor() {
        this.reset();
    }

    public reset = (): void => {
        this.pizza = new Pizza();
    }

    public setCheese = (): void => {
        this.pizza.addPart("cheese");
    }

    public setChicken = (): void => {
        this.pizza.addPart("chicken");
    }

    public setMushrooms = (): void => {
        this.pizza.addPart("mushrooms");
    }

    public setSalami = (): void => {
        this.pizza.addPart("salami");
    }

    public setSauce = (): void => {
        this.pizza.addPart("sauce");
    }

    public getPizza = (): Pizza => {
        const pizza = this.pizza;
        this.reset();

        return pizza;
    }
}

export default PizzaBuilder;
