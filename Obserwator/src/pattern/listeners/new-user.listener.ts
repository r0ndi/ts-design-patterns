import EventListenerInterface from "../event-listener.interface";

class NewUserListener implements EventListenerInterface {
    public getName(): string {
        return "new-user";
    }

    public update(data: any): void {
        console.log("New user created: " + data?.email);
    }
}

export default NewUserListener;
