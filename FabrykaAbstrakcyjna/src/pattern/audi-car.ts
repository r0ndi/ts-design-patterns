import Car from "./car";

class AudiCar implements Car {
    public getName = (): string => {
        return "Audi";
    }
}

export default AudiCar;
