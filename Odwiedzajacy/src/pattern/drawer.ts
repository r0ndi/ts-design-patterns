import ShapeVisitorInterface from "./shape-visitor.interface";
import DrawableInterface from "./drawable.interface";
import Triangle from "./visitors/trangle";
import Square from "./visitors/squere";
import Circle from "./visitors/circle";

class Drawer implements ShapeVisitorInterface {
    visitCircle(shape: Circle): void {
        console.log("Drawing circle shape");
    }

    visitSquare(shape: Square): void {
        console.log("Drawing square shape");
    }

    visitTriangle(shape: Triangle): void {
        console.log("Drawing triangle shape");
    }

    draw(shape: DrawableInterface): void {
        shape.accept(this)
    }
}

export default Drawer;
