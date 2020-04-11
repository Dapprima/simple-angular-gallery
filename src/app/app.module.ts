import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { PhotosComponent } from './components/photos/photos.component';
import { PhotoService } from './service/photo.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchFormComponent,
    PhotosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [PhotoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
