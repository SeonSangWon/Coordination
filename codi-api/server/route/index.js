'use strict'

import crawling from './crawling';
import shop from './shop';

export default () => {
    [
        crawling,
        shop
    ].map(handler => handler());
};