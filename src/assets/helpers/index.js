export const convertToDollarsandCents = (cents) => {
  const dollarsAndCents = cents/100;
  return `$${dollarsAndCents.toFixed(2)}`
};

export const supplyHeaders = () => {
  return {
    headers: {
      authorization: localStorage.getItem('sc_token')
    }
  }
}