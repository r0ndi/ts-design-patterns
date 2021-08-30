import RouteStrategyInterface from "../route-strategy.interface";

class CarStrategy implements RouteStrategyInterface {
    setTheRoute(): void {
        console.log("Setting route for car");
    }
}

export default CarStrategy;
