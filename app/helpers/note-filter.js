import { helper } from '@ember/component/helper';

export function noteFilter([mode,sta]) {
return  mode.filterBy('status', sta);

}

export default helper(noteFilter);
