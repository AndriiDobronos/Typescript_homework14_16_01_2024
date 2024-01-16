// Бухгалтерія
export class Accounting {
    private revenue: number[] = [];
    private payment: number[] = [];
    private financialDatas: {revenue:number,payment:number,balance:number}[] = [];

    generateFinancialReports():number|undefined {
        // Логіка генерації фінансових звітів
        const financialReportHours = new Date().getHours();
        const amount = this.financialDatas.length
        if(financialReportHours === 8) {
            const sumRevenue = this.revenue.reduce(function (
                accumulator, currentValue,
            ) { return accumulator + currentValue }, 0);

            const sumPayment = this.payment.reduce(function (
                accumulator, currentValue,
            ) { return accumulator + currentValue }, 0);

            const balance = sumRevenue - sumPayment;

            const financialData = {revenue: sumRevenue,payment: sumPayment,balance: balance}

            this.financialDatas.push(financialData);
        }
        return this.financialDatas[amount-1]?.balance
    }
}
