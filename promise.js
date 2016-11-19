var fs = require('fs');

function promiseToDel(path){
  return new Promise(
      function(resovle, reject) {
          fs.unlink(path, function(err) {
              if (err) {
                  //Khong hoan thanh loi hua
                  reject();
              } else {
                  //Hoan thanh loi hua
                  resovle();
              }
          })
      }
  );
}

promiseToDel('./public/1.png').then(
  function(){
    console.log('Thanh cong');
  }
).catch(
  function() {
    console.log('That bai');
  }
)

// var promiseToDeleteFile = new Promise(
//     function(resovle, reject) {
//         fs.unlink('./public/1.png', function(err) {
//             if (err) {
//                 //Khong hoan thanh loi hua
//                 reject();
//             } else {
//                 //Hoan thanh loi hua
//                 resovle();
//             }
//         })
//     }
// );

// promiseToDeleteFile
// .then(
//   function(){
//     console.log('thanh cong');
//   },
//   function(){
//     console.log('that bai');
//   }
// )

// promiseToDeleteFile.then(
//     function() {
//         console.log('thanh cong');
//     }
// ).catch(
//     function() {
//         console.log('that bai');
//     }
// )
