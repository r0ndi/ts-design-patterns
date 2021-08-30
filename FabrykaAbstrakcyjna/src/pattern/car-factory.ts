import Car from "./car";

interface CarFactory {
    createCar(): Car;
}

export default CarFactory;
