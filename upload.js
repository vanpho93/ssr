var multer = require('multer');
var storage1 = multer.diskStorage(
  {
    destination(req, file, cb){
       cb(null, 'public/images/background');
    },
    filename(req, file, cb){
      cb(null, Date.now() + file.originalname);
    }
  }
);
function getUploader(fieldname){
  return multer({storage: storage1}).single(fieldname);
}

module.exports = getUploader;
