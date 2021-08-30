interface EventListenerInterface {
    getName(): string;

    update(data: any): void;
}

export default EventListenerInterface;
