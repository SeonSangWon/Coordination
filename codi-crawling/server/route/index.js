'use strict'

import crawling from './crawling';
import parser from './parser';
import weather from './weather';

export default () => {
    [
        crawling,
        weather,
        parser
    ].map(handler => handler());
};