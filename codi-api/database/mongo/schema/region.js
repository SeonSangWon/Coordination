'use strict'

import mongoose from 'mongoose';

const objSchema = new mongoose.Schema({
    language: { type: String },
    zoneCode: { type: Number, require: true, index: true, unique: true },
    region: { type: String },
    province: { type: String },
    state: { type: String },
    nx: { type: Number },
    ny: { type: Number },
    lotHour: { type: Number },
    lotMinute: { type: Number },
    lotSecond: { type: Number },
    latHour: { type: Number },
    latMinute: { type: Number },
    latSecond: { type: Number },
    createdAt: { type: Date, default: Date.now }
}, {
    autoCreate: true,
    versionKey: false
});

export default objSchema;