'use strict'

import crawling from './crawling';

export default () => {
    [
        crawling
    ].map(handler => handler());
};