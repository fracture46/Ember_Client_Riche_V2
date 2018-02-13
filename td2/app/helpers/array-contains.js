import { helper } from '@ember/component/helper';
import Ember from 'ember';

export function arrayContains(params) {
  const [items, value] = params;
  return items.indexOf(value) > -1;
}
//retour vrai si value est dans le tableau d'items

export default Ember.Helper.helper(arrayContains);
