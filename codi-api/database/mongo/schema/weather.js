'use strict'

import mongoose from 'mongoose';

const objSchema = new mongoose.Schema({
    baseDate: { type: String },
    baseTime: { type: String },
    category: { type: String },
    fcstDate: { type: String },
    fcstTime: { type: String },
    fcstValue: { type: Number },
    nx: { type: Number },
    ny: { type: Number },
    createdAt: { type: Date, default: Date.now, index: true }
}, {
    autoCreate: true,
    versionKey: false
});

export default objSchema;