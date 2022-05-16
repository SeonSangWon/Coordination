'use strict'

import models from './models';
import { logger } from '../../logger';

export default () => {
    try{
        models.sequelize.sync({
            force: false
        });
        logger.info('Successful mysql connection');
    } catch(err) {
        logger.error(`MySQL Database Error >> ${err}`);
    }
};