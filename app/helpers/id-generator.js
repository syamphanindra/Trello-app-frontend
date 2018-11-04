import { helper } from '@ember/component/helper';

export function idGenerator([a,b]) {
  return a+b;
}

export default helper(idGenerator);
