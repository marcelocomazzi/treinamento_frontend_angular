import { UF } from "./uf";

export class Cidade {
    cidade_id: number = 0;
    nome: string = '';
    uf: UF = new UF();
    ibge: string = '';
}