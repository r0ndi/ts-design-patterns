import BasicProductCreator from "./pattern/basic-product-creator";
import NormalProductCreator from "./pattern/normal-product-creator";

console.log("======== Template Method ========");

const basicProductCreator = new BasicProductCreator();
basicProductCreator.templateMethod();

const normalProductCreator = new NormalProductCreator();
normalProductCreator.templateMethod();

console.log("======== ======== ======== ========");