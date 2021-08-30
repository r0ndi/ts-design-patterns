import UserContext from "./pattern/user-context";
import AdminUserState from "./pattern/states/admin-user-state";
import ModeratorUserState from "./pattern/states/moderator-user-state";

console.log("======== State ========");

const userContext = new UserContext(new AdminUserState());
userContext.viewUserInfo();
userContext.transitionTo(new ModeratorUserState());
userContext.viewUserInfo();

console.log("======== ======== ========");