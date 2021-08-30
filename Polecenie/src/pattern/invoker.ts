import CommandInterface from "./command.interface";

class Invoker {
    private onStart: CommandInterface;
    private onFinish: CommandInterface;

    public setOnStart(command: CommandInterface): void {
        this.onStart = command;
    }

    public setOnFinish(command: CommandInterface): void {
        this.onFinish = command;
    }

    public executeCommands(): void {
        this.onStart.execute();

        console.log("Do sth between start and stop command");

        this.onFinish.execute();
    }
}

export default Invoker;
