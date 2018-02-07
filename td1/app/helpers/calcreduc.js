import { helper } from '@ember/component/helper';

export function calcreduc(params/*, hash*/) {
  let [valeur, reduc] = params;
  let newval = valeur * reduc;
  return newval;
}

export default helper(calcreduc);
