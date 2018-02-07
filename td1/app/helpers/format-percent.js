import { helper } from '@ember/component/helper';

export function formatPercent(value) {
  let valeur = value;
  let signe = "%";
  return valeur + signe;
}

export default helper(formatPercent);
