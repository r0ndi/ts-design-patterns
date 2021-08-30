import Pizza from "../pizza";

interface PizzaBuilderInterface {
    reset(): void;
    setSauce(): void;
    setCheese(): void;
    setSalami(): void;
    setMushrooms(): void;
    setChicken(): void;
    getPizza(): Pizza;
}

export default PizzaBuilderInterface;
