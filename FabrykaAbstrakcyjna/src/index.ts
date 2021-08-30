import Application from "./pattern/application";
import AudiFactory from "./pattern/audi-factory";
import BmwFactory from "./pattern/bmw-factory";

console.log("======== Abstract factory ========");

const applicationForAudi = new Application(new AudiFactory());
console.log("Audi Car name: " + applicationForAudi.getCarName());

const applicationForBmw = new Application(new BmwFactory());
console.log("BMW Car name: " + applicationForBmw.getCarName());

console.log("======== ======== ======== ========");