'use strict'

import parser from './parser';
import weather from './weather';

export default () => {
    [
        weather,
        parser
    ].map(handler => handler());
};