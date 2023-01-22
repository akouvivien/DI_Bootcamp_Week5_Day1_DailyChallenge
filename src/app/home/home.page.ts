import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';// importe le service creer
import { map } from 'rxjs';
import { Films } from '../models/film.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{
  films: Films = new Films ()// afin de pourvoir instancier l'objet

// injection du service
  constructor(private _filmservice: ApiService ) {}
  // _filmservice est la variable qui..
  ngOnInit(): void {
      this.getFilms();
// pour ce qui est des services les données doivent etre chargeé avant l 'affichage de l'ecran 
//cette operation est ngoninit
  }

  getFilms(){
    //traitement de l'observable
    //le pipiline  .pipe permet de faire un ensemble d'operation sur les données de l'api
    //pipe(map((dataAPi: any)=>{
      // console.log('dataAPi',dataAPi)parcourt la donnée et affiche l'ensemble des données contenu dans l'objet
      //dataAPi correspond a la variable qui stocke les informations de l'api
    this._filmservice.getFilms().pipe(map((dataAPi: any)=>{
      console.log('dataAPi',dataAPi);


        //notre model/// tel que declarer dans l'api
      this.films.title=dataAPi.title
    })).subscribe({
        // next(response) {
        //   console.log(response);
        // },
        error(err) {
          console.log(err);//recuperer l'erreur et affiche l'objet erreur avec tous les informations
        },
        complete() {
          console.log("Terminé");
        },
      }
    );
    //subscribe() permet de declancher l'action 
  }

}
