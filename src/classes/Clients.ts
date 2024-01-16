import {ICurrentVisitor } from "../interfaces/currentVisitor.interface";

// Клієнти
export class Clients {
    private clientList: ICurrentVisitor[] = [];

    addClient(client: ICurrentVisitor):void {
        if(!this.clientList.includes(client)) {
            this.clientList.push(client);
        }
    }

    get clientListData() {
        return this.clientList;
    }
}