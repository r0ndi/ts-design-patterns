import CacheHandler from "./pattern/handlers/cache-handler";
import LoggerHandler from "./pattern/handlers/logger-handler";
import ValidatorHandler from "./pattern/handlers/validator-handler";
import DatabaseHandler from "./pattern/handlers/database-handler";

console.log("======== Chain of responsibilities ========");

const cacheHandler = new CacheHandler();
const loggerHandler = new LoggerHandler();
const databaseHandler = new DatabaseHandler();
const validatorHandler = new ValidatorHandler();

validatorHandler.setNext(validatorHandler).setNext(cacheHandler).setNext(loggerHandler).setNext(databaseHandler);
validatorHandler.handle("SELECT ALL");

console.log("======== ======== ======== ======== ========");