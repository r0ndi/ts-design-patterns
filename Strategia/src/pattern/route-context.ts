import RouteStrategyInterface from "./route-strategy.interface";

class RouteContext {
    private strategy: RouteStrategyInterface;

    public constructor(strategy: RouteStrategyInterface) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: RouteStrategyInterface): void {
        this.strategy = strategy;
    }

    public setRoute(): void {
        this.strategy.setTheRoute();
    }
}

export default RouteContext;
