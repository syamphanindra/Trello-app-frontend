import { helper } from '@ember/component/helper';
import { filter } from '@ember/object/computed';
import EmberObject from '@ember/object';


export function notesFilter([a,b]) {
return a+b;

}

export default helper(notesFilter);
