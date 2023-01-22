import { HttpClient } from '@angular/common/http';// l'importation est manuelle
import { Injectable } from '@angular/core';
import {  Films} from "../models/film.model";
@Injectable({// decorateur de service
    providedIn:'root'// le service est disponible dans toute l'application
})
export class ApiService{

    endPoint=`https://swapi.dev/api/films/1/`;
    constructor(private _http: HttpClient){}// creation d'une variable de type HttpClient qui permet d'acceder a tous les methosdes de l'api
    //private _http  signifie que la variable _http est privée

    getFilms(){// creation d'une methode qui recupere les données de l'api definit a l'endpoint
        //qui represente le lien de l'api
        return this._http.get(this.endPoint);//retourn un observable 
    }
}