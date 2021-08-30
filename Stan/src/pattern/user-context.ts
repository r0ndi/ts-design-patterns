import UserState from "./user-state";

class UserContext {
    private state: UserState;

    constructor(state: UserState) {
        this.transitionTo(state);
    }

    public transitionTo(state: UserState): void {
        this.state = state;
        this.state.setContext(this);
    }

    public viewUserInfo(): void {
        this.state.viewUserInfo();
    }
}

export default UserContext;
