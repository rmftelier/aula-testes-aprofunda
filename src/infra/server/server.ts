import express from 'express';

const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send('API rodando com sucesso!');
});

export default app;