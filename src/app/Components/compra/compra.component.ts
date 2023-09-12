import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit{
  constructor(public api: RestService){

  }

  ngOnInit(): void {
    this.get();
  }

  public get() {
    this.api.get("Compras");
  }
}
