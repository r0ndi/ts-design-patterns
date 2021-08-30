import UserContext from "./user-context";

abstract class UserState {
    protected context: UserContext;

    public setContext(context: UserContext) {
        this.context = context;
    }

    public abstract viewUserInfo(): void;
}

export default UserState;
