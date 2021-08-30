import HtmlRenderer from "./pattern/renders/html-renderer";
import JsonRenderer from "./pattern/renders/json-renderer";
import Page from "./pattern/page";

console.log("======== Most ========");

const htmlPage = new Page(new HtmlRenderer());
htmlPage.setTitle("HTML page");
htmlPage.setContent("HTML content");
console.log(htmlPage.view());

const jsonPage = new Page(new JsonRenderer());
jsonPage.setTitle("JSON page");
jsonPage.setContent("JSON content");
console.log(jsonPage.view());

console.log("======== ======== ========");