import PaymentCreator from "./payment-creator";
import PaymentSolutionInterface from "../solutions/payment-solution.interface";
import CodPayment from "../solutions/cod-payment";

class CodPaymentCreator extends PaymentCreator {

    paymentSolution(): PaymentSolutionInterface {
        return new CodPayment();
    }

}

export default CodPaymentCreator;
