interface HandlerInterface {
    setNext(handler: HandlerInterface): HandlerInterface;

    handle(request: string): string;
}

export default HandlerInterface;
