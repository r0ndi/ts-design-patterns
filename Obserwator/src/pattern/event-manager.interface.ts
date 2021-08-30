import EventListenerInterface from "./event-listener.interface";

interface EventManagerInterface {
    subscribe(listener: EventListenerInterface): void;

    unsubscribe(listener: EventListenerInterface): void;

    notify(eventName: string, data: any): void;
}

export default EventManagerInterface;
