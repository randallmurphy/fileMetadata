const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');   
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');
const upload = multer({dest:'uploads/'});


const app = module.exports = express();
dotenv.config();
app.use(bodyParser.json());
app.use(cors());


//bootleg only for one file
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
// });

// for multiple files
app.use(express.static(path.join(__dirname, '/public')));



app.post('/upload', upload.single('file'), (req, res, next) => {

    return res.json(req.file); // file info

    // console.log(req.file); // file info
    // console.log(req.body); // other form data

    // res.json({ message: 'File uploaded successfully', file: req.file });
});

















app.listen(4000, () => {
    console.log('Server is running on port 4000');
});