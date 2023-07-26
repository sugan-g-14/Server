const multer = require('multer');
const cloudinary = require('./cloudinary')
const { CloudinaryStorage } = require('multer-storage-cloudinary');


const storage = new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:'uploads',
        format: async (req, file) => 'png',
    }
})

const upload = multer({storage:storage})

module.exports = upload;


// const path = require("path")

// module.exports = multer({
//     storage:multer.diskStorage({}),
//     fileFilter : (req,file,cb) => {
//         let ext = path.extname(file.originalname);
//         // if(ext !== '.jpg' && ext !== '.jpeg' !== ".png"){
//         //     cb(new Error('File type is not supported'),false);
//         //     return;
//         // }
//         console.log(file);
//         cb(null,true);
//     }
// })