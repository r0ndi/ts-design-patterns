import ShapeVisitorInterface from "./shape-visitor.interface";

interface DrawableInterface {
    accept(visitor: ShapeVisitorInterface): void;
}

export default DrawableInterface;
