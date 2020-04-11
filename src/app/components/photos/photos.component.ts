import { Component, OnInit } from '@angular/core';
import { Photo } from '../../models/Photo';
import { PhotoService } from '../../service/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  photos: Photo[];
  notFound: boolean = false;
  constructor(private photoService: PhotoService) {}

  ngOnInit() {}
  onNewPhotos(photos: Photo[]) {
    this.notFound = photos.length === 0;

    this.photos = photos;
  }
}
