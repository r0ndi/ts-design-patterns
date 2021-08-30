import Car from "./car";

class BmwCar implements Car {
    public getName = (): string => {
        return "Bmw";
    }
}

export default BmwCar;
