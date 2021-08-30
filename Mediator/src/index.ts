import FirstComponent from "./pattern/components/first-component";
import SecondComponent from "./pattern/components/second-component";
import ExampleMediator from "./pattern/example-mediator";

console.log("======== Mediator ========");

const firstComponent = new FirstComponent();
const secondComponent = new SecondComponent();

new ExampleMediator(firstComponent, secondComponent);
firstComponent.makeAction();
secondComponent.makeAction();

console.log("======== ======== ========");
