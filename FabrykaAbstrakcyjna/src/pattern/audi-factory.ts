import CarFactory from "./car-factory";
import Car from "./car";
import AudiCar from "./audi-car";

class AudiFactory implements CarFactory {
    public createCar = (): Car => {
        return new AudiCar();
    }
}

export default AudiFactory;
