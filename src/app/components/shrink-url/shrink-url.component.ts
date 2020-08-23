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

  loading = false;

  generatedResult: UrlRelationship | null;
  baseUrl;

  constructor(private srv: UrlShrinkerService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      url: [
        '',
        [
          Validators.required,
          Validators.pattern("^((https|ftp|http|ftps):\\/\\/((([a-z\\d_]+\\.)(([a-zA-Z\\d_]+)(\\.[a-zA-Z]{2,6})))|(([a-zA-Z\\d_]+)(\\.[a-zA-Z]{2,6}))))(\\/[a-zA-Z\\d_\\%\\-=\\+]+)*(\\?)?([a-zA-Z\\d=_\\+\\%\\-&\\{\\}\\:]+)?")
        ],
      ],
      // ^((https|ftp|http|ftps):\/\/((([a-z\d_]+\.)(([a-zA-Z\d_]+)(\.[a-zA-Z]{2,6})))|(([a-zA-Z\d_]+)(\.[a-zA-Z]{2,6}))))(\/[a-zA-Z\d_\%\-=\+]+)*(\?)?([a-zA-Z\d=_\+\%\-&\{\}\:]+)?
      // ^(https|ftp|http|ftps):\/\/(([a-z\d_]+\.)(([a-zA-Z\d_]+)(\.[a-zA-Z]{2,6}))|(([a-zA-Z\d_]+)(\.[a-zA-Z]{2,6})))(\/[a-zA-Z\d_\%\-=\+]+)*(\?)?([a-zA-Z\d=_\+\%\-&\{\}\:]+)?
      // ^(https|ftp|http|ftps):\\/\\/([a-z\\d_]+\\.)?(([a-zA-Z\\d_]+)(\\.[a-zA-Z]{2,6}))+(\\/[a-zA-Z\\d_\\%\\-=\\+]+)*(\\?)?([a-zA-Z\\d=_\\+\\%\\-&\\{\\}\\:]+)?
      totalValidDays: [365]
    });

    this.baseUrl = this.srv.baseUrl;
  }

  submitForm() {
    this.loading = true;
    console.log("is form valid: "+ this.form.valid);
    if (this.form.valid) {
      this.srv.shrinkUrl(this.form.value).subscribe((result) => {
        if (result.success) {
          console.log("success!!");
          this.form.reset();
          this.generatedResult = result.data;
          this.loading = false
        } else {
          console.log('error generating short url');
          this.loading = false;
        }
      });
    }
  }
}
