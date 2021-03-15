import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})

export class AlbumsComponent implements OnInit {
  albums: any = [];
  photos: any = [];
  loading_albums: boolean = false;
  loading_photos: boolean = false;

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.loading_albums = true;
    this.albumsService.getAlbums().subscribe(data => {
      this.albums = data;
      this.loading_albums = false;
    })
  }

  getPhotos(album_id: string) {
    this.loading_photos = true;
    this.albumsService.getPhotos(album_id).subscribe(data => {
      this.photos = data;
      this.loading_photos = false;
    })
  }
}

