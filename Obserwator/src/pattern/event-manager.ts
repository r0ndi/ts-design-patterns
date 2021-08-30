import EventManagerInterface from "./event-manager.interface";
import EventListenerInterface from "./event-listener.interface";

class EventManager implements EventManagerInterface {
    private listeners: EventListenerInterface[] = [];

    subscribe(listener: EventListenerInterface): void {
        this.listeners.push(listener);
    }

    unsubscribe(listener: EventListenerInterface): void {
        this.listeners.splice(this.listeners.indexOf(listener), 1);
    }

    notify(eventName: string, data: any): void {
        this.listeners.forEach((listener: EventListenerInterface) => {
            if (listener.getName() === eventName) {
                listener.update(data)
            }
        });
    }
}

export default EventManager;
