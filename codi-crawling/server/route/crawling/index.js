'use strict'

import byslim from './byslim';
import gopeople from './gopeople';
import under70 from './under70';

export default () => {
    [
        byslim,
        gopeople,
        under70
    ].map(handler => handler());
};