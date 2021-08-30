import PaymentSolutionInterface from "./payment-solution.interface";

class CodPayment implements PaymentSolutionInterface {
    private name: string = "cash on delivery";

    public getName = (): string => {
        return this.name;
    }
}

export default CodPayment;
