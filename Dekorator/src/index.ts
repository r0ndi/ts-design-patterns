import Notification from "./pattern/notification";
import SuccessNotification from "./pattern/success-notification";

console.log("======== Decorator ========");

const notification = new Notification();
console.log(notification.sendNotification("Operation done!"));

const notificationDecorator = new SuccessNotification(notification);
console.log(notificationDecorator.sendSuccessNotification("Operation done!"));

console.log("======== ======== ========");