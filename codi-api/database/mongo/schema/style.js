'use strict'

import mongoose from 'mongoose';

const objSchema = new mongoose.Schema({
    shopName: { type: String },
    category: { type: String },
    color: { type: String },
    imgName: { type: String },
    identify: { type: String }, 
    createdAt: { type: Date, default: Date.now }
}, {
    autoCreate: true,
    versionKey: false
});
objSchema.index({ category: -1, imgName: 1 }, {unique: true});

export default objSchema;