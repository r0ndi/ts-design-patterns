import IteratorInterface from "./iterator.interface";
import EmployeeCollection from "./employee-collection";

class EmployeeIterator implements IteratorInterface<string> {
    private readonly reverse: boolean = false;
    private collection: EmployeeCollection;
    private position: number = 0;

    public constructor(collection: EmployeeCollection, reverse: boolean = false) {
        this.collection = collection;
        this.reverse = reverse;

        if (this.reverse) {
            this.position = this.collection.getCount() - 1;
        }
    }

    public current(): string {
        return this.collection.getItems()[this.position];
    }

    public key(): number {
        return this.position;
    }

    public next(): string {
        const item = this.collection.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    }

    public rewind(): void {
        this.position = this.reverse ? this.collection.getCount() - 1 : 0;
    }

    public valid(): boolean {
        return this.reverse ? this.position >= 0 : this.position < this.collection.getCount();
    }
}

export default EmployeeIterator;
