import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-cuadro',
  templateUrl: './cuadro.component.html',
  styleUrls: ['./cuadro.component.css']
})
export class CuadroComponent implements OnInit{
  constructor(public api: RestService){

  }

  ngOnInit(): void {
    this.get();
  }

  public get() {
    this.api.get("Cuadros");
  }
}
