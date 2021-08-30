import BaseHandler from "../base-handler";

class DatabaseHandler extends BaseHandler {

    public handle(request: string): string {
        console.log("Executed: " + request);
        return super.handle(request);
    }

}

export default DatabaseHandler;
