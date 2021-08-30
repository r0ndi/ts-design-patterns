import NotificationDecorator from "./notification-decorator";

class SuccessNotification extends NotificationDecorator {

    public sendSuccessNotification(message: string): string {
        return "Success: " + super.sendNotification(message);
    }

}

export default SuccessNotification;
