import Forest from "./pattern/forest";

console.log("======== Flyweight ========");

const forest = new Forest();
forest.plantTree("10", "15", "normal", "black", "normal");
forest.plantTree("10", "10", "normal", "black", "normal");
forest.plantTree("10", "10", "normal", "red", "normal");
forest.draw();

console.log("======== ======== ========");