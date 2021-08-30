import ShapeVisitorInterface from "../shape-visitor.interface";
import DrawableInterface from "../drawable.interface";

class Square implements DrawableInterface {
    accept(visitor: ShapeVisitorInterface): void {
        visitor.visitSquare(this);
    }
}

export default Square;
