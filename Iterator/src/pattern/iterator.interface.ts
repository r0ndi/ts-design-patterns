interface IteratorInterface<T> {
    current(): T;

    next(): T;

    key(): number;

    valid(): boolean;

    rewind(): void;
}

export default IteratorInterface;
