import OfflinePaymentCreator from "./creators/offline-payment-creator";
import PaymentCreator from "./creators/payment-creator";
import CodPaymentCreator from "./creators/cod-payment-creator";

class Application {
    public initializePaymentSolution = (solutionName: string): PaymentCreator => {
        if (solutionName === "offline") {
            return new OfflinePaymentCreator();
        } else if (solutionName === "cod") {
            return new CodPaymentCreator();
        }

        throw new Error("Error! Unknown payment solution.");
    }
}

export default Application;
