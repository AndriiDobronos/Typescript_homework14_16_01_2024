import {IEmployee} from "../interfaces/employee.interface";

// Співробітники
export class Employees {
    employeeData: IEmployee[] = [];

    addEmployeeData(employee:IEmployee):void {
        this.employeeData.push(employee);
    }

    removeEmployeeData(name: string):void {
        // Логіка видалення даних про співробітника
        const index = this.employeeData.findIndex((employee:IEmployee) => employee.name === name);
        if (index !== -1) {
            this.employeeData.splice(index, 1);
        }
    }
}
