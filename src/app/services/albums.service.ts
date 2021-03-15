import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  url:string = "https://jsonplaceholder.typicode.com/"
  constructor(private http: HttpClient) { }

  getAlbums(){
    return this.http.get(this.url+"albums");
  }

  getPhotos(albums_id: string){
    return this.http.get(this.url+"photos?albumId="+albums_id);
  }
}
