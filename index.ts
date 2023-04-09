import express, { Response, Request } from 'express';
import router from './src/routes/routes';
const app = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Server is UP!');
});

app.use(router);

app.listen(PORT, () => console.log(`El server se ejecuta correctamente en el puerto: ${PORT}`));