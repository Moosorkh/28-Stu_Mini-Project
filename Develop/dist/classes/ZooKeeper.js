// TODO: Have the ZooKeeper class inherit Employee properties
import Employee from './Employee.js';
class ZooKeeper extends Employee {
    constructor(name, id, title, salary, specialty) {
        super(name, id, title, salary);
        this.specialty = specialty;
        this.specialty = specialty;
    }
    getSpecialty() {
        return this.specialty;
    }
}
export default ZooKeeper;
