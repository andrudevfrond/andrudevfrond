import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from '../../models/Games';
import { GamesService } from '../../services/games.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') classes = "row";
  
  edit :boolean = false;

  game : any ={
    id : 0,
    title : "",
    description : "",
    image: "",
    create_at : new Date()
  };

  constructor(private gamesService : GamesService, 
    private router: Router,
    private activeRouter: ActivatedRoute) { 
  }

  ngOnInit() { 
    const params= this.activeRouter.snapshot.params;
    
    if (params.id){
      this.gamesService.getGame(params.id).subscribe(
        res => {
          this.game = res[0];
          this.edit = true;
        },
        err => console.log(err)
      );
    }
    else{
      console.log('no existe el juego');
    }
  }
  saveNewGame(){
    this.gamesService.saveGame(this.game).subscribe(
      res => {
        this.router.navigate(['games']);
      },err => console.log(err));
  }

  updateGame(){
    this.gamesService.updateGame(this.game.id, this.game).subscribe(
      res => {
        this.router.navigate(['games']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
