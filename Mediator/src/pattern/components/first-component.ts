import BaseComponent from "./base-component";

class FirstComponent extends BaseComponent {
    public makeAction(): void {
        console.log("Making first component action");
        this.mediator.notify(this, "first");
    }

    public makeAnotherAction(): void {
        console.log("Making first component another action");
        this.mediator.notify(this, "another-first");
    }
}

export default FirstComponent;
