import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, FormControl } from '@angular/forms';
import { IBandaRock } from '../interfaces/banda-rock';
import { BandaRock } from '../models/banda-rock.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  fg: FormGroup;
  minLong: number = 4;
  // @Input() listaBandas: Array<IBandaRock>;
  bandasAgregadas: Array<IBandaRock>;
  listaBandas: Array<IBandaRock>;
  banda: IBandaRock;
  bandaRock: BandaRock = new BandaRock(this.http);
  nombreBandaIncorrecto: boolean;
  nombreAlbumIncorrecto: boolean;

  constructor(fb: FormBuilder, private http: HttpClient) {
    this.listaBandas = [];
    this.bandasAgregadas = [];
    this.fg = fb.group({
      nombreBanda: ['', Validators.compose([
        Validators.required,
        this.longitudNombre(this.minLong)
      ])],
      nombreAlbum: ['', Validators.compose([
        Validators.required,
      ])]
    })
  }

  ngOnInit(): void {
  }

  longitudNombre(_minLong: number): ValidatorFn {
    return (control: FormControl): {[s: string]: boolean } | null => {
      const l = control.value.toString().trim().length;
      if(l > 0 && l < _minLong) {
        return { longiIncorrecta : true};
      }
      return null;
    }
  }

  agregar(_nombre: string, _album: string) {
    if(this.buscarBanda(_nombre)){
      if(this.buscarAlbum(_nombre, _album)){
        this.bandasAgregadas.push(this.listaBandas.find(e => e.nombre.toUpperCase() === _nombre.toUpperCase()))
      }
    }
  }

  cargarLista(_event: Array<IBandaRock>) {
    this.listaBandas = _event;
  }

  buscarBanda(_nombre: string): boolean {
    this.nombreBandaIncorrecto = false;
    if(this.listaBandas.find(e => e.nombre.toUpperCase() === _nombre.toUpperCase())){
      return true;
    }
    else {
      this.nombreBandaIncorrecto = true;
    }
  }

  buscarAlbum(_nombre: string, _album: string): boolean {
    this.nombreAlbumIncorrecto = false;
    if(this.listaBandas.find(e => e.nombre.toUpperCase() === _nombre.toUpperCase() && e.album.toUpperCase() === _album.toUpperCase())){
      return true;
    }
    else {
      this.nombreAlbumIncorrecto = true;
    }
  }

  

}
