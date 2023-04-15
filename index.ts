import express, { Response, Request } from 'express';
import router from './src/routes/routes';
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(router);

app.get('/health', (req: Request, res: Response) => res.status(200).send('Server is OK!'));
app.get('/', (req: Request, res: Response) => { res.send(`El server se ejecuta correctamente en el puerto: ${PORT}`); });
app.listen(PORT, () => console.log(`El server se ejecuta correctamente en el puerto: ${PORT}`));