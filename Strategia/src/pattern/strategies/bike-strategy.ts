import RouteStrategyInterface from "../route-strategy.interface";

class BikeStrategy implements RouteStrategyInterface {
    setTheRoute(): void {
        console.log("Setting route for bike");
    }
}

export default BikeStrategy;
