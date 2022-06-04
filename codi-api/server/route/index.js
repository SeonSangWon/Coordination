'use strict'

import crawling from './crawling';
import shop from './shop';
import shopInfo from './shopInfo';

export default () => {
    [
        crawling,
        shop,
        shopInfo
    ].map(handler => handler());
};