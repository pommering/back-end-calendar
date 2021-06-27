import express,{ request } from 'express';
import cors from 'cors';
import { routes } from './src/routes/index.js';

const PORT = 3333;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Servidor Iniciado na porta ${PORT}: http://localhost:${PORT}`);
});