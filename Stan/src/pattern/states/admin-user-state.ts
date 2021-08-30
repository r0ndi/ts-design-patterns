import UserState from "../user-state";

class AdminUserState extends UserState {
    viewUserInfo(): void {
        console.log("Current user is admin");
    }
}

export default AdminUserState;
