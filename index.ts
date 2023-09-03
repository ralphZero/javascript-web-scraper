import express from 'express';

const PORT = 8080;

const app = express();

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const data = [{ key: 'id', value: Date.now().toString() }];
  res.render('index', { data });
});

app.post('/', (req, res) => {
  const reqBody = req.body;
  console.log(reqBody);

  const data = [{ key: 'id', value: Date.now().toString() }];
  res.render('index', { data });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
