import TreeType from "./tree-type";

class TreeFactory {
    private static treeTypes: TreeType[] = [];

    public static getTreeType(name: string, color: string, texture: string): TreeType {
        const existsTreeType = TreeFactory.treeTypes.find((treeType: TreeType) => {
            return treeType.getName() === name
                && treeType.getColor() === color
                && treeType.getTexture() === texture
        })

        if (existsTreeType) {
            return existsTreeType;
        }

        const treeType = new TreeType(name, color, texture);
        TreeFactory.treeTypes.push(treeType);
        return treeType;
    }
}

export default TreeFactory;
