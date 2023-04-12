import express, { Response, Request } from 'express';
import router from './src/routes/routes';
const app = express();
const PORT = 3000;

app.use(express.json());
app.get('/health', (req: Request, res: Response) => { res.status(200).send(`El server esta OK`)});
app.get('/', (req: Request, res: Response) => { res.send(`El server se ejecuta correctamente en el puerto: ${PORT}`); });
app.use(router);
app.listen(PORT, () => console.log(`El server se ejecuta correctamente en el puerto: ${PORT}`));