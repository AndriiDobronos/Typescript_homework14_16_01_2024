import {CurrentVisitors} from "./CurrentVisitors";
import {Clients} from "./Clients";
import {Administration} from "./Administration";
import {Revenue} from "./Revenue";
import {Accounting} from "./Accounting";
import {Animals} from "./Animals";
import {Employees} from "./Employees";
import {Budget} from "./Budget";
import {AdvertisingDepartment} from "./AdvertisingDepartament";

// Фасад
export class ZooFacade {
    private currentVisitors: CurrentVisitors;
    private clients: Clients;
    private advertisingDepartment: AdvertisingDepartment;
    private revenue: Revenue;
    private accounting: Accounting;
    private administration: Administration;
    private animals: Animals;
    private employees: Employees;
    private budget: Budget;

    constructor() {
        this.currentVisitors = new CurrentVisitors();
        this.clients = new Clients();
        this.advertisingDepartment = new AdvertisingDepartment(
            [{name: "Bob", contact: "bob@email.com", mailBox: ["",""]}])
        this.revenue = new Revenue();
        this.accounting = new Accounting();
        this.administration = new Administration();
        this.animals = new Animals();
        this.employees = new Employees();
        this.budget = new Budget();
    }

    sellTicket(visitorName: string, contact: string, ticketType: string, ticketCost: number) {
        this.currentVisitors.addVisitor(visitorName, contact,[]);
        this.clients.addClient({name:"Bob",contact:"bob@email.com",mailBox:[]});
        this.revenue.addRevenue(ticketCost);
    }

    closeZoo() {
        this.currentVisitors.notifyBeforeClosing();
        this.currentVisitors.notifyOnDeparture();
        this.advertisingDepartment.sendAdvertisingNews("event");
        this.revenue.sendToAccounting();
        this.accounting.generateFinancialReports();
    }

    manageEmployeesAndAnimals() {
        this.administration.addEmployee({position:"Manager",name: "John Doe",salary:1000});
        this.employees.addEmployeeData({position:"Manager",name: "John Doe",salary:1000});
        this.administration.createEventNotification("event");

        this.administration.addAnimal("Lion");
        this.animals.addAnimalData({species:"Lion",name:"Simba",age:5, isAnimalHealthy:true});
    }

    manageBudgetAndReports() {
        this.budget.manageBudget();
        this.budget.generateFinancialReports();
    }
}
