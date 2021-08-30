import EventManager from "./pattern/event-manager";
import NewUserListener from "./pattern/listeners/new-user.listener";
import UserDeleteListener from "./pattern/listeners/new-delete.listener";

console.log("======== Observer / Event-subscriber  ========");

const eventManager = new EventManager();

eventManager.subscribe(new NewUserListener());
eventManager.subscribe(new NewUserListener());
eventManager.subscribe(new UserDeleteListener());

console.log("== New user add by business logic ==");
eventManager.notify("new-user",{ email: "test@test.pl" });

console.log("== New user add by business logic ==");
eventManager.notify("new-user", { email: "test@test.com" });

console.log("== User deleted by business logic ==");
eventManager.notify("user-deleted", { email: "test@test.pl" });

console.log("======== ======== ======== ========");
