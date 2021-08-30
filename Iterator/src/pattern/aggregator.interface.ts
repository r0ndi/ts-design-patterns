import IteratorInterface from "./iterator.interface";

interface AggregatorInterface {
    getIterator(): IteratorInterface<string>;
}

export default AggregatorInterface;
