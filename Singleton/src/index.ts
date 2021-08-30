import SingletonClass from "./pattern/singleton-class";

console.log("======== Singleton ========");

console.log(SingletonClass.getInstance().exampleMethod());
console.log(SingletonClass.getInstance().exampleMethod());

console.log("======== ======== ========");