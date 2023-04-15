import { Request, Response, Router } from "express";

const router = Router();

router.get('/health', function (req: Request, res: Response) {
    res.status(200).send('Server is OK!');
});

router.get('/people', function (req: Request, res: Response) {
    res.send([
        {
            nombre: 'Pedrito',
            apellido: 'Perez'
        },
        {
            nombre: 'Horacio',
            apellido: 'González'
        }
    ]);
});

router.post('/people', function (req: Request, res: Response) {
    res.send([
        {
            nombre: 'Javier',
            apellido: 'Perez'
        },
        {
            nombre: 'Gabriel',
            apellido: 'González'
        }
    ]);
});



export default router;