import { Request, Response, NextFunction } from "express"
import { getPeople } from "../service/service"
import { People } from "../utils/types";

function setPeopleMiddleware(req: Request, res: Response, next: NextFunction) {
    res.locals.people = getPeople();
    next();
}

function printPeopleMiddleware(req: Request, res: Response, next: NextFunction) {
    const listOfPeople = res.locals?.people;
    listOfPeople.map((aPerson: People) => console.log(aPerson));
    next();
}

function returnPeopleMiddleware(req: Request, res: Response, next: NextFunction) {
    const people = res.locals?.people;
    res.status(200).send(people);
}

export { setPeopleMiddleware, printPeopleMiddleware, returnPeopleMiddleware };