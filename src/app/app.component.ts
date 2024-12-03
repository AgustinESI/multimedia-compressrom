import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(
    private translateService: TranslateService,
    private router: Router
  ) {
    this.translateService.setDefaultLang('en');
    //this.translateService.use(localStorage.getItem('lang') || 'en');
    this.translateService.use('en');
  }
  title = 'multimedia-compressrom';

  ngOnInit() {
    this.router.navigate(['/home']);
  }
}
