export interface Result<T> {
    sucesso: boolean;
    erro?: Erro;
    data: T;
}

export interface Erro {

    mensagem: string;
}