import { helper } from '@ember/component/helper';

export function plural(params) {
  let [count,zero,un,plus] = params;
  if(count == 0)
    return zero;
  if(count == 1)
    return un;
  else
    return count + " " + plus;
}

export default helper(plural);
