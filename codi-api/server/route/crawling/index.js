'use strict'

import image from './image';
import parser from './parser';

export default () => {
    [
        image,
        parser
    ].map(handler => handler());
};