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

export const formatDate = (isoString: string) => {
      const date = new Date(isoString);

      const formater = new Intl.DateTimeFormat('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
      });

      return formater.format(date);
};