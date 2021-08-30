import Circle from "./visitors/circle";
import Square from "./visitors/squere";
import Triangle from "./visitors/trangle";

interface ShapeVisitorInterface {
    visitCircle(shape: Circle): void;
    visitSquare(shape: Square): void;
    visitTriangle(shape: Triangle): void;
}

export default ShapeVisitorInterface;
