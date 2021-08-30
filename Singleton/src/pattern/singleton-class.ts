class SingletonClass {
    private static instance?: SingletonClass;

    private constructor() {
        console.log("SingletonObject will only be created once");
    }

    public static getInstance = (): SingletonClass => {
        if (!SingletonClass.instance) {
            SingletonClass.instance = new SingletonClass();
        }

        return SingletonClass.instance;
    }

    public exampleMethod = (): string => {
        return "example-data";
    }
}

export default SingletonClass;
