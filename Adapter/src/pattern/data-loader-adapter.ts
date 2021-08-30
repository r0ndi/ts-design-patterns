import TxtDataLoader from "./data-loader/txt-data-loader";
import JsonDataLoader from "./data-loader/json-data-loader";

class DataLoaderAdapter extends TxtDataLoader {
    private adapter: JsonDataLoader;

    public constructor(adapter: JsonDataLoader) {
        super();
        this.adapter = adapter;
    }

    public getData(data: string): string {
        return this.adapter.getJsonData({ data: super.getData(data) });
    }
}

export default DataLoaderAdapter;
