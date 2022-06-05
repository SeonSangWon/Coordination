'use strict'

import db from './models';
import { logger } from '../../logger';

export const getShopLink = async (shopId, category) => {
    try {
        const result = await db.sequelize.query(`
            SELECT shops.name, shopInfos.link, fn_name('${category}') AS category
            FROM shops shops
            INNER JOIN shopInfos shopInfos ON shopInfos.shopId = shops.shopId
            WHERE shopInfos.shopId = ${shopId}
            AND shopInfos.category = '${category}'
        ;`, { type: db.sequelize.QueryTypes.SELECT });
        return result[0];
    } catch (err) {
        logger.error(`getShopInfo`, err);
        return undefined;
    }
};