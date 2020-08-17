import { Component, OnInit } from '@angular/core';
import {
  UrlShrinkerService,
  UrlRelationship,
} from 'src/app/url-shrinker.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-shrink-url',
  templateUrl: './shrink-url.component.html',
  styleUrls: ['./shrink-url.component.scss'],
})
export class ShrinkUrlComponent implements OnInit {
  form: FormGroup;

  generatedResult: UrlRelationship | null;

  constructor(private srv: UrlShrinkerService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      url: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(https?|ftp?|http?)://([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
          ),
        ],
      ],
    });
  }

  submitForm() {
    console.log('trace submit');
    if (this.form.valid) {
      this.srv.shrinkUrl(this.form.value).subscribe((result) => {
        if (result.success) {
          this.form.reset();
          this.generatedResult = result.data;
        } else {
          console.log('error generating short url');
        }
      });
    }
  }
}
