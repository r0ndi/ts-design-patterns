import DatabaseInterface from "./database.interface";

class Database implements DatabaseInterface {

    public executeQuery(query: string): unknown {
        return "Executed query: " + query;
    }

}

export default Database;
