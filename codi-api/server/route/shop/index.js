'use strict'

import set_shop from "./set_shop";

export default () => {
    [
        set_shop
    ].map(handler => handler());
};