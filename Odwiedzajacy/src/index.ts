import Drawer from "./pattern/drawer";
import Square from "./pattern/visitors/squere";
import Circle from "./pattern/visitors/circle";
import Triangle from "./pattern/visitors/trangle";

console.log("======== Visitor ========");

const drawer = new Drawer();
drawer.draw(new Triangle());
drawer.draw(new Square());
drawer.draw(new Circle());

console.log("======== ======== ========");