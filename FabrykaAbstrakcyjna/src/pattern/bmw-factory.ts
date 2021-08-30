import CarFactory from "./car-factory";
import Car from "./car";
import BmwCar from "./bmw-car";

class BmwFactory implements CarFactory {
    public createCar = (): Car => {
        return new BmwCar();
    }
}

export default BmwFactory;
