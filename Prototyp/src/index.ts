import ObjectPrototype from "./pattern/object-prototype";

console.log("======== Prototype ========");

const originalObject = new ObjectPrototype();
originalObject.setFieldValue("test-value");
console.log("Original object value: " + originalObject.getFieldValue());

const copyObject = originalObject.cloneObject();
console.log("Copy object value: " + copyObject.getFieldValue());

originalObject.setFieldValue("changed-test-value");
console.log("Original object value after change: " + originalObject.getFieldValue());
console.log("Copy object value after change: " + copyObject.getFieldValue());

console.log("======== ======== ========");