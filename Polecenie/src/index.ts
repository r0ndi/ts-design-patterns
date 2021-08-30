import SimpleCommand from "./pattern/commands/simple-command";
import Invoker from "./pattern/invoker";

console.log("======== Command ========");

const invoker = new Invoker();
invoker.setOnStart(new SimpleCommand("example-first-value"));
invoker.setOnFinish(new SimpleCommand("example-second-value"));
invoker.executeCommands();

console.log("======== ======== ========");
