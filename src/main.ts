import app from "./infra/server/server";
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`O servidor está sendo ouvido da porta ${PORT}`);
});