'use strict'

import { logger } from '../../logger';
require('dotenv').config();

const xlsx = require('xlsx');
const XLSX_URL = process.env['XLSX_URL'];
const XLSX_FILE_NAME = process.env['XLSX_FILE_NAME'];

export const getWeatherGPSCode = async () => {
    const workBook = xlsx.readFile(XLSX_URL + XLSX_FILE_NAME);
    const workSheet = workBook.SheetNames[0];
    const sheet = workBook.Sheets[workSheet];
    const data = xlsx.utils.sheet_to_json(sheet);

    return data;
};