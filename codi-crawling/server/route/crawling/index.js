'use strict'

import byslim from './byslim';

export default () => {
    [
        byslim
    ].map(handler => handler());
};