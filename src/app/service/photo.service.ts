import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { Photo } from '../models/Photo';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  photos: Photo[];
  private apiKey: string = environment.pixabeyApiKey;
  constructor(private http: HttpClient) {}

  getPhotos(searchTerm: string): Observable<Photo[]> {
    const url: string = `https://pixabay.com/api/?key=${this.apiKey}&q=${searchTerm}&image_type=photo`;
    return this.http.get<Photo[]>(url);
  }
}
