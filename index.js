var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(3000, function() {
  console.log('Server started');
});

app.get('/', function(req, res){
  res.render('homepage');
});
