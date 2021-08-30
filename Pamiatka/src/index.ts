import Originator from "./pattern/originator";
import Caretaker from "./pattern/caretaker";

console.log("======== Memento ========");

const originator = new Originator("default-value");
const caretaker = new Caretaker(originator);

console.log("== Change state value ==");

caretaker.backup();
originator.changeStateValue();
caretaker.showHistory();

console.log("== Change state value ==");

caretaker.backup();
originator.changeStateValue();
caretaker.showHistory();

console.log("== Change state value ==");

caretaker.undo();
caretaker.backup();
caretaker.showHistory();

console.log("======== ======== ========");
