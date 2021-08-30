class Pizza {
    private parts: string[] = [];

    public addPart = (part: string): void => {
        this.parts.push(part);
    }

    public listParts = (): string => {
        return this.parts.join(", ");
    }
}

export default Pizza;
