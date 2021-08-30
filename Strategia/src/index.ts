import RouteContext from "./pattern/route-context";
import CarStrategy from "./pattern/strategies/car-strategy";
import BikeStrategy from "./pattern/strategies/bike-strategy";

console.log("======== Strategy ========");

const routeContext = new RouteContext(new CarStrategy());
routeContext.setRoute();
routeContext.setStrategy(new BikeStrategy());
routeContext.setRoute();

console.log("======== ======== ========");