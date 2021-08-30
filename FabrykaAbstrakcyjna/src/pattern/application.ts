import CarFactory from "./car-factory";
import Car from "./car";

class Application {
    private factory: CarFactory;
    private car: Car;

    public constructor(factory: CarFactory) {
        this.factory = factory;
        this.createCar();
    }

    public getCarName = (): string => {
        return this.car.getName();
    }

    private createCar = (): void => {
        this.car = this.factory.createCar();
    }
}

export default Application;
