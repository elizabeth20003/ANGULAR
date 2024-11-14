import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private httpClient:HttpClient ) { }

    getAllItem(){
      return this.httpClient.get<Item[]>('http://localhost:3000/items');
  }
  create(data:Item){
    return this.httpClient.post('http://localhost:3000/items',data);
  }
  getById(id:number){
    return this.httpClient.get<Item>(`http://localhost:3000/items/${id}`);
  }
  update(data:Item){
    return this.httpClient.put(`http://localhost:3000/items/${data.id}`,data);
  }
  delete(id:number){
    return this.httpClient.delete<Item>(`http://localhost:3000/items/${id}`);
  }

}
