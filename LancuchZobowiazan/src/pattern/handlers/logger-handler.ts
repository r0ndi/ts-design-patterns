import BaseHandler from "../base-handler";

class LoggerHandler extends BaseHandler {

    public handle(request: string): string {
        console.log("Log: " + request);
        return super.handle(request);
    }

}

export default LoggerHandler;
