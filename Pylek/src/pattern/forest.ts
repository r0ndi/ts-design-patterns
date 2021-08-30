import Tree from "./tree";
import TreeType from "./tree-type";
import TreeFactory from "./tree-factory";

class Forest {
    private trees: Tree[] = [];

    public plantTree(x: string, y: string, name: string, color: string, texture: string): void {
        const treeType: TreeType = TreeFactory.getTreeType(name, color, texture);
        const tree: Tree = new Tree(x, y, treeType);
        this.trees.push(tree);
    }

    public draw(): void {
        this.trees.forEach((tree: Tree) => {
           tree.draw();
        });
    }
}

export default Forest;
