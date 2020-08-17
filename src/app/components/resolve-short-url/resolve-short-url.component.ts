import { Component, OnInit } from '@angular/core';
import { UrlShrinkerService } from 'src/app/url-shrinker.service';

@Component({
  selector: 'app-resolve-short-url',
  templateUrl: './resolve-short-url.component.html',
  styleUrls: ['./resolve-short-url.component.scss']
})
export class ResolveShortUrlComponent implements OnInit {

  constructor(private sev: UrlShrinkerService) { }

  ngOnInit(): void {

  }

}
