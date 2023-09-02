import express from 'express';

const PORT = 8080;

const app = express();

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
