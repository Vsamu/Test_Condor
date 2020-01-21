const app = require('./src/config/server');

const news = require('./src/app/routes/news');
app.use('/', news);

// starting server
app.listen(app.get('port'), () => {
  console.log('server on port ', app.get('port'));
});
