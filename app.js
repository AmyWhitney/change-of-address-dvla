var express = require('express'),
    app = express(),
    port = (process.env.PORT || 3000);

// Application settings
app.engine('html', require(__dirname + '/lib/template-engine.js').__express);
app.set('view engine', 'html');
app.set('vendorViews', __dirname + '/govuk/views');
app.set('views', __dirname + '/views');

// Middleware to serve static assets
app.use('/public', express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + '/govuk/public'));

var commonHead = '<link href="/public/stylesheets/application.css" rel="stylesheet" type="text/css" />';

// routes

app.get('/', function (req, res) {

  var head = commonHead;

  res.render('index',
            {'pageTitle': 'index',
            'head' : head });
  
});

app.get('/sample', function (req, res) {
  
  var head = commonHead;

  res.render('sample',
            {'pageTitle': 'sample',
            'head' : head });
});

// start the app

app.listen(port);
console.log('');
console.log('Listening on port ' + port);
console.log('');
