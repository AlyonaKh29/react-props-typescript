export function formatCurrency(cur: string): string {
    switch (cur) {
    case 'USD':
      return `$`;
    case 'EUR':
      return `€`;
    case 'GBP':
      return `£`;
    default:
      return `${cur} `;
  }
}

export function getStockClass(quantity: number): string {
  let stockClass: string;
    if (quantity <= 10) {
    stockClass = 'stock-low';
  } else if (quantity <= 20) {
    stockClass = 'stock-medium';
  } else {
    stockClass = 'stock-high';
  }
  return 'stock-badge '+ stockClass;
}

export function trimTitle(title: string): string {
    if (title.length > 50) {
        return title.substring(0, 50) + '…';
    }
    return title;
}

