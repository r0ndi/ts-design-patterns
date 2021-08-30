import DatabaseInterface from "./database.interface";

class DatabaseCacheProxy implements DatabaseInterface {
    private database: DatabaseInterface;

    public constructor(database: DatabaseInterface) {
        this.database = database;
    }

    public executeQuery(query: string): unknown {
        console.log("Caching query: " + query);
        return this.database.executeQuery(query);
    }

}

export default DatabaseCacheProxy;
