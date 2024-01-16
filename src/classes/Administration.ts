import {IEmployee} from "../interfaces/employee.interface";

// Адміністрація
export class Administration {
    private employees: IEmployee[] = [];
    private animals: string[] = [];
    private notification: string[] =[];

    addEmployee(employee: IEmployee):void {
        this.employees.push(employee);
    }

    removeEmployee(employee: IEmployee):void {
        // Логіка видалення співробітника
        const index = this.employees.indexOf(employee);
        if (index !== -1) {
            this.employees.splice(index, 1);
        }
    }

    addAnimal(animal: string):void {
        this.animals.push(animal);
    }

    createEventNotification(event):void {
        // Логіка створення сповіщення про події
        if(event) {
            this.notification.push(`The following ${event} took place in our zoo`)
        }
    }
}
