class TreeType {
    private readonly name: string;
    private readonly color: string;
    private readonly texture: string;

    public constructor(name: string, color: string, texture: string) {
        this.name = name;
        this.color = color;
        this.texture = texture;
    }

    public getName(): string {
        return this.name;
    }

    public getColor(): string {
        return this.color;
    }

    public getTexture(): string {
        return this.texture;
    }

    public draw(x: string, y: string): void {
        console.log(`Tree [${x},${y}] => name: ${this.getName()}, color: ${this.getColor()}, texture: ${this.getTexture()}`);
    }
}

export default TreeType;
