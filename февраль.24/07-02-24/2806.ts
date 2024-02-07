function accountBalanceAfterPurchase(purchaseAmount: number): number {
  const div = purchaseAmount % 10;
  if (div === 0) return 100 - purchaseAmount;
  if (div <= 5) return 100 - purchaseAmount + div;
  if (div > 5) return 100 - (purchaseAmount + (10 - div));
  return 0;
}
