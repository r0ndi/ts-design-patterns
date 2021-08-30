import MementoInterface from "./memento.interface";
import Originator from "./originator";

class Caretaker {
    private mementos: MementoInterface[] = [];
    private originator: Originator;

    constructor(originator: Originator) {
        this.originator = originator;
    }

    public backup(): void {
        this.mementos.push(this.originator.save());
    }

    public undo(): void {
        if (!this.mementos.length) {
            return;
        }

        const memento = this.mementos.pop();
        this.originator.restore(memento);
    }

    public showHistory(): void {
        for (const memento of this.mementos) {
            console.log(memento.getName());
        }
    }
}

export default Caretaker;
