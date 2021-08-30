import TxtDataLoader from "./pattern/data-loader/txt-data-loader";
import DataLoaderAdapter from "./pattern/data-loader-adapter";
import JsonDataLoader from "./pattern/data-loader/json-data-loader";

console.log("======== Adapter ========");

const txtDataLoader = new TxtDataLoader();
console.log(txtDataLoader.getData("example-data"));

const jsonAdapter = new DataLoaderAdapter(new JsonDataLoader());
console.log(jsonAdapter.getData("example-data"));

console.log("======== ======== ========");