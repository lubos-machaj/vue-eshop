export function formatPrice(
  price: number,
  currency: string = '€',
  fractionalDigits: number = 0,
): string {
  return `${price.toFixed(fractionalDigits)}${currency}`
}
