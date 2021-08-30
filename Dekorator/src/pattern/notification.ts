import NotificationInterface from "./notification-interface";

class Notification implements NotificationInterface {
    public sendNotification(message: string): string {
        return message;
    }
}

export default Notification;
