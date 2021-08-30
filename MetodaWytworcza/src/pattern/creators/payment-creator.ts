import PaymentSolutionInterface from "../solutions/payment-solution.interface";

abstract class PaymentCreator {
    protected abstract paymentSolution(): PaymentSolutionInterface;

    public getPaymentSolutionName = (): string => {
        return this.paymentSolution().getName();
    }
}

export default PaymentCreator;
