import NotificationInterface from "./notification-interface";

abstract class NotificationDecorator implements NotificationInterface {
    public notification!: NotificationInterface;

    public constructor(notification: NotificationInterface) {
        this.notification = notification;
    }

    public sendNotification(message: string): string {
        return this.notification.sendNotification(message);
    }
}

export default NotificationDecorator;
