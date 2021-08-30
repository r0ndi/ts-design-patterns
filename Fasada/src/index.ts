import FileConverter from "./pattern/file-converter";

console.log("======== Facade ========");

const fileConverter = new FileConverter();
console.log(fileConverter.getContent("mp4-file-content", "mp4"));
console.log(fileConverter.getContent("txt-file-content", "txt"));

console.log("======== ======== ========");