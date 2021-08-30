import MementoInterface from "./memento.interface";
import ExampleMemento from "./example.memento";

class Originator {
    private state: string;

    public constructor(state: string) {
        this.state = state;
    }

    public save(): MementoInterface {
        return new ExampleMemento(this.state);
    }

    public restore(memento: MementoInterface): void {
        this.state = memento.getState();
    }

    // Fn to change state for implement by user
    public changeStateValue(): void {
        const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.state = Array
            .apply(null, { length: 30 })
            .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
            .join('');
    }
}

export default Originator;
