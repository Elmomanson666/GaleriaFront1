import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})


export class ClienteComponent implements OnInit{
  constructor(public api: RestService){

  }

  ngOnInit(): void {
    this.get();
  }

  public get() {
    this.api.get("Clientes");
  }

}
