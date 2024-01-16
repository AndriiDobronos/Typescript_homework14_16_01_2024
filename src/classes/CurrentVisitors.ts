import {ICurrentVisitor} from "../interfaces/currentVisitor.interface";

// Поточні відвідувачі
export class CurrentVisitors {
    private visitors: ICurrentVisitor[] = [];

    addVisitor(name: string, contact: string, mailBox:string[]) {
        this.visitors.push({ name, contact, mailBox });
    }

    notifyBeforeClosing():void {
        // Логіка оповіщення відвідувачів перед закриттям
        const closingHours = new Date().getHours();
        const closingMinutes = new Date().getMinutes();
        if(closingHours === 7 && closingMinutes === 45) {
            this.visitors.forEach((visitor) =>
                visitor.mailBox.push("The zoo will close in 15 minutes"));
        }
    }

    notifyOnDeparture():void {
        // Логіка оповіщення відвідувачів перед відходом
        const closingHours = new Date().getHours();
        if(closingHours === 8) {
            this.visitors.forEach((visitor) =>
                visitor.mailBox.push("Zoo employees are going home"));
        }
    }
}
