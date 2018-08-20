import { helper } from '@ember/component/helper';
import { filter } from '@ember/object/computed';
import EmberObject from '@ember/object';


export function notesFilter(params) {

let r= params.content;
console.log(r)

return params;
}

export default helper(notesFilter);
