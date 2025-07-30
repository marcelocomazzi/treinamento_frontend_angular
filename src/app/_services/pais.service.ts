import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from '../_models/result';
import { Pais } from '../_models/local/pais';
import { environment } from '../environments/enviroment';
import { PagingResult } from '../_models/pagingresult';

@Injectable({ providedIn: 'root' })
export class PaisService {
    constructor(private httpClient: HttpClient) { }

    save(pais: Pais) {
        return this.httpClient.post<Result<Pais>>(`${environment.apiUrl}pais`, pais);
    }

    find(pais_id: number) {
        return this.httpClient.get<Result<Pais>>(`${environment.apiUrl}pais/${pais_id}`);
    }

    remove(pais_id: number) {
        return this.httpClient.delete<Result<void>>(`${environment.apiUrl}pais/${pais_id}`);
    }

    list(offset: number, limit: number) {
        return this.httpClient.get<PagingResult<Pais>>(`${environment.apiUrl}pais?offset=${offset}&limit=${limit}`);
    }

}