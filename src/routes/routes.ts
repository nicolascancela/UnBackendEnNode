import { Request, Response, Router } from "express";
import { getPeople } from "../service/service";
import { printPeopleMiddleware, returnPeopleMiddleware, setPeopleMiddleware } from "../midlewares/middleware";

const router = Router();

router.get('/health', function (req: Request, res: Response) {
    res.status(200).send('Server is OK!');
});

router.get('/people', setPeopleMiddleware, printPeopleMiddleware, returnPeopleMiddleware);

router.post('/people', function (req: Request, res: Response) {
    const people = getPeople();
    res.send(people);
});



export default router;