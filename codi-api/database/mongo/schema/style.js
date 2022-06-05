'use strict'

import mongoose from 'mongoose';

const objSchema = new mongoose.Schema({
    shopName: { type: String },
    category: { type: String },
    color: { type: String },
    imgName: { type: String },
    identify: { type: String }, 
    createdAt: { type: Date, default: Date.now, index: true }
}, {
    autoCreate: true,
    versionKey: false
});

export default objSchema;