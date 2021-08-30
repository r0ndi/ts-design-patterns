import BaseComponent from "./base-component";

class SecondComponent extends BaseComponent {
    public makeAction(): void {
        console.log("Making second component action");
        this.mediator.notify(this, "second");
    }

    public makeAnotherAction(): void {
        console.log("Making second component another action");
        this.mediator.notify(this, "another-second");
    }
}

export default SecondComponent;
