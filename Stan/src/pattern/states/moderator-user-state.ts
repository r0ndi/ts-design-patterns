import UserState from "../user-state";

class ModeratorUserState extends UserState {
    viewUserInfo(): void {
        console.log("Current user is moderator");
    }
}

export default ModeratorUserState;
