import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public api: HttpClient) {}
Url="https://localhost:7168/api/"
public async get ( controller: string){
  await this.api.get(this.Url+controller).toPromise().then((res)=>{
    console.log(res);
  });
}
}
