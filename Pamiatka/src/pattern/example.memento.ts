import MementoInterface from "./memento.interface";

class ExampleMemento implements MementoInterface {
    private readonly state: string;
    private readonly date: string;

    constructor(state: string) {
        this.state = state;
        this.date = new Date()
            .toISOString()
            .slice(0, 19)
            .replace("T", " ");
    }

    public getState(): string {
        return this.state;
    }

    public getName(): string {
        return `${this.date} / (${this.state.substr(0, 9)}...)`;
    }

    public getDate(): string {
        return this.date;
    }
}

export default ExampleMemento;
