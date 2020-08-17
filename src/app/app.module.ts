import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

// Material
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';

// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListViewComponent } from './components/list-view/list-view.component';
import { ShrinkUrlComponent } from './components/shrink-url/shrink-url.component';
import {UrlShrinkerService} from './url-shrinker.service';
import { ResolveShortUrlComponent } from './components/resolve-short-url/resolve-short-url.component';



@NgModule({
  declarations: [AppComponent, ListViewComponent, ShrinkUrlComponent, ResolveShortUrlComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Material
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    MatToolbarModule
  ],
  providers: [UrlShrinkerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
