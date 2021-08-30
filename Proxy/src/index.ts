import Database from "./pattern/database";
import DatabaseCacheProxy from "./pattern/database.cache-proxy";

console.log("======== Proxy ========");

const database = new Database();
console.log(database.executeQuery("SELECT ALL"));

const databaseWithCache = new DatabaseCacheProxy(database);
console.log(databaseWithCache.executeQuery("SELECT ALL"));

console.log("======== ======== ========");