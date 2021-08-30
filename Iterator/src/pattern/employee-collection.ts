import AggregatorInterface from "./aggregator.interface";
import IteratorInterface from "./iterator.interface";
import EmployeeIterator from "./employee-iterator";

class EmployeeCollection implements AggregatorInterface {
    private items: string[] = [];

    public getItems(): string[] {
        return this.items;
    }

    public getCount(): number {
        return this.items.length;
    }

    public addItem(item: string): void {
        this.items.push(item);
    }

    public getIterator(): IteratorInterface<string> {
        return new EmployeeIterator(this);
    }

    public getReverseIterator(): IteratorInterface<string> {
        return new EmployeeIterator(this, true);
    }
}

export default EmployeeCollection;
