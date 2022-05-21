'use strict'

import mongoose from 'mongoose';
import region from '../schema/region';
import weather from '../schema/weather';

export default (collectionName, schemaType) => {
    let schema = {}
    if (schemaType === 'region') {
      schema = region;
    } else if (schemaType === 'weather') {
      schema = weather;
    } 
    return mongoose.model(collectionName, schema);
}  