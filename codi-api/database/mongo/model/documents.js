'use strict'

import mongoose from 'mongoose';
import region from '../schema/region';
require('dotenv').config();

const SERVER_TYPE = process.env['SERVER_TYPE'];

export default (collectionName, schemaType) => {
    let schema = {}
    if (schemaType === 'region') {
      schema = region;
    }
    return mongoose.model(collectionName, schema);
}  