import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Photo } from 'src/app/models/Photo';
import { PhotoService } from '../../service/photo.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  searchTerm: string = '';
  photos: Photo[];
  @Output() newPhotos: EventEmitter<Photo[]> = new EventEmitter();
  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {}

  onSubmit(e): void {
    e.preventDefault();
    this.photoService.getPhotos(this.searchTerm).subscribe((photos) => {
      this.newPhotos.emit(photos['hits']);
    });
  }
}
