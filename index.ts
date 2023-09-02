import express from 'express';

const PORT = 8080;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
