import {ICurrentVisitor} from "../interfaces/currentVisitor.interface";

// Відділ реклами
export class AdvertisingDepartment {
    private clients: ICurrentVisitor[] ;

    constructor(clients: ICurrentVisitor[]) {
        this.clients = clients;
    }

    sendAdvertisingNews(event):void {
        // Логіка розсилки рекламних новин
        this.clients.forEach((client) =>
            client.mailBox.push(`There will be an ${event} at the zoo`))
    }
}