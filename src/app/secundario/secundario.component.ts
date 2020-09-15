import { Component, OnInit, Input, Output, EventEmitter, AfterViewChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BandaRock } from '../models/banda-rock.model';
import { IBandaRock } from '../interfaces/banda-rock';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-secundario',
  templateUrl: './secundario.component.html',
  styleUrls: ['./secundario.component.css']
})
export class SecundarioComponent implements AfterViewChecked {

  modeloBanda: BandaRock = new BandaRock(this.http);
  listaBanda: Array<IBandaRock>;
  @Output() listaBandas: EventEmitter<Array<IBandaRock>> = new EventEmitter();

  constructor(private http: HttpClient) {
    this.listaBanda = [];
  }

  // ngOnInit(): void {
  //   if (this.modeloBanda.listaBandas.length > 0) {
  //     this.listaBandas.emit(this.modeloBanda.listaBandas);
  //   }
  // }

  enviarLista(_event: Array<IBandaRock>) {
    // if (this.modeloBanda.listaBandas.length > 0) {
    //   this.listaBandas.emit(_event);
    // }
  }

  ngAfterViewChecked() {
    this.listaBandas.emit(this.modeloBanda.listaBandas);
  }

}
