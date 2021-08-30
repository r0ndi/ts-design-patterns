import PaymentSolutionInterface from "./payment-solution.interface";

class OfflinePayment implements PaymentSolutionInterface {
    private name: string = "offline";

    public getName = (): string => {
        return this.name;
    }
}

export default OfflinePayment;
