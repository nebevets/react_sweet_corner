export const convertToDollarsandCents = (cents) => {
  const dollarsAndCents = cents/100;
  return `$${dollarsAndCents.toFixed(2)}`
};
