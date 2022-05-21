'use strict'

import mongoose from 'mongoose';
import region from '../schema/region';

export default (collectionName, schemaType) => {
    let schema = {}
    if (schemaType === 'region') {
      schema = region;
    }
    return mongoose.model(collectionName, schema);
}  