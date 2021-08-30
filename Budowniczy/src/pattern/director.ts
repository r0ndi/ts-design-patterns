import PizzaBuilder from "./builders/pizza-builder";

class Director {
    private builder: PizzaBuilder;

    public setBuilder = (builder: PizzaBuilder): void => {
        this.builder = builder;
    }

    public buildMargheritaPizza = (): void => {
        this.builder.setCheese();
        this.builder.setSauce();
    }

    public buildSalamiPizza = (): void => {
        this.builder.setCheese();
        this.builder.setSauce();
        this.builder.setSalami();
    }

    public buildBestPizza = (): void => {
        this.builder.setCheese();
        this.builder.setSauce();
        this.builder.setSalami();
        this.builder.setChicken();
        this.builder.setMushrooms();
    }
}

export default Director;
