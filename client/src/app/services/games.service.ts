import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/Games';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  api_url = "http://localhost:3000/api";

  constructor(private http: HttpClient) { 

  }
  getGames(){
    return this.http.get(`${this.api_url}/games`);
  }

  getGame(id: string) : Observable<Game>{
    return this.http.get(`${this.api_url}/games/${id}`);
  }

  saveGame(game:Game){
    return this.http.post(`${this.api_url}/games`,game);
  }

  deleteGame(id: string){
    return this.http.delete(`${this.api_url}/games/${id}`);
  }
  updateGame(id:string|number, game:Game) : Observable<Game>{
    return this.http.put(`${this.api_url}/games/${id}`, game);
  }
}
