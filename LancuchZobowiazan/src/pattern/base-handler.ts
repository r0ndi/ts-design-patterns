import HandlerInterface from "./handler.interface";

abstract class BaseHandler implements HandlerInterface {
    private nextHandler: HandlerInterface;

    public setNext(handler: HandlerInterface): HandlerInterface {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: string): string {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }

        return "";
    }
}

export default BaseHandler;
