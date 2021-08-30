import PaymentSolutionInterface from "../solutions/payment-solution.interface";
import OfflinePayment from "../solutions/offline-payment";
import PaymentCreator from "./payment-creator";

class OfflinePaymentCreator extends PaymentCreator {

    paymentSolution(): PaymentSolutionInterface {
        return new OfflinePayment();
    }

}

export default OfflinePaymentCreator;
