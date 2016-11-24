var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var delFile = require('./delete');
var parser = bodyParser.urlencoded({extended: false});
var query = require('./db.js');
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(3000, function() {
  console.log('Server started');
});

app.get('/', function(req, res){
  res.render('homepage');
});

app.get('/danhsach', function(req, res){
  query('SELECT * FROM "SanPham"')
  .then(function(result){
    res.render('danhsach', {mang: result.rows});
  })
  .catch(function(err){
    res.send(err);
  })
});

app.get('/sua/:id', function(req, res){
  query('SELECT * FROM "SanPham" WHERE id='+req.params.id)
  .then(function(result){
    res.render('chitiet',{sanPham: result.rows[0]});
  })
  .catch(function(err){
    res.send(err);
  })
});

app.post('/xulyupdate',parser, function(req, res){
  var id = req.body.id;
  var tensp = req.body.tensp;
  var hinh = req.body.hinh;
  var mota = req.body.mota;

  var oldImage = req.body.oldImage;

  query(`UPDATE "SanPham" SET tensp = '${tensp}', hinh='${hinh}',
        mota='${mota}' WHERE id=${id}`)
  .then(function(){
    return delFile('./public/' + oldImage);
  })
  .then(function(dir){
    res.send('Update thanh cong');
  })
  .catch(function(){
    res.send('Sua that bai');
  })
});
