import BaseHandler from "../base-handler";

class CacheHandler extends BaseHandler {

    public handle(request: string): string {
        console.log("Caching: " + request);
        return super.handle(request);
    }

}

export default CacheHandler;
