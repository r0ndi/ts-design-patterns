import BaseHandler from "../base-handler";

class ValidatorHandler extends BaseHandler {

    public handle(request: string): string {
        console.log("Validation: " + request);
        return super.handle(request);
    }

}

export default ValidatorHandler;
