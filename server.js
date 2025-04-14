
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');   
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');
const upload = multer({ dest: 'uploads/' });

const app = module.exports = express();
dotenv.config();
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '/public')));

// File upload endpoint (single file only)
app.post('/api/upload', upload.single('file'), (req, res) => {
    return res.json(req.file); // Send back uploaded file info
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');   
// const dotenv = require('dotenv');
// const multer = require('multer');
// const path = require('path');
// const bodyParser = require('body-parser');
// const upload = multer({dest:'uploads/'});
// const yarn = require('yarn');


// const app = module.exports = express();
// dotenv.config();
// app.use(bodyParser.json());
// app.use(cors());


// //bootleg only for one file
// // app.get('/', (req, res) => {
// //     res.sendFile(__dirname + '/public/index.html');
// // });

// // for multiple files
// app.use(express.static(path.join(__dirname, '/public')));



// app.post('/api/upload', upload.single('file'), (req, res, next) => {

//     return res.json(req.file); // file info

//     // console.log(req.file); // file info
//     // console.log(req.body); // other form data

//     // res.json({ message: 'File uploaded successfully', file: req.file });
// });

















// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

// const express = require('express');
// const cors = require('cors');
// const multer = require('multer');
// const dotenv = require('dotenv');
// const path = require('path');

// dotenv.config();

// const app = express();
// const upload = multer({ dest: 'uploads/' });

// app.use(cors());
// app.use(express.static(path.join(__dirname, '/public')));

// // POST route for file upload
// app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ error: 'No file uploaded' });
//   }

//   const { originalname, mimetype, size } = req.file;
//   res.json({
//     name: originalname,
//     type: mimetype,
//     size: size
//   });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// const express = require('express');
// const cors = require('cors');
// const multer = require('multer');
// const path = require('path');
// const dotenv = require('dotenv');
// dotenv.config();
// const app = express();
// const upload = multer({ dest: 'uploads/' });

// app.use(cors());
// app.use(express.static(path.join(__dirname, '/public')));

// app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ error: 'No file uploaded' });
//   }

//   const { originalname, mimetype, size } = req.file;

//   res.json({
//     name: originalname,
//     type: mimetype,
//     size: size
//   });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// const express = require('express');
// const cors = require('cors');
// const multer = require('multer');
// const path = require('path');

// const app = express();
// const upload = multer({ dest: 'uploads/' });

// app.use(cors());
// app.use(express.static(path.join(__dirname, '/public')));

// app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ error: 'No file uploaded' });
//   }

//   const { originalname, mimetype, size } = req.file;

//   res.json({
//     name: originalname,
//     type: mimetype,
//     size: size
//   });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });