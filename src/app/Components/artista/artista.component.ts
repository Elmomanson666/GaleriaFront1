import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit{

  constructor(public api: RestService){

  }

  ngOnInit(): void {
    this.get();
  }

  public get() {
    this.api.get("Artistas");
  }


}
