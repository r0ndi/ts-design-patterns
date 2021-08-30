import ShapeVisitorInterface from "../shape-visitor.interface";
import DrawableInterface from "../drawable.interface";

class Circle implements DrawableInterface {
    accept(visitor: ShapeVisitorInterface): void {
        visitor.visitCircle(this);
    }
}

export default Circle;
