import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { SecundarioComponent } from './secundario/secundario.component';
import { RouterModule, Router, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { BandaRockSate, reducerBandaRock, intializeBandaRockState } from './models/banda-rock-state.model';

import { ActionReducerMap } from '@ngrx/store';

const rutasApp: Routes = [
  { path: '', component: PrincipalComponent, pathMatch: 'full' },
  { path: 'lista-bandas', component: SecundarioComponent },
  { path: '**', redirectTo: 'error404'},
  { path: 'error404', component: Error404Component }
]

//Redux init
export interface AppState {
  banda: BandaRockSate;
}

const reducers: ActionReducerMap<AppState> = {
  banda: reducerBandaRock
};

let reducersInitialState = {
  destinos: intializeBandaRockState()
}

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    SecundarioComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rutasApp),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
