'use strict'

import parser from './parser';

export default () => {
    [
        parser
    ].map(handler => handler());
};