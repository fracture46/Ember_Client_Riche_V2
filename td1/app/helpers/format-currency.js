import { helper } from '@ember/component/helper';

export function formatCurrency(value) {
  value=parseFloat(value).toFixed(2);
  let signe = "€";
  return value + signe;
}

export default helper(formatCurrency);
