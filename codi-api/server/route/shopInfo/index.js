'use strict'

import set_shopInfo from './set_shopInfo';

export default () => {
    [
        set_shopInfo
    ].map(handler => handler());
};