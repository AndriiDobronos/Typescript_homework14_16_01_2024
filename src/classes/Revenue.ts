
// Виручка
export class Revenue {
    private dailyRevenue: number = 0;

    addRevenue(amount: number):void {
        this.dailyRevenue += amount;
    }

    sendToAccounting():number|undefined {
        // Логіка відправлення виручки в бухгалтерію
        const sendingRevenueHours = new Date().getHours();
        if(sendingRevenueHours === 8) {
            return this.dailyRevenue
        }
    }
}