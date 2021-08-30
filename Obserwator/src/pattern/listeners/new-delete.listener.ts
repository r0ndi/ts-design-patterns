import EventListenerInterface from "../event-listener.interface";

class UserDeleteListener implements EventListenerInterface {
    public getName(): string {
        return "user-deleted";
    }

    public update(data: any): void {
        console.log("User deleted: " + data?.email);
    }
}

export default UserDeleteListener;
