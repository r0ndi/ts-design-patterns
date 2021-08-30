type ObjectKeyValue<T> = {
    [key: string]: T;
};

class JsonDataLoader {

    public getJsonData(data: ObjectKeyValue<string>): string {
        return "JSON: " + JSON.stringify(data);
    }

}

export default JsonDataLoader;
