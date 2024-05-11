export function formatMoneyToUi(money: number): string {
    return (money / 100).toFixed(2) + " zł";
}

export function formatMoneyToAPI(money: number): number {
    return money * 100;
}