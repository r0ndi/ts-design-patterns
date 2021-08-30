import TreeType from "./tree-type";

class Tree {
    private x: string;
    private y: string;
    private treeType: TreeType;

    public constructor(x: string, y:string, treeType: TreeType) {
        this.treeType = treeType;
        this.x = x;
        this.y = y;
    }

    public draw(): void {
        this.treeType.draw(this.x, this.y);
    }
}

export default Tree;
