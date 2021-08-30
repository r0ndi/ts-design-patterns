import Director from "./pattern/director";
import PizzaBuilder from "./pattern/builders/pizza-builder";

console.log("======== Builder ========");

const director = new Director();
const builder = new PizzaBuilder();
director.setBuilder(builder);

director.buildMargheritaPizza();
console.log("Margherita pizza parts: " + builder.getPizza().listParts());

director.buildSalamiPizza();
console.log("Salami pizza parts: " + builder.getPizza().listParts());

director.buildBestPizza();
console.log("Best pizza parts: " + builder.getPizza().listParts());

console.log("======== ======== ========");