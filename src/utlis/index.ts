export const formatCurrencyUsa = (quantity: number) => {
      return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
      }).format(quantity);
};

export const formatCurrencyEu = (quantity: number) => {
      return new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'EUR'
      }).format(quantity);
};