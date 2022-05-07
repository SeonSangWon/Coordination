'use strict'

import express from 'express'
import favicon from 'serve-favicon'
import ejs from "ejs"
import path from 'path'
export const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine("html", ejs.renderFile);

app.use(express.static(__dirname + '/public'));
app.use(favicon(path.join(__dirname, '/public/icon/user', 'favicon.ico')));
app.use('js', express.static(path.join(__dirname + '/public/js')));
app.use('css', express.static(path.join(__dirname + '/public/css')));
app.use('images', express.static(path.join(__dirname + '/public/images')));