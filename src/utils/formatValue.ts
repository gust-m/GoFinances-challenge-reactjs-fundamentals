const formatValue = (value: number): string => {
  const currencyValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return currencyValue;
};

export default formatValue;
