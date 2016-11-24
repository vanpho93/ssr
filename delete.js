function delFile(dir){
  return new Promise(function(resolve, reject){
    require('fs').unlink(dir, function(err){
      if(err){
        reject(err);
      }else{
        resolve(dir);
      }
    });
  });
}

module.exports = delFile;
