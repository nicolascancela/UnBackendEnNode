import { People } from "../utils/types";

function getPeople(): Array<People> {
    return [
        {
            nombre: 'Pedrito',
            apellido: 'Perez'
        },
        {
            nombre: 'Horacio',
            apellido: 'González'
        }
    ];
}

export { getPeople }