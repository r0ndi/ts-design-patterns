import MediatorInterface from "../mediator.interface";

class BaseComponent {
    protected mediator: MediatorInterface;

    public constructor(mediator: MediatorInterface = null) {
        this.mediator = mediator;
    }

    public setMediator(mediator: MediatorInterface): void {
        this.mediator = mediator;
    }
}

export default BaseComponent;
