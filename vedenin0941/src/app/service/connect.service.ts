import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from "../shared/item.model";
@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  url: string = "http://localhost:3000/items";

  constructor(private http : HttpClient) { }


  getItems(): Promise<any>{
    return this.http.get(this.url).toPromise();
  }

  addItem(data: Item): Promise<any> {
    return this.http.post(this.url, data).toPromise();
  }

  updateItem(data: Item): Promise<any>{
    return this.http.put(this.url + "/" + data.id, data).toPromise();
  }

  deleteItem(data: Item): Promise<any>{
    return this.http.delete(this.url + "/" + data.id).toPromise();
  }

}
