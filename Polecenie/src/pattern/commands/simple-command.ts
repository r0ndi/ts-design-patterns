import CommandInterface from "../command.interface";

class SimpleCommand implements CommandInterface {
    private readonly payload: string;

    public constructor(payload: string) {
        this.payload = payload;
    }

    public execute(): void {
        console.log("Execute command: " + this.payload);
    }
}

export default SimpleCommand;
