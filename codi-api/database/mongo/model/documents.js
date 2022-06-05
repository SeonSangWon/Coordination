'use strict'

import mongoose from 'mongoose';
import region from '../schema/region';
import style from '../schema/style';
import weather from '../schema/weather';

export default (collectionName, schemaType) => {
    let schema = {}
    if (schemaType === 'region') {
      schema = region;
    } else if (schemaType === 'weather') {
      schema = weather;
    } else if (schemaType === 'style') {
      schema = style;
    } 
    return mongoose.model(collectionName, schema);
}  