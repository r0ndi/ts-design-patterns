import MediatorInterface from "./mediator.interface";
import FirstComponent from "./components/first-component";
import SecondComponent from "./components/second-component";

class ExampleMediator implements MediatorInterface {
    private firstComponent: FirstComponent;
    private secondComponent: SecondComponent;

    public constructor(firstComponent: FirstComponent, secondComponent: SecondComponent) {
        this.firstComponent = firstComponent;
        this.firstComponent.setMediator(this);

        this.secondComponent = secondComponent;
        this.secondComponent.setMediator(this);
    }

    public notify(sender: object, event: string) {
        if (event === "first") {
            this.firstComponent.makeAnotherAction();
        } else if (event === "second") {
            this.secondComponent.makeAnotherAction();
        }
    }
}

export default ExampleMediator;
