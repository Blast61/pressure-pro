/**
 * 
 * @param num - The price in currency units (100 = $100)
 * @returns "Free" for 0; otherwise a localized currency string ($100.00)
 */
export function formatPrice(num: number){
    return num === 0 
    ? "Free" 
    : new Intl.NumberFormat(undefined, { style: "currency", currency: "USD"}).format(num);
}
