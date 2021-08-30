import EmployeeCollection from "./pattern/employee-collection";

console.log("======== Iterator ========");

const employeeCollection = new EmployeeCollection();
employeeCollection.addItem("Jan Nowak");
employeeCollection.addItem("Marek Kowalski");
employeeCollection.addItem("Anna Nowak");

const iterator = employeeCollection.getIterator();
while (iterator.valid()) {
    console.log(iterator.next());
}

console.log("== Reverse ==");

const reverseIterator = employeeCollection.getReverseIterator();
while (reverseIterator.valid()) {
    console.log(reverseIterator.next());
}

console.log("======== ======== ========");
