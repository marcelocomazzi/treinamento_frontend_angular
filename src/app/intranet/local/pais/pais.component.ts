import { CommonModule } from '@angular/common';
import { Component, inject, model, OnInit, signal } from '@angular/core';
import { PaisService } from '../../../_services/pais.service';
import { Pais } from '../../../_models/local/pais';
import { Result } from '../../../_models/result';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';

@Component({
    standalone: true,
    imports: [CommonModule, NgbPagination],
    templateUrl: 'pais.component.html'
})

export class PaisComponent implements OnInit {
    paisService = inject(PaisService);
    paises = signal<Pais[]>([]);
    pais = model<Pais>(new Pais())

    pageNumber = model(1);
    pageSize = signal(20);
    total = signal(0);

    ngOnInit() {
        this.setPage();
    }

    setPage() {
        const offset = (this.pageNumber() - 1) * this.pageSize();
        this.paisService
            .list(offset, this.pageSize())
            .pipe(take(1))
            .subscribe({
                next: (result) => {
                    this.paises.set(result.data);
                    this.total.set(result.total);
                },
                error: (error) => {
                    alert(`Erro ao carregar paises: ${error.message}`);
                    console.error(error);
                }
            });
    }


    edit(pais: Pais) {
        this.pais.set(pais);
        this.paisService.find(pais.pais_id).subscribe({
            next: (result: Result<Pais>) => {   
                if (result.sucesso) {
                    this.pais.set(result.data);
                } else {
                    console.error(result.erro?.mensagem);
                }
            },
            error: (err) => console.error(err)    
        });
    }

    delete(pais: Pais) {
        this.pais.set(pais);
        this.paisService.remove(pais.pais_id).subscribe({
            next: (result: Result<void>) => {
                if (result.sucesso) {
                    this.paises.update(p => p.filter(p => p.pais_id !== pais.pais_id));
                } else {
                    console.error(result.erro?.mensagem);
                }
            },
            error: (err) => console.error(err)
        });

    }
}