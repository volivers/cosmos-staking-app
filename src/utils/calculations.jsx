export const calculateYearlyBalance = (amount, interest) => amount + (amount * (interest / 100));
export const calculateAmount = (balance, interest) => (100 * balance) / (100 + interest);