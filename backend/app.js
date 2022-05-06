const path = require('path');
const express = require('express');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require("dotenv").config();

const { passport } = require('./config/passport');
const router = require('./routes');

const app = express();
const upload_path = path.join(__dirname, 'uploads');
const public_path = path.join(__dirname, '..', 'frontend', 'build');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload({ limits: { fileSize: 10 * 1024 * 1024 } }));
app.use(cookieParser());
app.use(cors());
app.use(passport.initialize());
app.use('/api', router);
app.use('/uploads', express.static(upload_path));
app.use(express.static(public_path));

module.exports = app;
