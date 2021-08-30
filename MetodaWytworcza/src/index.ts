import Application from "./pattern/application";

console.log("======== Factory method ========");

const application = new Application();
console.log(application.initializePaymentSolution("cod").getPaymentSolutionName());
console.log(application.initializePaymentSolution("offline").getPaymentSolutionName());

console.log("======== ======== ======== ========");