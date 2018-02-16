import {
  helper
} from '@ember/component/helper';
import cronstrue from 'cronstrue';

export function emberCronstrue(params, options) {
  return params.length && params[0] ? cronstrue.toString(...params, options) : '';
}

export default helper(emberCronstrue);