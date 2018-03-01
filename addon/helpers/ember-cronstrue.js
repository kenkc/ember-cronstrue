import {
  helper
} from '@ember/component/helper';
import cronstrue from 'cronstrue';
import Configuration from './../configuration';

export function emberCronstrue(params) {
  return params.length && params[0] ? cronstrue.toString(params[0], {
    locale: ((params.length > 1 && params[1]) ? params[1] : Configuration.defaultLocale)
  }) : '';
}

export default helper(emberCronstrue);