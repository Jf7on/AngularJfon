import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { IBandaRock } from '../interfaces/banda-rock'

export class BandaRock {

    listaBandas: Array<IBandaRock>;

    constructor(private http: HttpClient, public votes?: number) {
        this.listaBandas = [];
        this.votes = 0;
        this.listaBandas = this.cargarListaBandas();
    }

    cargarListaBandas(): Array<IBandaRock> {
        this.http.get('../assets/json/lista-de-bandas.json').subscribe(
            data => {
                this.listaBandas = data as IBandaRock[]
            },
            (err: HttpErrorResponse) => {
                alert("Error Cargando la Lista");
            }
        );
        return this.listaBandas;
    }

    voteUp() {
        this.votes++;
    }

    voteDown() {
        this.votes--;
    }
}