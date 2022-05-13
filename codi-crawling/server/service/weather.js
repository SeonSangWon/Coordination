'use strict'

require('dotenv').config();
const request = require('request');
const API_KEY = process.env['API_KEY'];
const API_URL = process.env['API_URL'];

export default async () => {
    async function getCraling() {
        let queryParams = '?' + encodeURIComponent('serviceKey') + `=${API_KEY}`; /* Service Key*/
        queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
        queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* */
        queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); /* */
        queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent('20220513'); /* */
        queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent('0600'); /* */
        queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent('55'); /* */
        queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent('127'); /* */

        request({
            url: API_URL + queryParams,
            method: 'GET'
        }, function (error, response, body) {
            console.log('Status', response.statusCode);
            console.log('Headers', JSON.stringify(response.headers));
            console.log('Reponse received', body);
        });
    };
    await getCraling();
};