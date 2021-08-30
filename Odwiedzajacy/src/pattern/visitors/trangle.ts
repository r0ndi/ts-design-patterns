import ShapeVisitorInterface from "../shape-visitor.interface";
import DrawableInterface from "../drawable.interface";

class Triangle implements DrawableInterface {
    accept(visitor: ShapeVisitorInterface): void {
        visitor.visitTriangle(this);
    }
}

export default Triangle;
